<?php

// 002-use-func.php

// since we're not autoloading just yet we can use require to fetch the modules we'll need
require 'Ex001Starcon/Officer.php';

use function Ex001Starcon\currentOfficer as currentOfficer; // import a function
use const Ex001Starcon\ship as ship; // import a constant

echo currentOfficer() . "\n";
echo "aboard the ship " . ship . "\n";
