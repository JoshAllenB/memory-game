import { useState } from "react";
import axios from "axios";

const useMemoryGame = () => {
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const fetchNewCharacters = async () => {
    try {
      const response = await axios.get("https://narutodb.xyz/api/akatsuki");
      if (response.data.akatsuki) {
        const shuffledCharacters = response.data.akatsuki.sort(
          () => Math.random() - 0.5
        );
        const newCharacters = shuffledCharacters.slice(0, 2);
        setDisplayedCharacters(newCharacters);
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const handleCardClick = (character) => {
    if (!isGameOver) {
      const isCharacterAlreadyClicked = clickedCharacters.some(
        (char) => char.id === character.id
      );

      if (isCharacterAlreadyClicked) {
        setIsGameOver(true);
      } else {
        setClickedCharacters((prevClickedCharacters) => {
          const updatedCharacters = [...prevClickedCharacters, character];
          return updatedCharacters;
        });
        setScore((prevScore) => {
          const newScore = prevScore + 1;
          return newScore;
        });
        fetchNewCharacters();
      }
    } else {
      console.log("Game is already over");
    }
  };

  const resetGame = () => {
    setClickedCharacters([]);
    setScore(0);
    setIsGameOver(false);
    fetchNewCharacters();
  };

  return {
    displayedCharacters,
    handleCardClick,
    isGameOver,
    score,
    resetGame,
  };
};

export default useMemoryGame;
