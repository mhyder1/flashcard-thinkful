import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'

export default function Card({ deck = []}) {
    let {cards = []} = deck 
    const [index, setIndex] = useState(0)
    const [next, setNext] = useState(0)
    const [front, setFront] = useState(true)
    const history = useHistory()

    const flip = () => {
      setFront(!front)
    }

    const reset = () => {
      setFront(true)
      setIndex(0)
      setNext(0)
    }

    const nextCard = () => {
      if(cards.length === index + 1) {
        let message = 'Restart cards?\n'+"Click 'cancel' to return to the home page."
        window.confirm(message) ? reset() : history.push('/')
      } else {
        setNext(next + 1)
        setIndex(index + 1)
        flip()
      }
      
    }

  return (
      cards.length ?
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card {next + 1} of {cards.length}</h5>
        {
          front ?
           <p className="card-text">{cards[index].front}</p> :
           <p className="card-text">{cards[index].back}</p>
        }
        <button 
          type="button" 
          className="btn btn-secondary" 
          style={{ marginRight: "10px" }} 
          onClick={flip}
        >Flip</button>
        {
          !front && <button type="button" className="btn btn-primary" onClick={nextCard}>Next</button>
        }
        
      </div>
    </div>
    : null
  );
}
