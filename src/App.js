import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import {listCards, listDecks} from './utils/api/index'
import Layout from "./Layout";
//https://www.qualified.io/assess/5f9c45c8262071000c341579/challenges/5f9c45c570e051000a3c00ab
/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  const [decks, setDecks] = useState([])


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;   
    const getData = async () => {
      let decks = await listDecks(signal)
      setDecks(decks)
    }
    getData()

    return () => {
      controller.abort()
    }
    
  },[])

  return (
    <div className="app-routes">
      <Switch>
        <Route path="/">
          {/* <Layout decks={decks} setDecks={setDecks}/> */}
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
