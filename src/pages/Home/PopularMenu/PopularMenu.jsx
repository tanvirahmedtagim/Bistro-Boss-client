import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTittle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-16">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Check it out"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <button className="btn btn-outline border-0 border-b-4 mt-4">View Menu</button>
    </section>
  );
};

export default PopularMenu;
