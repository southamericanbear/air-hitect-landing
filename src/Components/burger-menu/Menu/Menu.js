import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">HOME </a>
      <a href="/">ABOUT US</a>
      <a href="/">PROJECTS</a>
      <a href="/">OUR TEAM</a>
      <a href="/">CONTACT</a>
    </StyledMenu>
  );
};

Menu.prototype = {
  open: bool.isRequired,
};

export default Menu;
