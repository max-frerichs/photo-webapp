import React from 'react';
import './SideDrawer.css';
//Hier befindet sich der Code für das aufklappbare Menü
const sideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if(props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<nav className ={drawerClasses}>
			<ul>
				<li>
					<a href="/">Upload</a>
				</li>
				<li>
					<a href="/">Logout</a>
				</li>
			</ul>
		</nav>
	);
};

export default sideDrawer;