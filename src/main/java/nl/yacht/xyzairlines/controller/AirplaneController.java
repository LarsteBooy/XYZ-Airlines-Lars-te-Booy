package nl.yacht.xyzairlines.controller;

import nl.yacht.xyzairlines.model.Airplane;
import nl.yacht.xyzairlines.repository.IAirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/airplanes")
public class AirplaneController {

    @Autowired
    private IAirplaneRepository airplaneRepository;

    //add Airplane
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Airplane create(@RequestBody Airplane airplane){
        return this.airplaneRepository.save(airplane);
    }

    //Get all Airplanes
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Airplane> getAll(){
        return this.airplaneRepository.findAll();
    }

    //Get one Airplane
    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Airplane getOne(@PathVariable long id){
        return this.airplaneRepository.findOne(id);
    }

    //Delete Airplane
    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable long id){
        this.airplaneRepository.delete(id);
    }



}
