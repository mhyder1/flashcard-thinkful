import React, { useState, useEffect } from "react";
import {listCards, listDecks, readDeck} from '../utils/api/index'
import Decks from './Decks'


export default function Home() {
 const [decks, setDecks] = useState([])

useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal; 
  const getData = async () => {
      const decks = await listDecks(signal)
      setDecks(decks)
  }
  getData()
  return () => {
    controller.abort()
  }
},[])
 
  return (
      <div>
        <button className="btn btn-secondary" style={{marginBottom: "10px"}}>+ Create Deck</button>
        <Decks decks={decks} setDecks={setDecks}/>
      </div>
      
  );
}
