import React from 'react'; 
import { Link } from 'react-router-dom';

const Nav = () => {

  const styles = {
    color: 'white',
    textDecoration: 'none'
  }

  const logo_style = {
    color: 'skyblue', 
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1.2rem'
    
  }
  return(
    <nav>
      <Link style={logo_style} to="/">
        <h3>Todo Application</h3>
      </Link>
      <ul className="navlinks">
        <Link style={styles} to='addtodo'>
          <li>Add Todo</li>
        </Link>
        <Link style={styles} to="/todolist">
          <li>Todo list</li>
        </Link>
        <Link style={styles} to="/todosarchive">
          <li>Todo Archive</li>
        </Link>
        {/* <Link style={styles} to="/weather">
          <li>Weather</li>
        </Link> */}
      </ul>
    </nav>
  )
}

export default Nav;