import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import {listCards, listDecks, readDeck} from '../utils/api/index'
import Card from './Card'
import BreadCrumbs from './BreadCrumbs'

export default function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({})

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal; 
    const getData = async () => {
        const deck = await readDeck(deckId, signal)
        setDeck(deck)
    }
    getData()
    return () => {
      controller.abort()
    }
  },[])

  return (
      Object.keys(deck).length ?
    <div>
      <BreadCrumbs deck={deck} />
      {/*<nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">{deck.name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
  </nav>*/}
      {
          deck.cards.length < 3 ?
          <div>
            <h1>React Router: Study</h1>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards to study. There are {deck.cards.length} in this deck</p>
            <button className="btn btn-primary">+ Add Cards</button>
          </div>
          :
          <div>
            <h1>Study: {deck.name}</h1>
            <Card deck={deck}/>
          </div>
      }
    </div>
    : null
  );
}
