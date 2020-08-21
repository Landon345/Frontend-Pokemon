import styled from "@emotion/styled";
import { typography, space, color } from "styled-system";

export const ButtonNav = styled.button`
  text-decoration: none;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #4e988f;
  border: none;
  margin-top: 30px;
  outline: none;
  font-size: 20px;
  color: white;
  &:hover {
    transition: background-color 0.1s ease-in;
    background-color: teal;
    cursor: pointer;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;
