import React from 'react';
import './home.css';
import axios from 'axios';
// var location = {window.location.pathname()};
// console.log(location);
import QuickAction from './QuickAction';



var output = axios.post("http://192.168.115.119/~mfr/files/gallery.php")
var ausgabe = JSON.stringify(output.data);
console.log(ausgabe);

// this.setState((filedir) => {
// 	return {
// 		filedir:  this.dir
// 	}
// })
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filedir: null,
			quickActionTriggered: false
		}
	}
	QuickActionHandler = () => {
		this.setState((prevState) => {
			return{quickActionTriggered: !prevState.quickActionTriggered}
		})
	}
	render () {
		let quickaction;
		if(this.state.quickActionTriggered) {
			quickaction = <QuickAction onClick={this.QuickActionHandler}/>
		}
		return (
			<div className="content">
			<div className="head-content">
				<p id="head">Willkommen</p>
			</div>
			<div className="main-content">
				<img src="http://192.168.115.119/~mfr/files/005.jpg" width='160' height='120' alt="1" onClick={this.QuickActionHandler}/>
				{quickaction}
			</div>
		</div>
		)
	}
}

export default Home;