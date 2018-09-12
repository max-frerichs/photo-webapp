<?php
//var_dump($_FILES);
$uploaddir = 'http://192.168.115.119/files';
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