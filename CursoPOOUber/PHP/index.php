<?php 

// ---------------------------------------------------------------- Primera practiva de clase con PHP DESACTIVADA
// ---------------------------------------------------------------- require_once('car.php');
// ---------------------------------------------------------------- require_once('account.php');
// ---------------------------------------------------------------- 
// ---------------------------------------------------------------- $car = new Car('AW456', new Account('Andres Herrera', 'AMS123'));
// ---------------------------------------------------------------- $car->printDataCar();


// ---------------------------------------------------------------- Ssegunda Practica Herencias con PHP ACTIVA

require_once('car.php');
require_once('UberX.php');
require_once('UberPool.php');
require_once('account.php');

$uberX = new UberX("QLK945", new Account("Andres Herrera", "JKSL045"), "Chevrolet", "Sparkline");
$uberX->printDataCar();

$uberPool = new UberPool("KIJ251", new Account("Sarah Barrios", "POLS4598"), "Dodge", "Atittude");
$uberPool->printDataCar();

?>
