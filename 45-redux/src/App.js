
import React from 'react';
import './App.css';
import Counter from './components/Counter'
import Number from './components/Number'
import { createStore } from 'redux'
 

export const initialState = {
  count: 0,
  value:1,
  message: ''
}

const reducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type){
    case 'INCREASE':
      return {...state, count:state.count  + parseInt(state.value) } //we have to parse these because they technically come ut t be strings and we want to add them as numbers
    case 'DECREASE':
      return {...state, count:state.count - parseInt(state.value), message: action.payload}
      // message will log 'added 1'
      case 'SETVALUE':
        return {...state, value: action.payload}
    default:
      return state
  }
}

export const store = createStore(reducer) 

export class App extends React.Component {


  render(){

  return(
    <div class="container">

      <Number/>
      <Counter  />
      {store.getState().message}
      {/*this will display our message: 'added OR minus 1 or 2 ,whatever' */}
    </div>
    );
  } 
}

