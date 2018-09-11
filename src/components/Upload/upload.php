<?php
//var_dump($_FILES);
$uploaddir = '/home/mfr/public_html/photo-webapp/react-navigation/src/components/Upload/files/';
if(is_uploaded_file($_FILES['file']['tmp_name'])) {
	if(move_uploaded_file($_FILES['file']['tmp_name'], $uploaddir . $_FILES['file']['name'])) {
		echo "File stored successfully. Congratulations!"; 
	} else {
		echo "File could not be moved. Please try again!";
	}
} else {
	echo "No file uploaded";
}


?>