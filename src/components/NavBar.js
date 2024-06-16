import { FaCartShopping } from "react-icons/fa6";
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
                    <a className='' href="/">Home</a>
                    <a className='' href="product">Products</a>                        <i><a href=""><FaCartShopping /></a></i>
                    {search===true?<input className="searchinput" type="search" placeholder="Search" />:<div></div>}
                    <button onClick={()=> setSearch(toggleValue = !toggleValue)}><i><a ><FaSearch /></a></i></button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;