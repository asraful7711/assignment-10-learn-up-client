import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const courseDetail = useLoaderData();
    const { picture, description, name, price } = courseDetail;
    return (
        <div className="lg:flex max-w-screen-lg lg:mx-auto mx-10 my-20 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className=" bg-cover " >
                <img className='lg:h-72 lg:w-80' src={picture} alt="" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>

                <div className="flex mt-2 item-center">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>

                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{price}</h1>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Get Premium access</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;