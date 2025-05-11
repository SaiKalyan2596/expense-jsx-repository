package user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class UserService {
		
	@Autowired
	UserRepo repo3;
	
	public String insertData(User user) {
		repo3.save(user);
		
		return "Inserted Successfully";
	}
	
	public String updateData(User user) {
		if(repo3.findById(user.getUsername()) != null)
			repo3.delete(user);
		repo3.save(user);
		
		return "Updated Successfully";
	}
	
	public String deleteData(String username) {
		repo3.delete(repo3.findById(username).get());
		return "Deleted Successfully";
	}
	
	public List<User> retrieveData(){
		return repo3.findAll();
	}
}
