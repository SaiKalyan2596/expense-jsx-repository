package com.fsad.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsad.project.model.User;
import com.fsad.project.repository.UserRepo;

@Service
public class UserService {
    
    @Autowired
    UserRepo repo3;

    public String insertData(User user) {
        repo3.save(user);
        return "Inserted Successfully";
    }

    public String updateData(User user) {
        if (repo3.findById(user.getUsername()).isPresent()) {
            repo3.delete(user);
            repo3.save(user);
            return "Updated Successfully";
        }
        return "User not found!";
    }

    public String deleteData(String username) {
        if (repo3.findById(username).isPresent()) {
            repo3.deleteById(username);
            return "Deleted Successfully";
        }
        return "User not found!";
    }

    public List<User> retrieveData() {
        return repo3.findAll();
    }

    // Method to check user login credentials
    public User checkUserLogin(String username, String password) {
        User user = repo3.findById(username).orElse(null);
        
        // Validate user credentials
        if (user != null && user.getPassword().equals(password)) {
            return user;  // Credentials matched
        }
        
        return null;  // Invalid credentials
    }
}
