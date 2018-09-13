import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css';
import Upload from './components/Upload/Upload';
import Home from './components/Home/Home'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideDrawerOpen: false,
			uploadOpen: false,
			loginOpen: false,
			homeClicked: false,
		};
	}

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		})
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	}

	uploadToggleClickHandler = () => {
		this.setState((prevState) => {
			return {
				uploadOpen: true,
				homeClicked: false,
				sideDrawerOpen: false,
			}
		})
	}

	homeClickedHandler = () => {
		this.setState((prevState) => {
			return { 
				homeClicked: true,
				uploadOpen: false,
				sideDrawerOpen: false
			}
		})
		
	}

  render() {
		let backdrop;
		let upload;
		let home;
		if(this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler}/>
		}
		if(this.state.uploadOpen) {
			upload = <Upload />
		}
		if(this.state.homeClicked) {
			home = <Home />
		}
		//console.log(this.state);
    return (
      <div className="App" style={{height: '100%'}}>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler} uploadClickHandler={this.uploadToggleClickHandler} homeClickHandler={this.homeClickedHandler}/>
				<SideDrawer show={this.state.sideDrawerOpen} uploadClickHandler={this.uploadToggleClickHandler}/>
				{backdrop}
				{upload}
				{home}
				<main style={{marginTop: '64px'}}>
					<p></p>
				</main>		
      </div>
    );
  }
}

export default App;
