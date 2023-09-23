/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";

const Cart = ({ selectActor,remaining,totalCost }) => {
  console.log(selectActor);
  return (
    <div className="course-card">
     
     
      {selectActor.map((actor) => (
       <ol key={actor.id}>
         <li>{actor.Name}</li>
       </ol>
      ))}
       <h5>Remaining:{remaining}</h5>
      <h5>TotalCost:{totalCost}</h5>
       <h3>Total Price:{selectActor.length}</h3>
    </div>
  );
};

export default Cart;