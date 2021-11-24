// react library is being used to give us access to write react code, but also things like "Component" to give us extra functionality in out class base components
import React, {Component} from 'react';
// this library react-dom is being used to "connect" out react app to the entry index.html
import ReactDOM from 'react-dom';
//we want to use this component from ./Topping file so we import it here. Used in render's return
import Topping from './Topping'

// toppingsFromDb represents if we went to out DB to get toppings - async activity that came back as....toppingsFromDb
let toppingsFromDb = ["Cheese", "Peperoni", "Funghi", "Pineapple", "peppers"]

class WholeApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedTopping: "Cheese"
    }
  }
  render(){
    // this.props is how we would get props into any classbased component.
    return (
      <div>
        {/* 
        This is using a single components to hard code new values within out prop objects, specifically "type"

        <Topping type="Cheese" otherStuff="thisString" />
        <Topping type="Peperoni" />
        <Topping type="Funghi" /> 
        
        */}
        
        {/* If we got out data back form the Database we can loop through to create a list of components with specific data for each*/}
        {
          toppingsFromDb.map((topping, idx) => {
            return <Topping key={topping + idx} type={topping} />
          })
        }
      </div>
    )
  }
}



//WholeApp is being referenced here becuase it will be connected to the html node with id "app" in inde.html
// We have access to this becuase we are in the same file.
ReactDOM.render(<WholeApp />, document.getElementById('app'));
