import React, { useState, useEffect } from "react";
import { deleteDeck } from "../utils/api/index";
import { Link } from "react-router-dom";

export default function Decks ({ decks, setDecks }) {
  const handleDelete = (id) => {
    if (
      window.confirm("Delete this deck?\n\nYou will not be able to recover it.")
    ) {
      deleteDeck(id);
      setDecks(decks.filter((deck) => deck.id !== id));
    }
  };

  return (
    <div>
      {decks.map((deck) => (
        <div key={deck.id} style={{ marginBottom: "20px" }}>
          <div className="card">
            <div className="card-body">
              <p>{deck.cards.length} cards</p>
              <h2>{deck.name}</h2>
              <p>{deck.description}</p>
              <Link to={`/decks/${deck.id}`}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ marginRight: "10px" }}
                >
                  View
                </button>
              </Link>

              <Link to={`/decks/${deck.id}/study`}>
                <button type="button" className="btn btn-primary">
                  Study
                </button>
              </Link>

              <button
                className="btn btn-danger"
                style={{ float: "right" }}
                onClick={() => handleDelete(deck.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
