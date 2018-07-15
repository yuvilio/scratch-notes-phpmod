<?php
// Ex001Starcon/Officer.php

namespace Ex001Starcon;

class Officer {
  private $name;
  public function __construct($name)
  {
      $this->name = $name;
  }

  public function greet(){
    return $this->name . " reporting for duty!";
  }
}

// exported constant
const ship = "SES Heinz 57";

// exported function
function currentOfficer(){
  $stellar = new Officer("Stellar Santiago");
  return $stellar->greet();
}
