import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper bg-primary">
                <div className="container">
                    <Link to="/" className="brand-logo">SHEJAR</Link>
                    
                    <ul className="right">
                        <li><a href="#our">Menu</a></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;