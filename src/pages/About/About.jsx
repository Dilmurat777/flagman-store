import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
	<div style={{width: '1280px', margin: '0 auto', padding: '0 15px'}}>
		  <h2>About us</h2>
		  
		  <ul>
			  <li><Link to='team'>Our Team Link</Link></li>
			  <li><Link to='contact'>Our Contact Link</Link></li>
		  </ul>


		<Outlet />
	</div>
  )
}

export default About
