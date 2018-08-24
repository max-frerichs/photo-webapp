import React from 'react';
import './upload.css';
import Icons from 'material-design-icons';


const uploadform = props => (
	<div className="upload-form">
		<p>Bitte wählen Sie eine Datei aus: </p>
			<form name="upfile" method="POST" encType="multipart/form-data">
				<label id="button-select">
				<input className="input-button" type="file" name="upload" onChange={this.fileUploadHandler}/>
					Auswählen
				</label>
				<label id="button-upload">
				<input className="input-button" type="submit"/>
				Upload
				</label>
			</form>
	</div>

);





export default uploadform;

