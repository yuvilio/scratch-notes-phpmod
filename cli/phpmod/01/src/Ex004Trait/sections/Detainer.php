<?php
// Ex004Trait/sections/Detainer.php

namespace Ch01\Ex004Trait\sections;

// a trait is like a mixin class allowing more composable  side-inherited behaviour
trait Detainer {
  protected $cells = [];

  public function addDetainee(string $detainee){
    $this->cells[] = $detainee;
  }

  public function getDetainees(){
    return $this->cells;
  }
}
