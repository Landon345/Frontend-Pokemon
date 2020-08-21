import styled from "@emotion/styled";

//imports to be used in this file
import { typeColors, typeBackgroundColors } from "../../GlobalStyles/Styles";

//export without change, so I may access from this file, instead of GlobalStyles/Styles
export { Types, typeColors } from "../../GlobalStyles/Styles";

export const Background = styled.div`
  background-color: ${(props) => typeColors[props.typeColor]};
  /* color: ${(props) => typeColors[props.typeColor]}; */
  padding: 0px;
  padding-bottom: 100px;
  margin: 0;
  min-height: 89vh;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const IconContainer = styled.div`
  color: ${(props) => typeColors[props.typeColor]};
  text-align: center;
  padding: 40px;
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const ColorBox = styled.div`
  color: white;
  background-color: ${(props) => typeColors[props.typeColor]};
  margin: 20px 5%;
  text-align: left;
  padding: 5px 0px 5px 10px;
`;
export const ProfileBoxes = styled.div`
  /* d="grid" textAlign="left" gridTemplateColumns="1fr 1fr" mb="20px" */
  display: grid;
  text-align: left;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
`;

export const IdNumber = styled.div`
  color: ${(props) => typeColors[props.typeColor]};
  padding-left: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const SingleStatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  text-align: left;
  margin: 5px 20% 5px 0px;
`;

/**Set the width and background color of the Statbar by using props passed into it: maxStat, typeColor, and stat */
export const StatBar = styled.div`
  background-color: ${(props) => typeColors[props.typeColor]};
  color: white;
  width: ${(props) => props.stat / (props.maxStat / 100) + "%"};
`;
/**Set the container for the statBar with a good background color using the typeColor prop */
export const StatBarWhole = styled.div`
  width: 100%;
  background-color: ${(props) => typeBackgroundColors[props.typeColor]};
`;
