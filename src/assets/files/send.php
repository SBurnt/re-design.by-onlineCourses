<?php

$childname = $_POST['child'];
$parentname = $_POST['parent'];
$usertel = $_POST['tel'];
$childage = $_POST['age'];
$change = $_POST['change'];
$format = $_POST['format'];
$typeCourse = $_POST['type'];

echo ' childname ' . $childname;
echo ' childage ' .  $childage;
echo ' parentname ' .  $parentname;
echo ' usertel ' .  $usertel;
echo ' typeCourse ' .  $typeCourse;
echo ' change ' .  $change;
echo ' format ' .  $format;

// require_once __DIR__ . "/telegram.php"; // Send to Telegram
