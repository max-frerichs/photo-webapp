import React from 'react';
import './upload.css';
//import Icons from 'material-design-icons';
import  { post } from 'axios';


class Uploadform extends React.Component  {
  constructor(props) {
    super(props);
    this.state ={
      file:null
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
		
	}
	
  onChange(e) {
		this.setState({file:e.target.files[0]}); 
		let uploadfile = {file:e.target.files[0]};
		console.log(uploadfile);
		return uploadfile;
	}
	
  fileUpload(file){
    const url = 'http://localhost/~mfr/files/upload.php';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
		}
		console.log(file);
    return post(url, formData,config)
  }
//JavaScript-Code zum Upload einer Datei
	render() {
	return (
	<div className="upload-form">
		<p>Bitte wählen Sie eine Datei aus: </p>
			<form name="upfile" method="POST" encType="multipart/form-data" onSubmit={this.onFormSubmit} >
				<label id="button-select">
				<input className="input-button" type="file" name="upload" onChange={this.onChange}/>
					Auswählen
				</label>
				<label id="button-upload">
				<input className="input-button" type="submit"/>
				Upload
				</label>
				<p id="progress">I bims 1 balken</p>
				
			</form>
	</div>
	)}
};

export default Uploadform;

