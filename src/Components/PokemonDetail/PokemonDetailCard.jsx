import React from "react";
//styled component imports
import { Box, Icon, Grid, PseudoBox } from "@chakra-ui/core";
import { Types, IdNumber, ColorBox, ProfileBoxes } from "./Styles";
import { css } from "emotion";

//component imports
import StatBars from "./StatBars";

/**
 * This component gives the middle portion of the PokemonDetail Component.
 *
 * @param The parameters are all of the props to be passed into this component
 * which include: id, name, image, stats, types, eggGroups, abilities, height,
 * weight, genus, description, move, color.
 */
export default function PokemonDetailCard({
  id,
  name,
  image,
  stats,
  types,
  eggGroups,
  abilities,
  height,
  weight,
  genus,
  description,
  move,
  color,
}) {
  /**Compute the maxStat out of the stats of the single pokemon */
  const maxStat = () => {
    let array = Object.values(stats);
    let maxStat = Math.max(...array);
    return maxStat;
  };
  //return this jsx
  return (
    <div>
      <Box
        py="13px"
        px="8%"
        d="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        borderBottom="1px solid lightgray"
        verticalAlign="center"
      >
        <Box d="flex" justifyContent="start" alignItems="center">
          {/* Icon that moves one pokemon to the left by specifing -1 in the move function */}
          <Icon
            className={css`
              &:hover {
                opacity: 0.8;
                transition: opacity 0.25s ease;
              }
            `}
            name="chevron-left"
            size="30px"
            mr="5%"
            bg={color}
            color="white"
            borderRadius="50%"
            cursor="pointer"
            onClick={() => move(-1)}
          />
          <h3>{name} </h3>
          <IdNumber typeColor={types[0]}> #{id}</IdNumber>
        </Box>
        <Box pr="15px" d="flex" justifyContent="flex-end" alignItems="center">
          {/* Map through the types and show them */}
          {types.map((type) => (
            <Types typeColor={type}>{type}</Types>
          ))}
          {/* Icon that moves one pokemon to the right by specifing 1 in the move function */}
          <Icon
            className={css`
              &:hover {
                opacity: 0.8;
                transition: opacity 0.25s ease;
              }
            `}
            name="chevron-right"
            size="30px"
            ml="5%"
            bg={color}
            color="white"
            borderRadius="50%"
            cursor="pointer"
            onClick={() => move(1)}
          />
        </Box>
      </Box>
      {/* A grid box for the image and stats */}
      <Box d="grid" gridTemplateColumns="1fr 2fr" marginTop="0px">
        <Box d="flex" justifyContent="center">
          <img src={image} height="200px" width="200px" />
        </Box>
        <Box mt="30px">
          <StatBars stats={stats} maxStat={maxStat()} types={types} />
        </Box>
      </Box>
      <Box textAlign="left" mx="8%">
        <Box fontSize="20px" fontWeight="bold" mb="10px">
          {genus}
        </Box>
        <Box fontSize="18px">{description}</Box>
      </Box>
      <ColorBox typeColor={types[0]}>
        <h3>Profile</h3>
      </ColorBox>

      {/* A grid box for the Profile information*/}
      <Box d="grid" gridTemplateColumns="1fr 1fr" mx="8%">
        {/* A custom profile box to reuse css */}
        <ProfileBoxes>
          <Box fontWeight="bold">Height:</Box>
          <Box>{height} m</Box>
        </ProfileBoxes>
        <ProfileBoxes>
          <Box fontWeight="bold">Weight:</Box>
          <Box>{weight} kg</Box>
        </ProfileBoxes>
        <ProfileBoxes>
          <Box fontWeight="bold">Egg Groups:</Box>
          <Box>
            {/* map through egg groups */}
            {eggGroups.map((group) => (
              <div>{group}</div>
            ))}
          </Box>
        </ProfileBoxes>
        <ProfileBoxes>
          <Box fontWeight="bold">Abilities:</Box>
          <Box>
            {/* map throught abilities */}
            {abilities.map((able) => (
              <div>{able}</div>
            ))}
          </Box>
        </ProfileBoxes>
      </Box>
    </div>
  );
}
