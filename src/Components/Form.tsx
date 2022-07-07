import React from "react";
import './navbarc.css';

class Form extends React.Component{
render() {
    return  <>
    <form>
            <p>Add Product</p>
            <input type="text" placeholder="Enter Name" ></input>   
            <input type="text" placeholder="Enter code"></input>   
            <input type="text" placeholder="Enter codeCategory" ></input>   
            <input type="text" placeholder="Enter Price"></input>   
            <input type="text" placeholder="Enter Unit"></input>     
            <input type="submit" value="SUBMIT"/>
    </form>
</>
}
   
}
export default Form;