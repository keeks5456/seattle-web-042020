import React from 'react'
import { store } from '../App'

const Number = () => {
  
    const changeValue = (e) =>{
        store.dispatch({type:'SETVALUE', payload: e.target.value})
    }

    const increase= () => {
        store.dispatch({type: 'INCREASE', payload: `added ${store.getState().value}`})  
    }
    return (
        <div>
        <div class="profile" id='profile'>{}</div> 
       <input type="number" name="number" min="0" onChange={}></input>
       </div>
    );
};
export default Number