import styled from "styled-components";
export const StyledBurger = styled.button`
  width: 2rem;
  height: 2rem;
  background: white;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    margin: 5px 100px 5px 5px;
    width: 1rem;
    height: 0.15rem;
    background: var(--darkPurple);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: -2.5px;

    @media (max-width: 500px) {
      margin: 5px 0px 5px 7px;
    }

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
