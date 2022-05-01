import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const TextBox = (props) => {
  return <StyledText color={props.color}>{props.children}</StyledText>;
};

export default TextBox;
