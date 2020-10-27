package com.example.demo.Repo;

import com.example.demo.Model.CourseList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CourseListRepo extends JpaRepository<CourseList, Long> {



}
