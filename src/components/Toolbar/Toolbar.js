import React from 'react';
import '../SideDrawer/DrawerToggleButton';
import './toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './home.svg';

const toolbar = props => (
	<header className="toolbar">
		<nav className="toolbar-navigation">
			<div className="toolbar-toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="toolbar-logo">
				<a onClick={props.homeClickHandler}>Home</a>
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

export default toolbar;