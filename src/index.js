import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
class KeyDemo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name : [{
        friend : 'Ram',
        id : 1
      },
      {
        friend : 'Sriram',
        id : 2
      },
      {
        friend : 'Bannu',
        id : 3
      }]
    }

  }
  render(){
    return(
      <div className="Rams">
      <div>
      {this.state.name.map((dynamicContent , i) => <Content key ={i} componentName = {dynamicContent}/>)}
      </div>
      </div>
    )
  }
}
class Content extends React.Component{
  render(){
    return(
      <div>
      <div>{this.props.componentName.friend}</div>
      <div>{this.props.componentName.id}</div>
      </div>
    )
  }
}


//maps



class SuperMarket extends React.Component{
  constructor(props){
    super(props);
    this.state={
      foodItems : [{
        name : 'Banans',
        id :1
      },
      {
        name : 'Apple',
        id : 2
      },
      {
        name : 'Oranges',
        id : 3
      }]
    }
  }
  render(){
    return(
      <div>
      <div>
        {this.state.foodItems.map((products , s) => <MyProducts key={s} items={products}/>)}
      </div>
      </div>
    )

  }
}
class MyProducts extends React.Component{
  render(){
    return(
      <div>
      <h1>{this.props.items.name}</h1>
      <h2>{this.props.items.id}</h2>
      </div>
    )
  }
}


//flux and redux
let username = { name : "Sriramnaidu" , age :23};
const reducer = function(state={},action){
  switch(action.type){
    case "CHANGE_NAME" : state.name = action.payload;
                        break;
    case "CHANGE_AGE" : state.age = action.payload;
                        break;
            default   : return state;
  }
  return state;
}
const userStore = createStore(reducer , username);
userStore.subscribe(()=>{
  console.log("Store Changed : ", userStore.getState());
});//payload means u can pass any argumenT
userStore.dispatch({type:"CHANGE_NAME",payload:'Sri'})
userStore.dispatch({type:"CHANGE_AGE",payload:24})
userStore.dispatch({type:"CHANGE_NAME",payload:'Bannu'})
class Demo extends React.Component{
  render()
  {
    return(
      <h1>Redux Demo</h1>
    )
  }
}






//Another Example for Redux
let products ={productName : "Appple", cost : 5000};
const productreducer = function(state={},action){
  switch(action.type){
    case "CHANGE_PRODUCTNAME" : state.productName = action.payload;
                                  break;
    case "CHANGE_PRODUCTCOST"  : state.cost = action.payload;
                                   break;
                  default : return state;
  }
  return state;
}
  const myStore = createStore(productreducer,products);
  myStore.subscribe(()=>{
    console.log("The items are : " + myStore.getState());
  });
  myStore.dispatch({type:"CHANGE_PRODUCTNAME",payload:"PineApple"});
  myStore.dispatch({type:"CHANGE_PRODUCTCOST",payload:10000});
class MyDemo extends React.Component{
  render(){
    return(
      <div>
      <h1>Hello React Js</h1>
      </div>
    )

  }
}
ReactDOM.render(<MyDemo />,document.getElementById("r3"));
ReactDOM.render(<Demo />,document.getElementById("r2"));
ReactDOM.render(<SuperMarket />,document.getElementById("r1"));
ReactDOM.render(<KeyDemo />, document.getElementById('root'));
