import React from 'react'; 
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const AddTodoForm = (props) => {
  const { 
    todo, 
    addTodo, 
    handleTodoChange, 
    handleDueDateChange,
    dueDate } = props;

  const inputStyles = {
    width: '50vmin',
    minHeight: '30px', 
    margin: '5px auto', 
    borderRadius: '4px', 
    fontSize: '16px'
  }

  const buttonStyles = {
    width: '100px', 
    minHeight: '30px', 
    display: 'block',
    margin: '10px auto'
  }
  return(
    <div>
      <form onSubmit={addTodo}>
        <input className="inputStyles" type="text" value={todo} onChange={handleTodoChange} placeholder="Enter a todo item" />
        <br /> 
        <DatePicker selected={dueDate} onChange={handleDueDateChange} />
        <button style={buttonStyles}>Add Todo</button>
      </form>
    </div>    
  )
}

export default AddTodoForm; 