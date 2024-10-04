import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const courses = [
  {
    code: 'CS4800',
    name: 'Interview prep',
    term: 'Spring 2024',
  },
  {
    code: 'CS5610',
    name: 'Web Development',
    term: 'Summer Full 2024',
  },
  {
    code: 'CS5900',
    name: 'Cyber security',
    term: 'Summer Full 2024',
  },
  {
    code: 'CS5001',
    name: 'Python introduction',
    term: 'Fall 2024',
  }
  ,
  {
    code: 'CS7800',
    name: 'Machine learning',
    term: 'Fall 2024',
  }
  ,
  {
    code: 'CS5670',
    name: 'Decrete Math',
    term: 'Fall 2024',
  }
  ,
  {
    code: 'CS5002',
    name: 'ios dev',
    term: 'Fall 2024',
  }
  ,
  {
    code: 'CS6340',
    name: 'Cloud Computing',
    term: 'Fall 2024',
  }
];

export default function CourseList() {
    return (
      <div className="wd-course-list">
        <h1>Courses</h1>
        <hr />
        <h2 className="text-danger">All Courses</h2>
        <hr />
        {courses.map((course) => (
          <div key={course.code} className="wd-course-item">
            <Link to={`/Kanbas/Courses/${course.code}/Modules`} className="text-danger text-decoration-none">
              <h3>{course.code} {course.name}</h3>
              <p>{course.term}</p>
            </Link>
          </div>
        ))}
        <p>
          Welcome to your courses! To customize the list of courses, click on the "All Courses" link and star the courses to display.
        </p>
      </div>
    );
  }