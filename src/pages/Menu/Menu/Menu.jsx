import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTittle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main cover  */}
      <Cover image={menuImage} title="our Menu"></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="todays offer"
      ></SectionTitle>

      {/* OFFERED ITEMS */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory
        items={desserts}
        title="Dessert"
        coverImg={dessertImg}
      ></MenuCategory>
      {/* pizzas menu items */}
      <MenuCategory
        items={pizzas}
        title="Pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* salads menu items */}
      <MenuCategory
        items={salads}
        title="Salads"
        coverImg={saladImg}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soups}
        title="Soups"
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
