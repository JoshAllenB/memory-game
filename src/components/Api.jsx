import useMemoryGame from "./UseMemoryGame";
import ImageCard from "./ImageCard";
import "../styles/ImageCard.css";

const MemoryGame = () => {
  const { displayedCharacters, handleCardClick, isGameOver, score, resetGame } =
    useMemoryGame();

  return (
    <div className="apiImg">
      <h2>Memory Game</h2>
      {!isGameOver && <h3>Score: {score}</h3>}
      {isGameOver && <h2>Womp womp game over! Your score: {score}</h2>}
      <button onClick={resetGame}>Start New Game</button>
      <div className="imageContainer">
        {displayedCharacters.map((character) => (
          <div key={character.id} onClick={() => handleCardClick(character)}>
            <ImageCard imageUrl={character.images[0]} name={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
