package nl.yacht.xyzairlines.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Airplane {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private int fuel;
    private String presentAirport;

    public Airplane(int fuel, String presentAirport) {
        this.fuel = fuel;
        this.presentAirport = presentAirport;
    }

    public Airplane() {
    }

    public int getFuel() {
        return fuel;
    }

    public void setFuel(int fuel) {
        this.fuel = fuel;
    }

    public String getPresentAirport() {
        return presentAirport;
    }

    public void setPresentAirport(String presentAirport) {
        this.presentAirport = presentAirport;
    }
}
