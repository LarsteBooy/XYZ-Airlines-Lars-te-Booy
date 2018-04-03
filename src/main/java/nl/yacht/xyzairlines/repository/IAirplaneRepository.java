package nl.yacht.xyzairlines.repository;

import nl.yacht.xyzairlines.model.Airplane;
import org.springframework.data.repository.CrudRepository;

public interface IAirplaneRepository extends CrudRepository<Airplane, Long> {
}
