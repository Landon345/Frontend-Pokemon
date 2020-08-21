//state handler imports
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

//styled component imports
import { Box, Icon, Grid, Skeleton, Spinner } from "@chakra-ui/core";
import { Background, IconContainer, typeColors } from "./Styles";
import { css } from "emotion";

//component imports
import PokemonDetailCard from "./PokemonDetailCard";

/** Returns the data from the api https://intern-pokedex.myriadapps.com/api/v1/pokemon/${id}*/
const fetchData = async (id) => {
  const response = await fetch(
    `https://intern-pokedex.myriadapps.com/api/v1/pokemon/${id}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

/**
 * The component to be rendered
 * Uses useState from the react-query library to fetch and cache data.
 */
export default function PokemonDetail({ history, match }) {
  //set my id state which is either 1 or the id specified in the url
  const [id, setId] = useState(
    !match.params.id ? 1 : parseInt(match.params.id)
  );

  //fetch the data using id as a paramerter to find what data to return.
  const { status, data, error, refetch } = useQuery(id, fetchData, {});

  /** This function handles moving forward and backward one pokemon. The parameter should be either 1 or -1 */
  const handleMove = (number) => {
    setId(id + number);
    history.push(`/detail/${data.data.id + number}`);
    refetch();
  };

  /**Returns the color specified by the first type of the pokemon listed. If fire, return red */
  const getColor = () => {
    return typeColors[data.data.types[0]];
  };

  //return this when loading
  if (status === "loading") {
    return (
      <div className="">
        <div>
          <Box textAlign="center" fontSize="50px" mt="60px">
            Loading... <Spinner />
          </Box>
          <Skeleton height="50px" my="10px" mx="10%" />
          <Skeleton height="50px" my="10px" mx="10%" />
          <Skeleton height="50px" my="10px" mx="10%" />
        </div>
      </div>
    );
  }
  //return when error
  if (status === "error") return <div className="">error {error}</div>;

  //if neither loading or error, return the Pokemon Detail jsx.
  return (
    <>
      <Background typeColor={data.data.types[0]}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {/* love using boxes because it is easy to add styles to */}
          <Box>
            <IconContainer typeColor={data.data.types[0]}>
              {/* use an icon that will go back to the page that this pokemon is on. */}
              <Icon
                className={css`
                  &:hover {
                    opacity: 0.9;
                    transition: opacity 0.25s ease;
                  }
                `}
                name="chevron-left"
                size="100px"
                bg="white"
                borderRadius="50%"
                cursor="pointer"
                onClick={() =>
                  history.push(`/page/${Math.ceil(data.data.id / 15)}`)
                }
              />
            </IconContainer>
          </Box>
          <Box
            d="flex"
            fontSize="70px"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
          >
            {data.data.name}
          </Box>
          <Box></Box>
        </Grid>
        <Box bg="white" mx="10%">
          {/* The PokemonDetailCard component with all of its props */}
          <PokemonDetailCard
            id={data.data.id}
            name={data.data.name}
            image={data.data.image}
            stats={data.data.stats}
            types={data.data.types}
            eggGroups={data.data.egg_groups}
            abilities={data.data.abilities}
            height={data.data.height}
            weight={data.data.weight}
            genus={data.data.genus}
            description={data.data.description}
            move={handleMove}
            color={getColor()}
          />
        </Box>
      </Background>
    </>
  );
}
