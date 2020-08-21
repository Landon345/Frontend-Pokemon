import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { theme, ThemeProvider } from "@chakra-ui/core";

import PokemonList from "./Components/PokemonList/index";
import PokemonDetail from "./Components/PokemonDetail/index";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={PokemonList} />
          <Route path="/page/:page" exact component={PokemonList} />
          <Route path="/page/:page/:query" exact component={PokemonList} />
          <Route path="/detail/:id" exact component={PokemonDetail} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
