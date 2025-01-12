import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Header = () => {
    const { currentUser } = useSelector((state) => state.user)
    return (
        <header className="bg-[#0e0e0e] shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to="/">
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <span className="text-[#99D3DF]">Real</span>
                        <span className="text-[#88BBD6]">Estate</span>
                    </h1>
                </Link>

                <form className="bg-[#1e1e1e] p-3 rounded-lg flex items-center text-white">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent focus:outline-none w-24 sm:w-64"
                    />
                    <FaSearch className="text-slate-600 hover:text-[#99D3DF]" />
                </form>

                <ul className="flex gap-4 text-white">
                    <Link to="/">
                        <li className="hidden sm:inline hover:underline hover:text-[#88BBD6]">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden sm:inline hover:underline hover:text-[#88BBD6]">
                            About
                        </li>
                    </Link>
                    <Link to="/profile">
                        {currentUser ? (
                            <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />
                        ) : (
                            <li className="hover:underline hover:text-[#88BBD6]">
                                Sign in
                            </li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
