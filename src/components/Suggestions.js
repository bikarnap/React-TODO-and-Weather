import React from 'react';

const Suggestions = ({ suggestions, addSuggestion, weatherDesc }) => {
  const buttonStyles = {
    minWidth: '30px', 
    minHeight: '30px', 
    margin: '10px auto'
  }

  const todoStyle = {
    width: '90%', 
    minHeight: '20px', 
    display: 'block', 
    margin: '5px auto 10px 0', 
    textAlign: 'left', 
    backgroundColor: '#cdcdcd', 
    padding: '3px 0 4px 0px', 
    listStyle: 'none', 
  }

  const getSuggestions = () => {
    if(suggestions && weatherDesc) {
      let desArray = weatherDesc.join('').split(' '); 
      let found; 
      for(let i = 0; i < desArray.length; i++) {
        found = suggestions.find(s => s.weatherType.toUpperCase() === desArray[i].toUpperCase())
        if (found) {
          break;
        } 
      }
      if(found)
        return(found.suggestions.map(s => <div key={s} style={todoStyle}><li><span>{s} </span><button style={buttonStyles} onClick={addSuggestion} value={s}>+</button></li></div>));
      else
        return('No suggestions found now!');
    }

    if(!weatherDesc)
      return('No suggestions found now!');
  }

  return(
    <div>
      <h3>Suggestions to add to Todo</h3>
      {getSuggestions()} 
    </div>
  )
}

export default Suggestions;