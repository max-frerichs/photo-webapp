<?php
$printdir = "/home/mfr/public_html/files";
if($printdr == opendir($printdir)) {
	echo "Verzeichnis gelesen" . "<br/>";
	var_dump($printdr);
} else {
	echo "Fehler!";
};

?>