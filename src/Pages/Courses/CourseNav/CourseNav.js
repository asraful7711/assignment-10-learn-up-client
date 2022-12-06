import React, { useEffect, useState } from 'react';
import { FaBookReader } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (

        <aside className="w-full " aria-label="Sidebar">
            <div className="overflow-y-auto py- px-3 bg-gray-50  dark:bg-gray-800">
                <ul className="space-y-2">
                    {
                        categories.map(category =>
                            <li key={category.id}>
                                <Link to={`/course/${category.id}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <FaBookReader className='text-lg mx-4'></FaBookReader>
                                    {category.name}
                                </Link>
                            </li>)
                    }

                </ul>
            </div>
        </aside>

    );
};

export default CourseNav;