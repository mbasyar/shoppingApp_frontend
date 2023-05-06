import React, { useEffect } from 'react';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./foodCatalog.module.css";


const FoodCatalog = () => { 
  
  const [filteredFoods, setFilteredFoods] = useState([])
  const location = useLocation()
  const foodEnpoint = location.pathname.split('/'[2])
  const {token} = useSelector((state)=> state.auth)

  useEffect(()=> {
    const fetchFoodType = async()=> {
      const res = await fetch(`hhtp://localhost:5000/product?category=${foodEnpoint}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      const data = await res.json()
      setFilteredFoods(data)
    }
    fetchFoodType()
  }, [foodEndpoint])

  return (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      {filteredFoods?.length !== 0 && <h2 className="classes title">the best {foodEnpoint} in the region</h2>}
      <div className={classes.foods}>
        {filteredFoods.length !== 0 ? filteredFoods.map((f)=> (
          <Link to={`/food/${f._id}`} key={f._id} className={classes.foods}>
            <div className={classes.imgContainter}>
              <img src={`http://localhost:5000/images/${f?.img}`} alt="irul" className={classes.foodImg} />
            </div>
            <div className={classes.foodDetails}>
              <h4 className="classes foodTitle">{f?.title}</h4>
              <span className="classes price"><span>$</span> {f?.price}</span>
            </div>
          </Link>
        )) : <h1 className={'classes.noQuantity'}>No {foodEndpoint} right now </h1>}
      </div>
    </div>
  </div>

  );
};

export default FoodCatalog;
