import React from 'react'
//import PropTypes from 'prop-types'

function IconSwitch(props) {
	const icon = props.icon
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light">
	  <div className="container-fluid ">
		<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul className="navbar-nav ">
			<li className="nav-item">
			
			  	<i className="material-icons" onClick={props.onSwitch} >{icon}</i>
				
			</li>			
		  </ul>		  
		</div>
	  </div>
	</nav>
</div>

  )
}

//IconSwitch.propTypes = {}

export default IconSwitch
