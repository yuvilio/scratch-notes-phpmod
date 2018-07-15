<?php

// 001-namespace.php

// since we're not autoloading just yet we can use require to fetch the modules we'll need
require 'Ex001Starcon/Officer.php';

use Ex001Starcon\Officer as Officer; # convenience shorthand for the namespaced class we're using
$stellar = new Officer("Stellar Santiago");

echo  "{$stellar->greet()} \n";
