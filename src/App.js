import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  fiction: [
    {
      name: "Kite Runner by Khalid Hussan",
      rating: "4/5"
    },
    {
      name: "The Alchemist",
      rating: "4.5/5"
    },
    {
      name: "Pride and Prejudice",
      rating: "4/5"
    }
  ],
  science_fic: [
    {
      name: "The Time Machine",
      rating: "3.5/5"
    },
    {
      name: "martian",
      rating: "3/5"
    },
    {
      name: "Dune",
      rating: "4/5"
    }
  ],
  business: [
    {
      name: "Rich Dad and Poor Dad",
      rating: "4.5/5"
    },
    {
      name: "Atomic Habit",
      rating: "4/5"
    },
    {
      name: "Think and Grow Rich",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#BC8F8F",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                background: "#4682B4",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
