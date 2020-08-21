import styled from "@emotion/styled";

//Have these as Global Styles because I use them more than once in my project.

export const typeColors = {
  bug: "#A8B820",
  dark: "#705848",
  dragon: "#7038F8",
  electric: "#F8D030",
  fairy: "#EE99AC",
  fighting: "#C03028",
  fire: "#F08030",
  flying: "#A890F0",
  ghost: "#705898",
  grass: "#78C850",
  ground: "#E0C068",
  ice: "#98D8D8",
  normal: "#BEA293",
  poison: "#A040A0",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  water: "#6890F0",
};

export const typeBackgroundColors = {
  bug: "#eff3d8",
  dark: "#c7bcb8",
  dragon: "#cbb5fc",
  electric: "#fdf4ce",
  fairy: "#fce9ed",
  fighting: "#e8b3b0",
  fire: "#f9d3b9",
  flying: "#ede9fc",
  ghost: "#d7d0e2",
  grass: "#d2edc4",
  ground: "#f6edd5",
  ice: "#edf8f8",
  normal: "#F4F4F1",
  poison: "#eeddee",
  psychic: "#fdcedc",
  rock: "#ebe5c7",
  steel: "#f0f0f5",
  water: "#e8edfc",
};

export const Types = styled.div`
  margin: 4px 4px;
  padding: 3px;
  border-radius: 3px;
  /* The first border sets a default value in-case the type is not found in the list */
  border: solid 1px ${typeColors["normal"]};
  border-color: ${(props) => typeColors[props.typeColor]};
  color: ${(props) => typeColors[props.typeColor]};
  background-color: ${(props) => typeBackgroundColors[props.typeColor]};
  text-transform: uppercase;
  font-size: 0.8rem;
`;
