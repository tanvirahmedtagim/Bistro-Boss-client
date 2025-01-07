import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddToCart = (food) => {
    if (user && user.email) {
    } else {
      Swal.fire({
        title: "You are not login ",
        text: "Please Login for add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
    console.log(food);
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl relative">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 rounded-xl px-4 py-1">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline bg-slate-100 hover:text-orange-400 text-orange-400 border-orange-400 border-0 border-b-4"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
