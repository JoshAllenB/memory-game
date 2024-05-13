# Memory Game

Memory Game is a web application built with React that tests your memory skills. The game displays random characters from the Naruto universe, and your objective is to click on each character without clicking on the same character twice.

## Features

- Fetches random characters from the Narutodb API
- Displays two characters at a time
- Keeps track of the user's score
- Ends the game when the user clicks on a previously clicked character
- Allows the user to start a new game

## Technologies Used

- React
- Axios (for making API requests)
- CSS (for styling)

## Installation

1. Clone the repository: 
https://github.com/JoshAllenB/memory-game

2. Navigate to the project directory:
cd memory-game

3. Install dependencies:
npm install

4. Start the development server:
npm start

The app will open in your default browser at `http://localhost:3000`.

## Usage

1. The game starts by displaying two random characters from the Naruto universe.
2. Click on a character to add it to your "clicked" list.
3. Two new random characters will be displayed.
4. Continue clicking on characters you haven't clicked before.
5. The game ends when you click on a character you've previously clicked.
6. Your score is displayed during gameplay and at the end of the game.
7. Click the "Start New Game" button to play again.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Narutodb API](https://narutodb.xyz/) for providing the character data
