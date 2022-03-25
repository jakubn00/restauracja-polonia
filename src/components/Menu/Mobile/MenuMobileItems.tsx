import React from "react";
import menuItems from "../../../data/menuItems.json";
import { MenuItemsContainer } from "./MenuPageElements";
import MenuSingleItem from "./MenuSingleItem";

const MenuMobileItems = () => {
  return (
    <MenuItemsContainer>
      {menuItems.map((item) => (
        <MenuSingleItem category={item.category} items={item.items} />
      ))}
    </MenuItemsContainer>
  );
};

export default MenuMobileItems;
