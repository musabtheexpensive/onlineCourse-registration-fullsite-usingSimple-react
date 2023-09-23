/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    fetch("./fake.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectCourse.find((item) => item.id == course.id);

    let cost = course.salary;

    if (isExist) {
      return alert("already booked");
    } else {
      selectCourse.forEach((item) => {
        cost = cost + item.salary;
      });
      const remaining = 20000 - cost;
      if (cost > 20000) {
        alert("enough taka");
      } else {
        setRemaining(remaining);
        setTotalCost(cost);
        setSelectCourse([...selectCourse, course]);
      }
    }
  };
  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allCourses.map((course) => (
            <div key={course.id} className="card">
              <div className="card-img">
                <img className="photo" src={course.Image} alt="" />
              </div>
              <h4>{course.Name}</h4>
              <p>
                <small>{course.Description}</small>
              </p>
              <div className="info">
                <p>Price:{course.Price}</p>
                <p>{course.Credit}</p>
              </div>
              <button
                onClick={() => handleSelectCourse(course)}
                className="card-btn"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart
            selectCourse={selectCourse}
            remaining={remaining}
            totalCost={totalCost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
