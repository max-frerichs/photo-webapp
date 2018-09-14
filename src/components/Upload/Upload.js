import React from 'react';
import './upload.css';
// import Icons from 'react-icons';
import  { post } from 'axios';


class Uploadform extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
			file: 0,
			uploadprogress: 0
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
	}
	
	onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
			var dataresponse = response.data;
			console.log(dataresponse);
			return dataresponse;
		})
		this.setState((file) => {
			return {
				file: 0,
			}
		})
	}

  onChange(e) {
		this.setState({file:e.target.files[0]}); 
		//let uploadfile = {file:e.target.files[0]};
		//console.log(uploadfile);
		let uploadfile = JSON.stringify(this.state.file);
		console.log(uploadfile);
		return uploadfile;
	}
	
  fileUpload(file){
		if(file === 0) {
			alert("Bitte wählen Sie eine Datei aus!");
		}
    const url = 'http://192.168.115.119/~mfr/files/upload.php';
    const formData = new FormData();
		formData.append('file',file)
		var config = {
			headers: {
				'content-type': 'multipart/form-data'
			},
			onUploadProgress: function(progressEvent) {
				// console.log(progressEvent); Nur für Debugging-Zwecke
				var percentCompleted = 0;
				this.percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
				// console.log("Progress: "+this.percentCompleted);
				this.setState((percentCompleted) => {
					return {
						uploadprogress: this.percentCompleted
					}
				})
				// console.log(this.state.uploadprogress); : Debugging
				//return this.percentCompleted;
				return percentCompleted;
			}.bind(this)
		}
		return post(url, formData, config)
  }

	render() {
		var filesize = JSON.stringify(this.state.file.size);
		var unit = " ";
		if(filesize >= 1024) {
			filesize = filesize / 1000
			unit = "KB"
		} 
		var filename = JSON.stringify(this.state.file.name);
		var uploadprogress = JSON.stringify(this.state.uploadprogress);
		// if(uploadprogress === 100) {
			// this.setState((prevState) => {
				// return {
					// uploadprogress: 0
				// }
			// })
		// }
	
	return (
	<div className="upload-form">
		<p>Datei-Upload</p>
			<div className="show-file">
				<p className="file-name">Name: {filename}</p>
				<p className="file-name">Größe: {filesize} {unit}</p>	
				<p className="progress-bar" >Fortschritt: {uploadprogress} %</p>
			</div>
			<form className="uploadform" name="upfile" method="POST" encType="multipart/form-data" onSubmit={this.onFormSubmit} >
				<label id="button-select">
				<input className="input-button" type="file" name="upload" onChange={this.onChange}/>
					Auswählen
				</label>
				<label id="button-upload">
				<input className="input-button" type="submit"/>
				Upload
				</label>
			</form>	
	</div>
	)}
};

export default Uploadform;

