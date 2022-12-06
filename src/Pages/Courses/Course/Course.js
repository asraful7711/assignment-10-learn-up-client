import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { description, name, picture, price } = course;
    console.log(course)
    return (
        <div className="max-w-full mx-4 my-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2">
                <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{name}</h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {
                        description.length > 100 ?
                            <>{description.slice(0, 100) + '...'}<Link className='border-b-2 hover:text-yellow-600 border-indigo-600' to=''>Read more</Link></>
                            :
                            description
                    }
                </p>
            </div>

            <img className="object-cover w-full h-48 mt-2" src={picture} alt="" />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">{price}</h1>
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                    <Link to='/coursedetail'>Go for enrollment</Link>
                </button>
            </div>
        </div>
    );
};

export default Course;