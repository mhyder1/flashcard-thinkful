import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api/index";
import BreadCrumbs from "./BreadCrumbs";
import { useParams } from 'react-router-dom'

export default function Deck() {
  const { deckId } = useParams()
  const [deck, setDeck] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal; 
    const getData = async () => {
      try {
        const deck = await readDeck(deckId, signal);
        setDeck(deck);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [deckId]);
  return (
      <div>
          <BreadCrumbs deck={deck}/>
      </div>
  )
}
