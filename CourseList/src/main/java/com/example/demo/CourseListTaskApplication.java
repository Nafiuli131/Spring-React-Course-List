package com.example.demo;
import com.example.demo.Model.CourseList;
import com.example.demo.Repo.CourseListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication

public class CourseListTaskApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(CourseListTaskApplication.class, args);
    }
    @Autowired
    private CourseListRepo courseListRepo;

    @Override
    public void run(String... args) throws Exception {
       this.courseListRepo.save(new CourseList("Algorithm",1));
        this.courseListRepo.save(new CourseList("GraphTheory",2));
        this.courseListRepo.save(new CourseList("Data Structure",3));

    }


}
