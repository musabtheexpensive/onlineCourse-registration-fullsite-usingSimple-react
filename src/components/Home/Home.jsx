/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectActor, setSelectActor] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    fetch("./fake.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectActor = (actor) => {
    const isExist = selectActor.find((item) => item.id == actor.id);

    let cost = actor.salary;

    if (isExist) {
      return alert("already booked");
    } else {
      selectActor.forEach((item) => {
        cost = cost + item.salary;
      });
      const remaining = 20000 - cost;
      if (cost > 20000) {
        alert("enough taka");
      } else {
        setRemaining(remaining);
        setTotalCost(cost);
        setSelectActor([...selectActor, actor]);
      }
    }
  };
  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allActors.map((actor) => (
            <div key={actor.id} className="card">
              <div className="card-img">
                <img className="photo" src={actor.Image} alt="" />
              </div>
              <h4>{actor.Name}</h4>
              <p>
                <small>{actor.Description}</small>
              </p>
              <div className="info">
                <p>Price:{actor.Price}</p>
                <p>{actor.Credit}</p>
              </div>
              <button
                onClick={() => handleSelectActor(actor)}
                className="card-btn"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart
            selectActor={selectActor}
            remaining={remaining}
            totalCost={totalCost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
