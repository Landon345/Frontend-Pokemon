import React, { useState, useCallback } from "react";
import { useQuery } from "react-query";

import { Input, Grid, Box, Icon, Skeleton, Spinner } from "@chakra-ui/core";
import { ButtonNav, Link } from "./Styles";
import PokemonCard from "../PokemonCard/index";
import debounce from "lodash.debounce";

const LoadingState = () => (
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

const FailedState = () => <div className="">error </div>;

/**Fetch and return the data from https://intern-pokedex.myriadapps.com/api/v1/pokemon/?page=${page}&name=${queryString}*/
const fetchData = async (key, page, queryString) => {
  const response = await fetch(
    `https://intern-pokedex.myriadapps.com/api/v1/pokemon/?page=${page}&name=${queryString}`
  );

  const data = await response.json();
  console.log(data);
  return data;
};

/**The funcitonal component to be rendered, props of history and match provided by react router dom. */
export default function PokemonList({ history, match }) {
  //set the current page from the url using match.params.page
  const [page, setPage] = useState(
    !match.params.page || parseInt(match.params.page) < 0
      ? 1
      : parseInt(match.params.page)
  );
  //set the queryString using the same method
  const [queryString, setQueryString] = useState(
    !match.params.query ? "" : match.params.query
  );
  const [queryString2, setQueryString2] = useState(
    !match.params.query ? "" : match.params.query
  );
  //Use the useQuery supported by react-query to fetch and cache the data.
  const { status, data, error, refetch } = useQuery(
    ["fetchData", page, queryString2],
    fetchData,
    {}
  );

  const debouncedSearch = useCallback(
    debounce((value) => handleChange2(value), 300),
    []
  );

  /**get the value in the input box and puts it into the queryString state, while pushing to the page with that querystring
   * It refetches the data after 200 milliseconds in order to wait for the setQueryString to happen.
   */
  const handleChange = (e) => {
    history.push(`/page/1/${e.target.value}`);
    setPage(1);
    setQueryString(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleChange2 = (value) => {
    setQueryString2(value);
  };

  /**Go back one page, the current page and the url are synced up*/
  const back = () => {
    history.push(`/page/${page - 1}/${queryString}`);
    setPage(data.meta.current_page - 1);
  };
  /**Go forward one page */
  const forward = () => {
    history.push(`/page/${page + 1}/${queryString}`);
    setPage(data.meta.current_page + 1);
  };

  //if neither loading, error, or no pokemon, return the pokemonList
  return (
    <>
      {/* Set the bg color to #55A69C which is the same color as on the design */}
      <Box bg="#55A69C" minHeight="100vh">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
          <Box>
            {/* show the back arrow if the current page is greater than 1 */}
            {page > 1 && (
              <ButtonNav onClick={() => back()}>
                <Icon name="arrow-back" />
              </ButtonNav>
            )}
          </Box>
          <Box>
            <form autoComplete="off">
              {/* Use the styled Input field provided by Chakra and change it a little bit. */}
              <Input
                className="myInput"
                bg="#519F95"
                px="20px"
                py="10px"
                mt="30px"
                placeholder="Pok&eacute;dex"
                border="none"
                color="white"
                fontSize="45px"
                onChange={handleChange}
                value={queryString}
              ></Input>
            </form>
          </Box>
          <Box>
            {/* Show the forward button if the current page is not equal to the last page */}
            {data && page !== data.meta.last_page && (
              <ButtonNav onClick={() => forward()}>
                <Icon name="arrow-forward" />
              </ButtonNav>
            )}
          </Box>
        </Grid>
        {status === "loading" && <LoadingState />}
        {status === "error" && <FailedState />}
        {status === "success" && !error && (
          <Box mx="20px" py="20px">
            {/* Show cards using a grid with auto-fit and minmax for responsiveness*/}
            <Grid
              templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
              gap={6}
            >
              {/* Map through the pokemon data and show each pokemon on a PokemonCard Component */}
              {data.data.length === 0 ? (
                <NoPokemon />
              ) : (
                data.data.map((pokemon) => (
                  // Link here is a custom styled component
                  <Link key={pokemon.id} href={`/detail/${pokemon.id}`}>
                    <PokemonCard pokemon={pokemon} />
                  </Link>
                ))
              )}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
}

/**use the idea from Adrian to show a magikarp when nothing is found when searching */
function NoPokemon() {
  return (
    <div>
      <Box textAlign="center" fontSize="40px" color="white" pb="20px">
        We Only Found a Magikarp
      </Box>
      <Link href={`/detail/${129}`}>
        <PokemonCard
          pokemon={{
            id: 129,
            image:
              "https://intern-pokedex.myriadapps.com/images/pokemon/129.png",
            name: "Magikarp",
            types: ["water"],
          }}
        />
      </Link>
    </div>
  );
}
