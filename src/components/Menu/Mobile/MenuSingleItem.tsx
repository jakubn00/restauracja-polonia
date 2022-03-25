import React from "react";
import {
  MenuCategory,
  MenuItemContainer,
  MenuItemDescription,
  MenuItemLine,
  MenuItemName,
  MenuItemPrice,
  MenuItemWrapper,
} from "./MenuPageElements";

interface IProps {
  category: string;
  items: any;
}

const MenuSingleItem: React.FC<IProps> = ({ category, items }) => {
  return (
    <MenuItemWrapper>
      <MenuCategory>{category}</MenuCategory>
      {items.map((item: any, index: number) => (
        <MenuItemContainer>
          <MenuItemName>
            {index + 1}. {item.name}
          </MenuItemName>
          <MenuItemPrice>{item.price}</MenuItemPrice>
          <MenuItemLine />
          <MenuItemDescription>{item.description}</MenuItemDescription>
        </MenuItemContainer>
      ))}
    </MenuItemWrapper>
  );
};

export default MenuSingleItem;
