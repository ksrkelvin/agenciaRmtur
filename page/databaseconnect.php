<?php
$servername = "localhost";
$database = "u822104626_agenciarmtur";
$username = "u822104626_agenciarmtur";
$password = "Kelvin1996";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn);
?>