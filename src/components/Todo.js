import React, { useEffect, useState } from 'react'; 

const Todo = ({ todo, handleRemove, handleArchive, inArchive, isDue }) => {
  const [due, setDue] = useState(false)

  const todoStyle = {
    width: '25vmax', 
    minHeight: '20px', 
    display: 'block', 
    margin: '5px auto 10px auto', 
    textAlign: 'left', 
    backgroundColor: '#cdcdcd', 
    padding: '3px 3px 4px 10px', 
    borderRadius: '4px'
  }

  const dueStyle = {
    color: '#f00',
    fontWeight: 'bold', 
    fontSize: '1.3rem', 
    float: 'right',    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDue(!due);
    }, 3*1000)

    return () => clearInterval(interval);
  }, [due]);
  
  if(!inArchive) {
    return(
      <div>
        <div style={todoStyle}> 
          <span>{todo} </span>
          <span>
            <button 
              onClick={handleRemove} 
              value={todo} 
              title="Delete this item?"
            >
              X
            </button> 
          </span>
          <span>
            <button 
              onClick={handleArchive} 
              value={todo}
            >Archive</button>
          </span>
          <span style={dueStyle}>
            {isDue && due ? '   Due' : ''}
          </span>
        </div>
      </div>
    );
  } else {
    return(
      <div>
        <div style={todoStyle}> 
          <span>{todo} </span>
          <button onClick={handleRemove} value={todo} title="Delete this item?">X</button> 
        </div>
      </div>
        
    );
  }  
}

export default Todo;