/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";

const Cart = ({ selectCourse, remaining, totalCost }) => {
  console.log(selectCourse);
  return (
    <div className="course-card">
      <h5>Credit Hour Remaining :{remaining}</h5>
      <hr />
      <h3 className="h3-style">Course Name</h3>
      <ol>
        {selectCourse.map((course) => (
          <li key={course.id}>{course.Name}</li>
        ))}
      </ol>
      <hr />
      <h5>Total Credit Hour: 20</h5>
      
      <h3>Total Price:{selectCourse.Price}</h3>
    </div>
  );
};

export default Cart;
