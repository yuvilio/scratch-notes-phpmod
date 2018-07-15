<?php

// 005-interface.php

require_once 'vendor/autoload.php';


use Ch01\Ex003Pen\DaventryVII as DaventryVII; // use the DaventryVII class
$daventry_8_prison = new DaventryVII(["Dwarf Thief"]);

echo "Daventry VII prison, headed by " . $daventry_8_prison->getOfficer() . "\n";
echo "prisoners: " . implode($daventry_8_prison->getPrisoners(), ", ") . "\n";
