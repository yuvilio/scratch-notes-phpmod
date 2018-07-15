<?php

// 006-trait.php

require_once 'vendor/autoload.php';

use Ch01\Ex004Trait\CervicCruiser as CervicCruiser;

$cruiser = new CervicCruiser();
$cruiser->addDetainee("Wilco");
//
// echo $cruiser->startEngines() . "\n";
// echo "detainees listed: " . implode($cruiser->getDetainees(), ",") . "\n";
