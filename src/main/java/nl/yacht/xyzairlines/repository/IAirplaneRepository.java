package nl.yacht.xyzairlines.repository;

import nl.yacht.xyzairlines.model.Airplane;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAirplaneRepository extends CrudRepository<Airplane, Long> {
}
