import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item || {};

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl relative">
        <figure>
          <img src={image} alt={name} />
              </figure>
              <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 rounded-xl px-4 py-1">${ price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
