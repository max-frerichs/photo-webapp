<?php
// In PHP versions earlier than 4.1.0, $HTTP_POST_FILES should be used instead
// of $_FILES.

$uploaddir = '/home/mfr/public_html/Upload/upload/';
$uploadfile = $uploaddir . basename($_FILES['upload']['name']);
$printdir = '/~mfr/Upload/upload/';
if (move_uploaded_file($_FILES['upload']['tmp_name'], $uploadfile)) {
    echo "File is valid, and was successfully uploaded.\n";
} else {
    echo "Possible file upload attack!\n";
}
echo "<pre>";
print_r($_FILES) . "<br/>";
echo "</pre>";
echo "<a href='gallery.php'>Galerie</a>"
?>
