<?php

$childName = $_POST['child'];
$childAge = $_POST['age'];
$cityName = $_POST['city'];
$userTel = $_POST['tel'];
$format = $_POST['format'];
$typeCourse = $_POST['type'];

echo ' childName ' . $childName;
echo ' childAge ' .  $childAge;
echo ' cityName ' .  $cityName;
echo ' userTel ' .  $userTel;
echo ' format ' .  $format;
echo ' typeCourse ' .  $typeCourse;

// require_once __DIR__ . "/telegram.php"; // Send to Telegram
