<?php

// 003-interface.php

// composer installed libraries available without needing to require
require_once 'vendor/autoload.php';

// notice you don't need to use require 'src/Ex002Federation/Ultramarine.php' . It's lazyloaded
// upon usage here
use Ch01\Ex002Federation\Ultramarine as Ultramarine;

$ship = new Ultramarine();
echo $ship->getName() . "\n";
