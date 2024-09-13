import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-600/95 border-white px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/assets/gymlogo.png"
                            className="mr-3 h-12 rounded-full"
                            alt="Logo"
                        />
                    </Link>

                    {/* Burger Menu Button for small to medium screens */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-white text-2xl focus:outline-none"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Menu for larger screens (lg and above) */}
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {['/', '/about', '/whyjoin', '/training', '/blog', '/contact'].map((path, idx) => (
                                <li key={idx}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? 'text-orange-700'
                                                    : 'text-white'
                                            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                                        }
                                    >
                                        {path === '/'
                                            ? 'Home'
                                            : path.slice(1).replace(/\b\w/g, (l) => l.toUpperCase())}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Buttons for Login and Get Started */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Dropdown menu for small screens */}
                    <div
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } lg:hidden w-full`}
                    >
                        <ul className="flex flex-col items-center mt-4 font-medium py-2">
                            {['/', '/about', '/whyjoin', '/training', '/blog', '/contact'].map((path, idx) => (
                                <li key={idx} className="w-full text-left">
                                    <NavLink
                                        to={path}
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 w-full duration-200 ${
                                                isActive
                                                    ? 'text-orange-700'
                                                    : 'text-white'
                                            }  lg:hover:bg-transparent lg:border-0 hover:text-gray-300 lg:p-0`
                                        }
                                    >
                                        {path === '/'
                                            ? 'Home'
                                            : path.slice(1).replace(/\b\w/g, (l) => l.toUpperCase())}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="inline-flex flex-col items mt-4 mb-11">
                            <Link
                                to="#"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 mt-2 focus:outline-none"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
