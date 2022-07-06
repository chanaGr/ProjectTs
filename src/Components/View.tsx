import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import React, { ChangeEvent } from "react";
import { Product, productsList } from "../data";

type MyState = {
    subProductsList: Array<Product>;
  };

class View extends React.Component <{},MyState>{

    state: MyState = {
        subProductsList: productsList.getProductsList
    };
 

     searchFilter=(event:ChangeEvent)=>{
      let str=(event.target as HTMLInputElement).value.toUpperCase();
      let temp= productsList.getProductsList.filter(x=>x.getProductName.toUpperCase().indexOf(str)>-1)
      this.setState({subProductsList:temp});
    }
      
  render() {
    return (
     <>
      <input type="text" className="serch" placeholder="Type To Search..." onChange={this.searchFilter}/>
      <div className="bigdiv">
    {        
      this.state.subProductsList  != undefined &&
      this.state.subProductsList.length > 0 &&
      this.state.subProductsList.map((item) => (       
        <>    
        <div className="prdct"> 
            <b>{item.getProductName}</b>
            <span> code: {item.getProductCode}</span>
            <span>Category: {item.getProductCategory}</span>
            <span>Price: {item.getProductPrice}</span>
            <span> Units: {item.getProductUnits} $</span>
            <img src={item.getPicture}></img>
          </div>   
        </>   
      ))
    }
      </div>
      
      
      {/* { <MDBTable>
          <MDBTableHead>
            <tr>
              <th>productName</th>
              <th>productCode</th>
              <th>productCategory</th>
              <th>productPrice</th>
              <th>productUnits</th>
              <th>picture</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            { this.state.subProductsList  != undefined &&
              this.state.subProductsList.length > 0 &&
              this.state.subProductsList.map((item) => (
                <>
                  <tr>
                    <td>{item.getProductCode}</td>
                    <td>{item.getProductName}</td>
                    <td>{item.getProductCategory}</td>
                    <td>{item.getProductPrice}</td>
                    <td>{item.getProductUnits}</td>
                    <td><img key="{item.getProductCode}" src={item.getPicture}></img></td>
                  </tr>
                </>
              ))
            }
          </MDBTableBody>
        </MDBTable> } */}
    </>
    );
  }
}
export default View;
