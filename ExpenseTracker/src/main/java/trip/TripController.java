package trip;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TripController {

	@Autowired
	TripService s;
   
	@PostMapping("/trip")
	public String insertProduct(@RequestBody Trip trip) {
		return s.insertData(trip);
	}
	
	// http://localhost:8081/product
	@PutMapping("/trip")
	public String updateProduct(@RequestBody Trip trip) {
		return s.updateData(trip);
	}

	// http://localhost:8081/product/2
	@DeleteMapping("/trip/{sno}")
	public String updateProduct(@PathVariable("sno") int sno) {
		return s.deleteData(sno);
	}

	// http://localhost:8081/product
	@GetMapping("/trip")
	public List<Trip> retrieveProduct() {
		return s.retrieveData();
	}

}
