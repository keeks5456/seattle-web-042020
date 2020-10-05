import React from 'react'
import {store} from '../App'

const Counter = (props) => {

    const increase= () => {
        store.dispatch({type: 'INCREASE', payload: `added ${store.getState().value}`})  
    }

    const decrease = () =>{
        store.dispatch({type: 'DECREASE', payload: `minus ${store.getState().value}`})
    }
        
    

    return (
        <div>
        <div class="counter" id='counter'>{store.getState().count}</div> 
        <div>
           
        </div>
        <button onClick = {increase}>Add </button> 
        <button onClick = {decrease}>Minus </button> 
       </div>
    );
};
export default Counter