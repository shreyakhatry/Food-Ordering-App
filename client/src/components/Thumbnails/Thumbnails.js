import {React,useState} from "react";
import { useNavigate} from 'react-router-dom';
import Price from "../Price/Price";
import { useCart } from '../../hooks/useCart';
import axios from "axios";


export default function Thumbnails({foods}){

    const { addToCart } = useCart();
    const navigate = useNavigate();
  
    const handleAddToCart = (clickedFood) => {
      addToCart(clickedFood);
      navigate("/cart");
    };

    return (
        
    <ul className="list">
        
        {foods.map((food)=>
            <li key={food.id}>
                <img className="image" src={`/foods/${food.imageUrl}`} alt={food.name}
            />

            <div className="content">
                <div className="name">{food.name}</div>
                <div className="price">
                    <Price price={food.price} />
                </div>
            </div>
            
            <div className="button">
                <button onClick={()=>handleAddToCart(food)}>Add To Cart</button>
            </div>
        
            </li>)
            }
    </ul>
    );
    
}