import React from "react";
import MenuItem from "../../Home/Shared/MenuItem/MenuItem";
import Cover from "../../Home/Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="py-4">
      {title && <Cover image={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
