package user;

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
public class UserController {

	@Autowired
	UserService s;

	@PostMapping("/user")
	public String insertProduct(@RequestBody User user) {
		return s.insertData(user);
	}
	
	// http://localhost:8081/product
	@PutMapping("/user")
	public String updateProduct(@RequestBody User user) {
		return s.updateData(user);
	}

	// http://localhost:8081/product/2
	@DeleteMapping("/user/{username}")
	public String updateProduct(@PathVariable("username") String username) {
		return s.deleteData(username);
	}

	// http://localhost:8081/product
	@GetMapping("/user")
	public List<User> retrieveProduct() {
		return s.retrieveData();
	}

}
