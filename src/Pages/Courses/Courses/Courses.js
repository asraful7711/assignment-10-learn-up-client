import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseNav from '../CourseNav/CourseNav';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='lg:grid lg:grid-cols-4  w-full'>
            <div className='lg:col-span-1'>
                <CourseNav></CourseNav>
            </div>
            <div className='col-span-3 bg-slate-300 lg:grid lg:grid-cols-3 p-7'>
                {
                    courses.map(course => <Course key={course._id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;