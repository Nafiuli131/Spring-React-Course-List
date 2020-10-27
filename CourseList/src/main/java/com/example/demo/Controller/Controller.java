package com.example.demo.Controller;
import com.example.demo.Model.CourseList;
import com.example.demo.Repo.CourseListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/list")
public class Controller {
    @Autowired
    private CourseListRepo courseListRepo;



    @GetMapping
    public List<CourseList> findAll()
    {
        return (List<CourseList>) courseListRepo.findAll();
    }

    @PostMapping
    public CourseList save(@RequestBody CourseList courseList)
    {
        return (CourseList) courseListRepo.save(courseList);
    }



}
