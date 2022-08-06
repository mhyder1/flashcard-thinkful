import React, {useState, useEffect} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom"
import Home from './Home'
import Study from './Study'
import Deck from './Deck'
import {listCards, listDecks} from '../utils/api/index'

function Layout({decks, setDecks}) {

  // const [decks, setDecks] = useState([])
  // useEffect(() => {
  //   // setDeck(decks.find((deck) => deck.id == deckId) || {})
  //   const getData = async () => {
  //     try {
  //       const decks = await listDecks()
  //       // console.log(decks)
  //       // const deck = decks.find((deck) => deck.id == deckId);
  //       setDecks(decks)
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // },[])

  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck  />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study  />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
