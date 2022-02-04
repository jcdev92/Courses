package Java;

public class Car {
    Integer id;
    String license;
    Account driver;
    private Integer passenger;

    public Car(String license, Account driver) {
        this.license = license;
        this.driver = driver;
    }

    public Integer getPassenger(){ 
            return passenger;
    }

    void setPassenger(Integer passenger){
        if (passenger > 0 && passenger <= 4) {
            this.passenger = passenger;
        } else {
            System.out.println("Solo pueden viajar de 1 hasta 4 pasajeros en maximo, en el vehiculo");
        }

    }
    
    void printDataCar() {    
        if (passenger != null) {
            System.out.println("License: " + license + " Driver: " + driver.name);
            System.out.println("Passenger: " + passenger);
        }
    }
}
