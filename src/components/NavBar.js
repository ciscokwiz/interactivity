import React, { useState }  from "react";
import './Navbar.css';
import { FaSearch } from "react-icons/fa";



function NavBar(){
    
    const [search, setSearch] = useState(null);
    let toggleValue = false;


    return(
        <div className="navBar">
            <div className="sidebar">
                
                <h1 className='logo'>Hair<span className="color-logo">Shades</span>.co</h1>
            </div>
            <div className="nav-links">
                <div className="nav-buttons">
                    <a className='nav-text' href="/">Home</a>
                    <a className='nav-text' href="product">Products</a>
                    {search===true?<input className="searchinput" type="search" placeholder="Search" />:<div></div>}
                    <button onClick={()=> setSearch(toggleValue = !toggleValue)}><i><FaSearch className="search-icon" /></i></button>
                    <div class="icon-cart">
                        <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                        </svg>
                         <span>0</span>
              
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default NavBar;