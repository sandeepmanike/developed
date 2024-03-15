package com.example.prototype.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.prototype.modal.Modal;
import com.example.prototype.serv.Serv;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/c1")
public class Controller {
	@Autowired 
	private Serv serv;
	@PostMapping("/enter")
	public void create(@RequestBody Modal modal) {
		serv.save_data(modal);
	}
	@GetMapping("/getData")
	public List<Modal> find() {
		return serv.getData();
	}
}
