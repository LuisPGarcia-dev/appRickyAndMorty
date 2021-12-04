import React, { Fragment } from "react";
import Header from "./components/header";
import Characters  from "./components/Characters";

import "./main.sass"
import "./components/Header.css"

function App() {
    return (
      <Fragment>
          <Header
              title="Rick and Morty API"
          />
          <Characters />
      </Fragment>
    );
  }
  

export default App;