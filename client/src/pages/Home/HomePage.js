import React, { useReducer,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAll, search } from '../../services/foodService';
import Search from '../../components/Search/Search';
import NotFound from '../../components/NotFound/NotFound';
import Thumbnails from '../../components/Thumbnails/Thumbnails';

const initialState={ foods:[] };
const reducer = (state, action) => {
    switch (action.type) {
      case 'FOODS_LOADED':
        return { ...state, foods: action.payload };
      default:
        return state;
    }
  };

export default function HomePage(){

    const [state,dispatch]=useReducer(reducer,initialState);
    const foods={
      items:[
      {
        id: '1',
        name: 'Dal Fry',
        price: 350,
        imageUrl: 'food-1.jpg',
      },
      {
        id: '2',
        name: 'Jeera Rice',
        price: 200,
        imageUrl: 'food-2.jpg',
      },
      {
        id: '3',
        name: 'Kadai Paneer',
        price: 445,
        imageUrl: 'food-3.jpg',
      },
      {
        id: '4',
        name: 'Tandoori Roti',
        price: 25,
        imageUrl: 'food-4.jpg',
      },
    ]
  };
    const {searchTerm}=useParams();

    useEffect(()=>{
       
        const loadFoods=searchTerm? search(searchTerm): getAll();
        
        loadFoods.then(foods=>dispatch({type:'FOODS_LOADED',payload:foods}));
    },[searchTerm]);

    return (
        <>
            <Search/>
            <Thumbnails foods={foods.items}/>
            {foods.length===0 && <NotFound/>}
        </>
        
    );
}