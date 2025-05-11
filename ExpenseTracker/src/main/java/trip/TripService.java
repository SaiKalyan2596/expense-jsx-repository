package trip;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class TripService {
		
	@Autowired
	TripRepo repo2;
	
	public String insertData(Trip trip) {
		repo2.save(trip);
		
		return "Inserted Successfully";
	}
	
	public String updateData(Trip trip) {
		if(repo2.findById(trip.getSno()) != null)
			repo2.delete(trip);
		repo2.save(trip);
		
		return "Updated Successfully";
	}
	
	public String deleteData(int sno) {
		repo2.delete(repo2.findById(sno).get());
		return "Deleted Successfully";
	}
	
	public List<Trip> retrieveData(){
		return repo2.findAll();
	}
}
