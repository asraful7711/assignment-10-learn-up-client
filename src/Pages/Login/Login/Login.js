import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';



const Login = () => {
    const [error, setError] = useState('')
    const { providerLogin, signIn, setLoading, verifyWithGithub, setUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error)
            })
    }

    const handleGithubSignIn = () => {
        verifyWithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
                navigate(from, { replace: true })
            })
            .then(error => {
                console.error(error)
                setError(error)
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                if (user.emailVerified) {

                    navigate(from, { replace: true })
                }
                else {
                    toast.error('your email is not verified,please verify')
                }

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className="w-full max-w-sm my-10 p-6 m-auto mx-auto bg-white rounded-lg drop-shadow-lg dark:bg-gray-800">
            <div className="flex items-center justify-center mt-6">
                <Link to="#" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                    Log In
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
                <div>
                    <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                    <input name='email' type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        <Link to='/login' className="text-xs text-red-600 dark:text-gray-400 hover:underline">{error}</Link>
                    </div>

                    <input name='password' type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Confirm
                    </button>

                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <Link to='/' className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                    or login with Social Media
                </Link>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>

                <span className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
                    <FaGithub onClick={handleGithubSignIn} className='text-xl'></FaGithub>
                </span>
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to='/signup' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Sign Up</Link></p>
        </div>
    );
};

export default Login;