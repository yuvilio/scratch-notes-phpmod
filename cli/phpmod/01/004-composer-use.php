<?php

// 004-composer-use.php
// composer installed libraries available without needing to require
require_once 'vendor/autoload.php';

// two ways to use stringy
use Stringy\Stringy as S; //as a class
use function Stringy\create as s; // as a function (passing it strings and chainingmethods)
$ignore = ['at', 'by', 'for', 'in', 'of', 'on', 'out', 'to', 'the'];

//oop approach
$str = S::create('57 gateway bel air w/ mag thrusters');
echo $str->titleize($ignore) . "\n";

//funciton chaining approach
echo s('McKinley Ultramarine Bluerunner')->titleize($ignore) . "\n";
