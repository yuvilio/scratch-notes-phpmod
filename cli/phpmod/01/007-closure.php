<?php

// 007-closure.php

$reportforDuty = function($name){
  // we declare (or fetch) the data once and make use of it even when it's
  // no longer arailable
  $rankOf = [
    "Kiel Bassa" => "Commander",
    "Wilco" => "Janitor, Second Class",
    "Stellar" => "Executive Officer"
  ];

  // manufacture functions that use $rankof but don't require the caller to pass
  // that rankoff data in.
  return function() use($rankOf, $name){
    return $rankOf[$name] . " " . $name . ", reporting for duty!";
  };
};

$names = [ "Kiel Bassa", "Stellar", "Wilco" ];

// let's use our closures three times
foreach ($names as $name){
  $report = $reportforDuty($name);
  echo $report() . "\n";

}
