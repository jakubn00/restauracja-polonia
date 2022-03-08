import React from "react";
import { MenuItemsContainer } from "./MenuPageElements";
import menuItems from "../../../data/menuItems.json";
import MenuSingleItem from "./MenuSingleItem";

const MenuItems = () => {
  return (
    <MenuItemsContainer>
      {menuItems.map((item) => (
        <MenuSingleItem category={item.category} items={item.items} />
      ))}
    </MenuItemsContainer>
  );
};

export default MenuItems;
