import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import ArchiveList from './components/ArchiveList';
import TodoList from './components/TodoList';
import TodoHome from './components/TodoHome';
import CityWeather from './components/CityWeather';
import Footer from './components/Footer';
import suggestions from './suggestions';

const App = () =>  {
  const [recentTodoList, setRecentTodoList] = useState([]);
  const [todoList, setTodoList] = useState([]); 
  const [todo, setTodo] = useState('');
  const [todoArchiveList, setTodoArchiveList] = useState([]);
  const [dueDate, setDueDate] = useState(new Date());
  const [city, setCity] = useState('');
  const [currentCity, setCurrentCity] = useState('tampere');
  const [weather, setWeather] = useState({});
  const [showAll, setShowAll] = useState(true);

  let api = `http://api.weatherstack.com/current?access_key=7284902c96f585d7aebdc51e52b7a5ca&query=${currentCity}`;
  
  useEffect(() => {
    const fetchWeather = async () => {
      const weather = await fetch(api);
      const weather_json = await weather.json(); 
      if ('success' in weather_json)
        alert(`The entered ${currentCity} does not exist`)
      else 
        await setWeather(weather_json.current);
    }
    
    fetchWeather();
  }, [api, currentCity])

  const addTodo = e => {
    e.preventDefault(); 

    const newTodo = {
      id: todoList.length + 1, 
      todo: todo, 
      timeCreated: new Date().toLocaleDateString(),
      dueDate: dueDate.toLocaleDateString()
    }

    if(todo !== '' && todo !== 'Enter a todo item') {
      if(recentTodoList.length >= 7) 
        recentTodoList.shift();
      setTodoList(todoList.concat(newTodo));
      setRecentTodoList(recentTodoList.concat(newTodo));
      setTodo('');
      setDueDate(new Date())
    }
    
  }

  const handleRemove = e => {
    const todo_temp = e.target.value; 
    if(window.confirm(`Do you want to delete it?`)) {
      setTodoList(todoList.filter(todo => todo.todo !== todo_temp));
      setRecentTodoList(recentTodoList.filter(todo => todo.todo !== todo_temp));
      setTodoArchiveList(todoArchiveList.filter(todo => todo !== todo_temp));
    }
  }

  const handleArchive = e => {
    const todo_temp = e.target.value; 
    if(window.confirm(`Do you want to archive it?`)) {
      setTodoArchiveList(todoArchiveList.concat(todo_temp))
      setRecentTodoList(recentTodoList.filter(todo => todo.todo !== todo_temp))
      setTodoList(todoList.filter(todo => todo.todo !== todo_temp))
    }
  }

  const handleCurrentCity = e => {
    e.preventDefault();
    setCurrentCity(city);
    setCity('');
  }

  const handleAddSuggestion = e => {
    const suggestion = e.target.value;
    const newSuggestedTodo = {
      todo: suggestion, 
      id: todoList.length + 1, 
      createdDate: new Date().toLocaleDateString(),
      dueDate: new Date().toLocaleDateString()
    }
    if(recentTodoList.length >= 7) recentTodoList.shift();
    setRecentTodoList(recentTodoList.concat(newSuggestedTodo));
    setTodoList(todoList.concat(newSuggestedTodo));
  }

  const handleDueDateChange = e => {
    setDueDate(e)
  }

  const handleShowAll = () => setShowAll(!showAll)

  return (
    <>
    <div>
    <Router>
        <div>
          <div className="nav"><Nav /></div>
          <div className="todos">
          <Switch>
            <Route path="/" exact
              render={props =>
                <TodoHome {...props}
                  addTodo={addTodo}
                  todoList={recentTodoList}
                  todo={todo}
                  handleTodoChange={(e) => setTodo(e.target.value)}
                  handleRemove={handleRemove}
                  handleArchive={handleArchive}
                  handleDueDateChange={handleDueDateChange} 
                  showAll={showAll}   
                  handleShowAll={handleShowAll}  
                  dueDate={dueDate}  
                />
              }
            />
            <Route path="/addtodo"
              render={props =>
                <TodoHome {...props}
                  addTodo={addTodo}
                  todoList={recentTodoList}
                  todo={todo}
                  handleTodoChange={(e) => setTodo(e.target.value)}
                  handleRemove={handleRemove}
                  handleArchive={handleArchive}
                  handleDueDateChange={handleDueDateChange} 
                  showAll={showAll}   
                  handleShowAll={handleShowAll}  
                  dueDate={dueDate}  
                />
              }
            />
            <Route path="/todolist"
              render={props =>
                <TodoList {...props}
                  todoList={todoList}
                  handleRemove={handleRemove}
                  handleArchive={handleArchive}
                  inArchive={false}
                  showAll={showAll}
                  handleShowAll={handleShowAll}
                />
              }
            />
            <Route path="/todosarchive"
              render={props =>
                <ArchiveList {...props}
                  archiveList={todoArchiveList}
                  handleRemove={handleRemove}
                />
              }
            />
          </Switch>       
          </div>
          <div className="weather">
          <CityWeather
            city={city}
            currentCity={currentCity}
            handleCityChange={e => setCity(e.target.value)}
            handleCurrentCity={handleCurrentCity}
            temperature={weather.temperature}
            weatherImage={weather.weather_icons}
            weatherDesc={weather.weather_descriptions}
            handleAddSuggestion={handleAddSuggestion}
            suggestions={suggestions}
          />
          </div>
        </div>
      </Router>
    </div>
      <div className="footer">
        <Footer appName="Todo Application" copyRightTo="Bikarna Pokharel" />
      </div>
    </>
  );
}

export default App;
