import React from 'react'
import App from '../App.css'
function Skills() {
  return (
    <div>
        <h3  style={{ marginLeft: "200px",marginTop:'25px'}} >Additional SKills</h3>
       
      <div className="container">
        <ul  className="skill-box" style={{marginTop:'50px', marginLeft: "30px"}}>
            <li className='li'><button className='list'>Git</button></li>
            <li className='li'><button className="list">GitHub</button></li>
            <li className='li'> <button className="list">Teamwork</button></li>
          
        </ul>
      </div>
      <div className="container">
        <ul  className="skill-box" >
            <li className='li'><button className="list">UI Designer</button></li>
            
            <li className='li'><button className="list">VS Code</button></li>
          
        </ul>
      </div>
      </div>
    
  )
}

export default Skills
