<?php
//var_dump($_FILES);
$uploaddir = '/home/mfr/public_html/photo-webapp/react-navigation/src/components/Upload/files/';
$uploadfile = $_FILES['file'];
//var_dump($uploadfile);
foreach($uploadfile as $key => $value) {
	$key. ": " . $value . "\n";
	if($key === 'name') {
		// echo "Filename detected";
		$filename = $value;
	}
	if($key === 'tmp_name') {
		// echo "File directory detected \n";
		$filetmpname = $value;
	}
}

// echo $filetmpdir . "\n";
// echo $filename . "\n";

$movetempfile = $uploaddir . basename($filetmpname);
echo $movetempfile . "\n";

if(move_uploaded_file($_FILES['file']['tmp_name'], $uploaddir . $_FILES['file']['name'])) {
	echo "File stored successfully. Congratulations!"; 
} else {
	echo "File could not be moved. Please try again!";
}



?>