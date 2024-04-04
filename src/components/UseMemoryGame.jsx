import { useState, useEffect } from "react";

const useMemoryGame = (displayedCharacters) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [cardStatus, setCardStatus] = useState({});

  useEffect(() => {
    if (selectedCard) {
      const [firstCharacter, secondCharacter] = displayedCharacters;
      const areCardsMatched =
        selectedCard.images[0] === firstCharacter.images[0] ||
        selectedCard.images[0] === secondCharacter.images[0];

      if (areCardsMatched) {
        setScore((prevScore) => prevScore + 1);
        setCardStatus((prevCardStatus) => ({
          ...prevCardStatus,
          [selectedCard.id]: "matched",
          [areCardsMatched ? firstCharacter.id : secondCharacter.id]: "matched",
        }));
        setSelectedCard(null);
      } else {
        setTimeout(() => {
          setSelectedCard(null);
        }, 1000);
      }

      if (displayedCharacters.length === 2 && areCardsMatched) {
        setIsGameOver(true);
      }
    }
  }, [selectedCard, displayedCharacters]);

  const handleCardClick = (character) => {
    if (!selectedCard && !cardStatus[character.id]) {
      setSelectedCard(character);
    }
  };

  const resetGame = () => {
    setSelectedCard(null);
    setIsGameOver(false);
    setScore(0);
    setCardStatus({});
  };

  return { handleCardClick, isGameOver, score, resetGame, cardStatus };
};

export default useMemoryGame;
