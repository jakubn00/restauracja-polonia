import styled from "styled-components";
import {
  DARK_BACKGROUND_COLOR,
  GRAY_COLOR,
  LIGHT_BACKROUND_COLOR,
  POLONIA_YELLOW_COLOR,
} from "../../../utils/colors";
import { LATO_H4, BODY, FUTURA_LINK } from "../../../utils/fontSizes";

export const MenuMobilePageContainer = styled.div`
  min-height: 100vh;
  background-color: ${LIGHT_BACKROUND_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItemsContainer = styled.div`
  min-height: 90vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
`;

export const MenuItemWrapper = styled.div`
  margin: 24px 0;
`;

export const MenuCategory = styled.h2`
  font-size: ${LATO_H4};
  color: ${DARK_BACKGROUND_COLOR};
  background-color: ${POLONIA_YELLOW_COLOR};
  padding: 6px 12px;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  margin: 32px 0;
  flex-wrap: wrap;
  width: 100%;
`;

export const MenuItemName = styled.h4`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  color: ${DARK_BACKGROUND_COLOR};
  width: 80%;
  font-weight: 700;
`;

export const MenuItemDescription = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${FUTURA_LINK};
  color: ${DARK_BACKGROUND_COLOR};
  margin-top: 2px;
`;

export const MenuItemPrice = styled.h4`
  font-family: "Lato", sans-serif;
  font-size: ${BODY};
  color: ${DARK_BACKGROUND_COLOR};
  align-self: flex-end;
  width: 20%;
  text-align: right;
  font-weight: 500;
`;

export const MenuItemLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${GRAY_COLOR};
  opacity: 0.2;
`;

export const ButtonGroupMobile = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 15px;
  margin-top: 125px;
`;

