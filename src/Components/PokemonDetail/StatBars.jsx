import React from "react";
//styled component imports
import { Box } from "@chakra-ui/core";
import { SingleStatContainer, StatBar, StatBarWhole } from "./Styles";

/**
 * Funtional Component that renders the Stat Bars and their labels in a stylish fashion.
 * @param - the props to be passed in include: stats, maxStat, and type.
 */
export default function StatBars({ stats, maxStat, types }) {
  return (
    <Box>
      {/* SingleStatContainer, StatBarWhole, and StatBar, are all Styled components to reuse. */}
      <SingleStatContainer>
        <Box>HP</Box>
        <StatBarWhole typeColor={types[0]}>
          <StatBar maxStat={maxStat} stat={stats.hp} typeColor={types[0]}>
            <p>{stats.hp}</p>
          </StatBar>
        </StatBarWhole>
      </SingleStatContainer>
      <SingleStatContainer>
        <Box>Attack</Box>
        <StatBarWhole typeColor={types[0]}>
          <StatBar maxStat={maxStat} stat={stats.attack} typeColor={types[0]}>
            <p>{stats.attack}</p>
          </StatBar>
        </StatBarWhole>
      </SingleStatContainer>
      <SingleStatContainer>
        <Box> Defense</Box>
        <StatBarWhole typeColor={types[0]}>
          <StatBar maxStat={maxStat} stat={stats.defense} typeColor={types[0]}>
            <p>{stats.defense}</p>
          </StatBar>
        </StatBarWhole>
      </SingleStatContainer>
      <SingleStatContainer>
        <Box>Speed</Box>
        <StatBarWhole typeColor={types[0]}>
          <StatBar maxStat={maxStat} stat={stats.speed} typeColor={types[0]}>
            <p>{stats.speed}</p>
          </StatBar>
        </StatBarWhole>
      </SingleStatContainer>
      <SingleStatContainer>
        <Box>Sp Atk</Box>
        <StatBarWhole typeColor={types[0]}>
          <StatBar
            maxStat={maxStat}
            stat={stats["special-attack"]}
            typeColor={types[0]}
          >
            <p>{stats["special-attack"]}</p>
          </StatBar>
        </StatBarWhole>
      </SingleStatContainer>
      <SingleStatContainer>
        <Box>Sp Def</Box>
        <StatBarWhole typeColor={types[0]}>
          <StatBar
            maxStat={maxStat}
            stat={stats["special-defense"]}
            typeColor={types[0]}
          >
            <p>{stats["special-defense"]}</p>
          </StatBar>
        </StatBarWhole>
      </SingleStatContainer>
    </Box>
  );
}
