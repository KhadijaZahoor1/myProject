"use client";

import SearchCourse from "@/components/SearchCourse";
import Courses from "@/components/courses";
import React, { useState, useEffect } from "react";

const page = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/courses");
      const courses = await response.json();
      setCourses(courses);
    };
    fetchCourses();
  }, []);

  /////
  return (
    <>
      <div>
        <h1 className="text-center text-3xl pt-5 font-semibold">
          Welcome to Web Courses
        </h1>
        {/* <SearchCourse getSearchResults={(results) => setCourses(results)} /> */}
        <Courses courses={courses} />
      </div>
    </>
  );
};

export default page;
