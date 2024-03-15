package com.example.prototype.repo;
import com.example.prototype.modal.Modal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo extends JpaRepository<Modal,Integer> {

}
