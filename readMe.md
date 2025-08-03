🃏 BlackJack Game
A simple and interactive web-based BlackJack game built using HTML, CSS, and JavaScript. This project is perfect for beginners learning DOM manipulation and basic game logic.

📸 Demo

Note: Add a screenshot of your game here for better visual presentation.

🎮 Features
🎴 Draws two random cards and starts the game.

💬 Displays sum and card values dynamically.

😎 Detects a BlackJack (sum = 21) and ends the game.

😢 Detects bust (sum > 21) and ends the game.

🙂 Allows drawing more cards if within game limits.

👤 Displays player name and current bet.

🚀 Getting Started
To run the project locally:

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/blackjack-game.git
cd blackjack-game
2. Open index.html in your browser
No build tools or servers are required. Just open the file directly in any modern browser.

📁 Project Structure
bash
Copy
Edit
blackjack-game/
├── index.html       # Main HTML file
├── style.css        # Basic styling (optional or minimal)
├── index.js         # Game logic and DOM interactions
└── README.md        # Project documentation
🧠 How It Works
randomCard() generates a number between 1–13, maps them to card values used in BlackJack.

On "Start Game", two cards are drawn and summed.

On "New Cards", another card is drawn (if still in game).

Game checks:

sum < 21: continue game

sum === 21: player wins

sum > 21: player loses

🙋‍♂️ About the Author
Asad
Aspiring developer learning web technologies and creating small games and apps to sharpen skills.

📌 Future Improvements
Add card images instead of numbers.

Introduce betting and chip system.

Add dealer logic and game rules.

Style the game with animations and transitions.

📄 License
This project is open-source and free to use for educational or personal projects.
