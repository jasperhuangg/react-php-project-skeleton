<?php
// Right now this just echos back the name of the command
$command = $_GET['command'];
echo json_encode(['response' => $command]);