<?php
// Ch01/Ex003Pen/DaventryVII.php

namespace Ch01\Ex003Pen;

// you can add a use statement for Detining interface but since it's in the same directory and namespace
// it's already technically getting used and so is availabel even without the use statement
// use Ch01\Ex003Pen\Detaining as Detaining;

// the DaventryVII class needs an interface from another file. let's fetch it
// Detaining comes from Ex003Pen/Detaining.php

class DaventryVII implements Detaining {

  private $prisoners = [];
  private $officer;

  public function __construct($prisoners){
    $this->prisoners = $prisoners;
    $this->officer = "Officer Connor";
  }

  //fulfill interface contract
  public function getOfficer(){
    return $this->officer;
  }
  public function getPrisoners(){
    return $this->prisoners;
  }
}
