import React from "react";
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa";
const Header = () =>{
    return(
        <header className="pl-10 pr-10 w-screen h-16 bg-gray-100 flex justify-between items-center">
            <div>
                <h1><Link to = '/'>Logo</Link></h1>
            </div>
            <form className="rounded bg-white p-2 flex items-center">
                <input type = "text" placeholder = "Search..." aria-label="Search" className="outline-none"/>
                <FaSearch/>
            </form>
            <ul className="flex gap-12">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </header>
    )
}
export default Header;