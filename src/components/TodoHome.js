import React from 'react'; 

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import introText from '../homeText';

const TodoHome = (props) => {
  const { 
    todo, 
    addTodo, 
    handleTodoChange, 
    handleRemove, 
    handleArchive,
    handleDueDateChange,
    todoList, 
    showAll, 
    handleShowAll, 
    dueDate, 
  } = props;

  const styles = {
    marginTop: '5vmax'
  }

  const intro = {
    display: 'block', 
    width: '70%', 
    margin: '10px auto'
  }
  
  return(
    <div>
      <div style={intro}>
        {introText}
      </div>
      <div style={styles}>
        <AddTodoForm
          addTodo={addTodo}
          todo={todo}
          handleTodoChange={handleTodoChange}
          handleDueDateChange={handleDueDateChange}
          dueDate={dueDate}
        />
        <TodoList 
          todoList={todoList} 
          handleRemove={handleRemove}
          handleArchive={handleArchive}   
          showAll={showAll}   
          handleShowAll={handleShowAll}
        />
      </div>
    </div>
  )
}

export default TodoHome; 