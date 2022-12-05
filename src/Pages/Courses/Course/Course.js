import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { description, name, picture, price } = course
    console.log(course)
    return (
        <div class="max-w-full mx-4 my-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div class="px-4 py-2">
                <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{name}</h1>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {
                        description.length > 250 ?
                            <>{description.slice(0, 100) + '...'}<Link className='hover:border-b-2 hover:text-indigo-600 border-indigo-600' to=''>Read more</Link></>
                            :
                            description
                    }
                </p>
            </div>

            <img class="object-cover w-full h-48 mt-2" src={picture} alt="" />

            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 class="text-lg font-bold text-white">{price}</h1>
                <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
            </div>
        </div>
    );
};

export default Course;