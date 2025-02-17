import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  height: 50px;
  width: 250px;
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
`;

const Button = (props) => {
  console.log(props);
  return (
    <StyledButton backgroundColor={props.backgroundColor} color={props.color}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
