import { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import "../styles/ImageCard.css";
import useMemoryGame from "../components/UseMemoryGame";

const MemoryGame = () => {
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const { handleCardClick, isGameOver, score, resetGame, cardStatus } =
    useMemoryGame(displayedCharacters);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://narutodb.xyz/api/akatsuki");

        if (response.data.akatsuki) {
          selectRandomCharacters(response.data.akatsuki);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const selectRandomCharacters = (characterList) => {
    const shuffledCharacters = characterList.sort(() => Math.random() - 0.5);
    const selectedCharacters = shuffledCharacters.slice(0, 2);
    setDisplayedCharacters(selectedCharacters);
  };

  return (
    <div className="apiImg">
      <h2>Memory Game</h2>
      {isGameOver && <p>Game Over! Your score: {score}</p>}
      <button onClick={resetGame}>Start New Game</button>
      <div className="imageContainer">
        {displayedCharacters.map((character) => (
          <div
            key={character.id}
            onClick={() => handleCardClick(character)}
            className={cardStatus[character.id]}
          >
            <ImageCard imageUrl={character.images[0]} name={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
