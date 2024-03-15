package com.example.prototype.serv;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.prototype.modal.Modal;
import com.example.prototype.repo.Repo;

@Service
public class Serv {
	@Autowired
	private Repo repo;
	public void save_data(Modal modal) {
		repo.save(modal);
	}
	public List getData() {
		return repo.findAll();
	}
}
