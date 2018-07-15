<?php
// Ex004Trait/CervicCruiser.php

namespace Ch01\Ex004Trait;

// since the Detainer is in a different namespace, let's pull it in
use Ch01\Ex004Trait\sections\Detainer as Detainer;

class CervicCruiser {

  use Detainer; //mix in the trait so we can use addDetainee() , etc.

  public function startEngines(){
    return "Engines on";
  }

}
