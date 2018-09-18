import React from 'react';
import './home.css';
import axios from 'axios';
// var location = {window.location.pathname()};
// console.log(location);
// import QuickAction from './QuickAction';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filedir: null,
		}
	}
	componentDidMount() {
		axios.post("http://192.168.115.119/~mfr/files/gallery.php")
		.then(response => {
			var responseData = response.data;
			// console.log(responseData);
			this.setState((response) => {
				return {
					filedir: responseData,
				}
			})
			// console.log(this.state.filedir);
		})
	}
	// QuickActionHandler = () => {
		// this.setState((prevState) => {
			// return{quickActionTriggered: !prevState.quickActionTriggered}
		// })
	// }
	render () {
		// if(this.state.quickActionTriggered) {
			// quickaction = <QuickAction onClick={this.QuickActionHandler}/>
		// }
		var printfile = this.state.filedir;
		var source = 'http://192.168.115.119/~mfr/files/upload/';
		console.log(printfile);
		return (
			<div className="content">
				<div className="head-content">
					<p id="head">Willkommen</p>
				</div>
				<div className="main-content">
					<img src={source} width='160' height='120' alt="1" onClick={this.QuickActionHandler}/>
				</div>
			</div>
		)
	}
}

export default Home;