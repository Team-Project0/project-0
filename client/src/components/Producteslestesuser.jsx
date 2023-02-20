import React from "react";
import Productdetailsuser from "./Productdetailsuser.jsx";

const Producteslestesuser = ({ items }) => {
  return (
    <div>
      <div className="imgtablette">
        <img
          id="imgtablette"
          src="https://www.milka.com.pl/-/media/Project/Brands/Milka/pl/Hero-Carousel/almond-truffle-and-alpine-milk_780x480.png?h=480&w=780&hash=0FD95280F90636451E3A842FC7FC9700"
        />
      </div>
      <p id="tablets">All products</p>
      <div className="grid-container-product">
        {items.map((item) => (
          <Productdetailsuser item={item} />
        ))}
      </div>
    </div>
  );
};

export default Producteslestesuser;
