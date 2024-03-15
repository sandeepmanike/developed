package com.example.prototype.modal;

import javax.persistence.GeneratedValue;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="studentInfo")
public class Modal {
	private int  id;
	private String name;
	private String email;
	private int age;
	private String dateOfBirth;
	@Id
	@GeneratedValue(strategy=javax.persistence.GenerationType.IDENTITY)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Column(name="name")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Column(name="email")
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Column(name="age")
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Column(name="dateOfBirth")
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String date_Of_Birth) {
		this.dateOfBirth = date_Of_Birth;
	}
	public String toString() {
		return id+" "+name+" "+email+" "+age+" "+dateOfBirth;
	}
}
