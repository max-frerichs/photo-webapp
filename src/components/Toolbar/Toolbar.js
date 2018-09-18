import React from 'react';
import '../SideDrawer/DrawerToggleButton';
import './toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';



const toolbar = props => (
	<header className="toolbar">
		<nav className="toolbar-navigation">
			<div className="toolbar-toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="toolbar-logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="none" strokeLinejoin="none" className="feather-home" onClick={props.homeClickHandler}>
					<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
					<polyline points="9 22 9 12 15 12 15 22"></polyline>
				</svg>
			</div>
			<div className="spacer" />
			<div className="toolbar-nav-items">
				<ul>
					<li><a onClick={props.uploadClickHandler}>Upload</a></li>
					<li><a href="/">Logout</a></li>
				</ul>
			</div>
		</nav>
	</header>	
);

export default toolbar ;