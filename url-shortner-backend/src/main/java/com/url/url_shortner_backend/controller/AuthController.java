package com.url.url_shortner_backend.controller;

import com.url.url_shortner_backend.Models.Users;
import com.url.url_shortner_backend.dto.LoginRequest;
import com.url.url_shortner_backend.dto.RegisterRequest;
import com.url.url_shortner_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:5173")
@AllArgsConstructor
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/public/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest){
        Users user = new Users();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword());
        user.setRole("ROLE_USER");
        userService.registerUser(user);
        return ResponseEntity.ok("User Registered successfully!!");
    }

    @PostMapping("/public/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(userService.authenticateUser(loginRequest));
    }


}
