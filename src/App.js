import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css';


class App extends Component {
	state = {
		sideDrawerOpen: false
	};
	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		})
	};
	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	}
  render() {
		let backdrop;
		if(this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler}/>
		}
    return (
      <div className="App" style={{height: '100%'}}>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
				<SideDrawer show={this.state.sideDrawerOpen}/>
				{backdrop}
				<main style={{marginTop: '64px'}}>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
				</main>		
      </div>
			
    );
  }
}

export default App;
