import React from "react";
import styled from "styled-components";
import {
  DARKER_GRAY_COLOR,
  GRAY_COLOR,
  POLONIA_DARKER_YELLOW_COLOR,
  POLONIA_YELLOW_COLOR,
} from "../../../utils/colors";
import { BODY } from "../../../utils/fontSizes";

const Button = styled.button<any>`
  width: ${(props) => `${props.customWidth}px`};
  height: 40px;
  border-radius: 8px;
  border: none;
  margin-top: ${(props) => `${props.marginTop}px`};
  -webkit-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  -moz-box-shadow: 0px 10px 24px 0px rgba(66, 68, 90, 0.8);
  box-shadow: 0px 10px 10px 0px rgba(15, 15, 15, 0.3);
  cursor: pointer;
  font-size: ${BODY};
  line-height: ${BODY};
  font-weight: 700;
  transition: background-color 0.2s;
  background-color: ${(props) =>
    props.primary === 1 ? POLONIA_YELLOW_COLOR : GRAY_COLOR};
  &:hover {
    background-color: ${(props) =>
      props.primary === 1 ? POLONIA_DARKER_YELLOW_COLOR : DARKER_GRAY_COLOR};
  }
`;

interface IProps {
  primary?: boolean | number;
  title: string;
  customWidth?: number;
  marginTop?: number;
}

const MediumButton: React.FC<IProps> = ({
  primary = false,
  title,
  customWidth = 275,
  marginTop = 0,
}) => {
  return (
    <React.Fragment>
      <Button
        primary={primary ? 1 : 0}
        customWidth={customWidth}
        marginTop={marginTop}
      >
        {title}
      </Button>
    </React.Fragment>
  );
};

export default MediumButton;
