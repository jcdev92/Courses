class Car { 
    constructor(id, model, placa, driver, passenger) {
        this.id;
        this.model = model;
        this.placa = placa;
        this.driver = driver;
        this.passenger;
    }
    printDataCar = () => {
        console.log('Modelo: ' + this.model);
        console.log('Placa: ' + this.placa);
        console.log('Datos del Conductor: ')
        console.log(this.driver);
    } 
}

export default Car;