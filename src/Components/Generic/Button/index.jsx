import React from "react";
import { Container } from "./style";

const Button = ({ children, type, onClick, width }) => {
  return (
    <Container onClick={onClick} type={type} width={width}>
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
