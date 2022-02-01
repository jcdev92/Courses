import Acc from "./Account.js";
import car from "./Car.js";

// test1 deshabilitado //  let PeterAcc = new Acc(14569, "Peter", 90851852, 'peter@gmail.com', 'peter2022');
// test1 deshabilitado //  console.log(PeterAcc);
// test1 deshabilitado //  console.log('  ');

var Corolla = new car('','Corolla', "JUV35A", new Acc(4514, 'pedrito sanchez', 4512698, 'pedritocontigo@gmail.com', 'ped123', 'J14Q48-98', 0));
Corolla.id = 'a2b5';
Corolla.passenger = 5;

Corolla.printDataCar();
