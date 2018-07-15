<?php
// Ch01/Ex003Pen/Detaining.php

namespace Ch01\Ex003Pen;

interface Detaining {

  // the contract for any implementing class
  public function getOfficer();
  public function getPrisoners();

}
