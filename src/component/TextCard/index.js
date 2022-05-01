import React from "react";
import styled from "styled-components";
import Text from "../Text";
import Button from "../Button";

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

const TextCard = (props) => {
  return (
    <StyledBox>
      <Text>{props.text}</Text>
      <Button>{props.button}</Button>
    </StyledBox>
  );
};

export default TextCard;
