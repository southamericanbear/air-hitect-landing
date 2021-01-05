import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen }) => {
  return (
    <div className="burger-menu">
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <span
        style={{ fontFamily: "Lato, sans-serif", color: "var(--darkPurple)" }}
      >
        menu
      </span>
    </div>
  );
};

Burger.prototype = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
