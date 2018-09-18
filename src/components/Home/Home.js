import React from 'react';
import './home.css';
import axios from 'axios';
// var location = {window.location.pathname()};
// console.log(location);
// import QuickAction from './QuickAction';
import HtmlToReact from 'html-to-react';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filedir: 0,
		}
	}
	componentDidMount() {
		axios.get("http://192.168.115.119/~mfr/files/gallery.php")
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
	render () {
		var htmlInput = this.state.filedir
		var htmlToReactParser = new HtmlToReact.Parser(React);
		var reactComponent = htmlToReactParser.parse(htmlInput);
;
		// console.log(component);
		return (
			<div className="content">
				<div className="head-content">
					<p id="head">Ihre Bilder: </p>
				</div>
				{reactComponent}
				<div className="main-content">
				</div>
			</div>
		)
	}
}

export default Home;