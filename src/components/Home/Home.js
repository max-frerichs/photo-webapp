import React from 'react';
import './home.css';
import axios from 'axios';
// var location = {window.location.pathname()};
// console.log(location);


// for(var i=0; i<=)

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filedir: null
		}
	}
	
	getFileDirectory() {
		var dir = axios.post("http://192.168.115.119/~mfr/files/gallery.php");
		console.log(dir);
		this.setState((filedir) => {
			return {
				filedir: this.dir
			}
		})
	}

	render () {
		return (
			<div className="content">
			<div className="head-content">
				<p id="head">Willkommen</p>
			</div>
			<div className="main-content">
				<img src="http://192.168.115.119/~mfr/files/005.jpg" width='160' height='120' alt="1" />
				<img src="http://192.168.115.119/~mfr/files/006.jpg" width='160' height='120' alt="1" />				
			</div>
		</div>
		)
	}
}

export default Home;