import React from "react";
import styled from "styled-components";
import {
  DARKER_GRAY_COLOR,
  GRAY_COLOR,
  POLONIA_DARKER_YELLOW_COLOR,
  POLONIA_YELLOW_COLOR,
} from "../../../colors";

const Button = styled.button<any>`
  width: 275px;
  height: 48px;
  border-radius: 8px;
  border: none;
  -webkit-box-shadow: 0px 14px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 14px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 0px 10px 14px 0px rgba(15, 15, 15, 0.5);
  cursor: pointer;
  font-size: 18px;
  line-height: 18px;
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
}

const LargeButton: React.FC<IProps> = ({ primary = false, title }) => {
  return (
    <React.Fragment>
      <Button primary={primary ? 1 : 0}>{title}</Button>
    </React.Fragment>
  );
};

export default LargeButton;
