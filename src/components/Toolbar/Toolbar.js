import React from 'react';
import '../SideDrawer/DrawerToggleButton';
import './toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
	<header className="toolbar">
		<nav className="toolbar-navigation">
			<div className="toolbar-toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler}/>
			</div>
			<div className="toolbar-logo">
				<a href="/">Home</a>
			</div>
			<div className="spacer" />
			<div className="toolbar-nav-items">
				<ul>
					<li><a href="/">Upload</a></li>
					<li><a href="/">Logout</a></li>
				</ul>
			</div>
		</nav>
	</header>	
);

export default toolbar;