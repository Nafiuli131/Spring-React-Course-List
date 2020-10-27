package com.example.demo.Model;

import javax.persistence.*;

@Entity
@Table(name = "courselist")

public class CourseList {


    private long id;
    @Column(name = "courseList")
    private String courseList;

    public CourseList()
    {

    }

    public CourseList(String courseList,long id) {
        this.courseList = courseList;
        this.id=id;
    }
    public CourseList(long id) {
        this.id = id;
    }
    @Id
    @GeneratedValue
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public String getCourseList() {
        return courseList;
    }

    public void setCourseList(String courseList) {
        this.courseList = courseList;
    }



}
