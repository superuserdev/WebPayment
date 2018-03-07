<?php
header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'));
echo json_encode($input, JSON_PRETTY_PRINT);
