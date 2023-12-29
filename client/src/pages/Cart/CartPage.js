import React from "react";
import {useCart} from "../../hooks/useCart"; 
import classes from "./cartPage.css";
import Title from "../../components/Title/Title";
import Price from "../../components/Price/Price";
import { Link } from "react-router-dom";
export default function CartPage(){
const {cart,removeFromCart,changeQuantity}=useCart();
    return <>
        <Title title="Cart Page" margin="1.5rem  0 0 2.5rem"/>
        {cart && cart.items.length>0 &&
        <div className={classes.container}>
            <ul className="list">
                {cart.items.map(item=><li key={item.food.id}>
                    <div>
                        <img src={`/foods/${item.food.imageUrl}`} alt={item.food.name}></img>
                    </div>
                    <div>
                        <select value={item.quantity} onChange={e=>changeQuantity(item,Number(e.target.value))}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div>
                        <Price price={item.price}/>
                    </div>
                    <div>
                        <button className="remove_button" onClick={()=>removeFromCart(item.food.id)}>Remove</button>
                    </div>
                </li>)}
                <div className="checkout">
                    <div>
                        <div className="foods_count">{cart.totalCount}</div>
                        <div className="total_price">
                            <Price price={cart.totalPrice}/>
                        </div>
                        <div>
                            <Link to={"/checkout"}>Proceed to checkout</Link>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
        }
    </>
}