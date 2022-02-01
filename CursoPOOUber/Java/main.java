package Java;

class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.license = "AMQ117";
        car.driver = "Andres Herrera";
        car.passenger = 4;
        car.printDataCar();

        Car Bentley = new Car();
        Bentley.license = "JCL94A";
        Bentley.driver = "Carlitos Sanchez";
        Bentley.passenger = 4;
        Bentley.printDataCar();
    }
}
