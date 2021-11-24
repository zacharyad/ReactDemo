// Functional Component where we import react library and write a named function to be used as a component elsewhere in react app
import React from "react"

const Topping = (props) => {

    // We are taking the object of props (like attributes on an html tag) and they are being placed inside an object ---> props object
    //When we reference props we then can access a key value pair, like props.type.
    return <p>{props.type}</p>

}   

// We need to export this component so we can use it else where in out app. 
// This is a front end module thing (webpack) and not explicitly a react thing. we take advantage of this to modulize our code in react

export default Topping