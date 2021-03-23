import React from 'react'; 

import Todo from './Todo';

const ArchiveList = ({ archiveList, handleRemove }) => {
  const renderTodos = () => {
    if(archiveList) {
      return(
        archiveList.map(todo => 
          <Todo 
            key={todo} 
            inArchive={true} 
            todo={todo} 
            handleRemove={handleRemove} 
          />
        )
      )
    }
    
  }
  return(
    <div>
      {renderTodos().length > 0 ? <h3>Todo archive list</h3> : <h3>No todo archived yet!</h3>}
      {renderTodos()}
    </div>
  )
}

export default ArchiveList; 