/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [remaining, setRemaining] = useState(0);
  // const [allPrice,setAllPrice]=useState(0);

  useEffect(() => {
    fetch("./fake.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectCourse.find((item) => item.id == course.id);
/* 
    let price=course.Price;
    allPrice.forEach((one)=>{
      price=price+one.Price
    });
    setAllPrice(price);
    // setSelectCourse([...selectCourse, course]); 
     */
    let count = course.Credit;
    if (isExist) {
      return alert("Already Select The Course");
    } else {
      selectCourse.forEach((item) => {
        count = count + item.Credit;
      });
      const remaining = 20 - count;
      if (count > 20) {
        alert("Course Credit Is Overflow");
      } else {
        setRemaining(remaining);
        setTotalCount(count);
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
                <p>Price: {course.Price}</p>
                <p>{course.Credit}hr</p>
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
            totalCount={totalCount}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
