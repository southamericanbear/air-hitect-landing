import React, { useState, useRef } from "react";
import logo from "../img/logo.svg";
import { Burger, Menu } from "../Components/burger-menu";
import { useOnClickOutside } from "../hooks/hooks";
import circles from "../img/circles.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="navbar">
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <img src={logo} alt="air hitect logo" />
      <div className="contact">
        <img src={circles} alt="" />
        <span style={{ fontFamily: "Lato, sans-serif", marginLeft: "5px" }}>
          contact
        </span>
      </div>
    </div>
  );
}
