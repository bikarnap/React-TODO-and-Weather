import React from 'react'; 

import Todo from './Todo';

const TodoList = ({ todoList, handleRemove, handleArchive, inArchive, showAll, handleShowAll }) => {
  const renderTodos = () => {
    if(todoList) {
      let todoToShow = showAll
        ? todoList
        : todoList.filter(todo => todo.dueDate.includes(new Date().getUTCDate()));
      return(
        <div>
          {todoList.length > 0 ? <h3>Todo List</h3> : <div><h3>No todo entered yet</h3><p>Your todo list will appear here</p></div>}
          {
            todoToShow.map(todo => 
              <Todo 
                key={todo.id} 
                inArchive={inArchive} 
                todo={todo.todo} 
                handleRemove={handleRemove} 
                handleArchive={handleArchive}
                isDue={todo.dueDate === new Date().toLocaleDateString()}
              />
            )
          }
          {todoList.length > 0 
            ? <button onClick={handleShowAll} className="buttonStyles">{showAll ?  'Show todos due today' : 'Show all todos'}</button>
            : ''}
          
        </div>
      )
    } 
  }
  return(
    <div>
      {renderTodos()}
    </div>
  )
}

export default TodoList; 