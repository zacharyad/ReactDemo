import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Topping from './Topping'

// we went to out DB to get toppings - async activity that came back as

let toppingsFromDb = ["Cheese", "Peperoni", "Funghi", "Pineapple", "peppers"]


class WholeApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedTopping: "Cheese"
    }

  }
  render(){
    // this.props
    return (
      <div>
        {/* <Topping type="Cheese" otherStuff="thisString" />
        <Topping type="Peperoni" />
        <Topping type="Funghi" /> */}
        

        {/* If we got out data back form the Database */}

        {
        
        toppingsFromDb.map((topping, idx) => {
          return <Topping key={topping + idx} type={topping} />
        })

        }
      </div>
      
    )
  }
}




ReactDOM.render(<WholeApp />, document.getElementById('app'));
