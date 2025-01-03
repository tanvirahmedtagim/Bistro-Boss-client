import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover image={menuImage} title='our Menu'></Cover>
    </div>
  );
};

export default Menu;
