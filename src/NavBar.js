import React from 'react'
// import Title from './Title';
import Customlogonav from './Customlogonav';
import { NavLink } from 'react-router-dom';



const NavBar=()=> {
    return (
     <>
     <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="container">
	
	<NavLink className="navbar-brand" to="/">
	<img src="assets/img/logo.png" alt="logo"/>
	</NavLink>

	<div className="collapse navbar-collapse" id="navbarsExampleDefault">
	
		<ul className="navbar-nav ml-auto">
			<li className="nav-item active">
			<NavLink className="nav-link" to="/">Stories <span className="sr-only">current</span></NavLink>
			</li>
			<li className="nav-item">
			<NavLink className="nav-link" to="/post">Post</NavLink>
			</li>
			<li className="nav-item">
			<NavLink to='/author' className="nav-link" >Author</NavLink>
			</li>
		</ul>
		
		<form className="form-inline my-2 my-lg-0">
			<input className="form-control mr-sm-2" type="text" placeholder="Search"/>
			<span className="search-icon"><Customlogonav/></span>
		</form>
		
	</div>
</div>
</nav>


</>
    )
}

export default NavBar;
