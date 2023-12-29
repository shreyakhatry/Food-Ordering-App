import React from "react";
import classes from "./Header.module.css"
import { Link } from "react-router-dom";
export default function Header(){
    const user={
        name:"User"
    };

    const cart={
        totalCount:0
    }
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to={"/"} className={classes.logo}>
                    Food Garage!
                </Link>
                <nav>
                    <ul>
                    {user?
                    (<li className={classes.menu_container}>
                        <Link to={"/"}>{user.name}</Link>
                        <div className={classes.menu}>
                            <Link to="/">Profile</Link>
                            <Link to="/cart">Orders</Link>
                        </div>
                    </li>):
                    (<Link to ="/login">Login</Link>)}
                    <li>
                        <Link to="/cart">
                            Cart{cart.totalCount>0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                            </Link>
                    </li>
                    </ul>
                    
                </nav>
            </div>
        </header>
        
    )
}