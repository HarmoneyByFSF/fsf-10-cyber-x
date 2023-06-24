import React, { useState } from "react";
import "./snakegame.css";

const SnakeGame = () => {
  const [playerPosition, setPlayerPosition] = useState(1);
  const [gameMessage, setGameMessage] = useState("");
  const [financialAdvice, setFinancialAdvice] = useState("");

  const handleRollDice = () => {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    const newPosition = playerPosition + diceNumber;

    if (newPosition <= 100) {
      setPlayerPosition(newPosition);
      handleCheckSnakeOrLadder(newPosition);
    } else {
      setGameMessage("You need " + (100 - playerPosition) + " to win!");
    }
  };

  const handleCheckSnakeOrLadder = (position) => {
    const snakeLadderMap = {
      16: 6,
      47: 26,
      49: 11,
      56: 53,
      62: 19,
      64: 60,
      87: 24,
      93: 73,
      95: 75,
      98: 78,
    };

    if (snakeLadderMap[position]) {
      const newPosition = snakeLadderMap[position];
      setPlayerPosition(newPosition);
      setGameMessage("You climbed a ladder! Move to position " + newPosition);
    } else {
      setGameMessage("");
      setFinancialAdvice(getFinancialAdvice(position));
    }

    // Check if the player has won
    if (position === 100) {
      setGameMessage("Congratulations! You won!");
    }
  };

  const renderBoard = () => {
    const boxes = [];
    let boxNumber = 1;
    let isEvenRow = true;

    for (let row = 1; row <= 10; row++) {
      const cells = [];

      for (let col = 1; col <= 10; col++) {
        const isPlayerPosition = boxNumber === playerPosition;

        cells.push(
          <div key={boxNumber} className="box">
            <div className="box-number">{boxNumber}</div>
            {isPlayerPosition && <div className="pawn"></div>}
            {boxNumber === playerPosition && financialAdvice && (
              <div className="financial-advice">{financialAdvice}</div>
            )}
          </div>
        );

        boxNumber++;
      }

      if (!isEvenRow) {
        cells.reverse();
      }

      boxes.push(
        <div key={row} className="row">
          {cells}
        </div>
      );

      isEvenRow = !isEvenRow;
    }

    return boxes;
  };

  const getFinancialAdvice = (boxNumber) => {
    const adviceMap = {
      5: "Start investing early to maximize your returns.",
      14: "Create an emergency fund to prepare for unexpected expenses.",
      32: "Diversify your investments to reduce risk.",
      42: "Set realistic financial goals and create a plan to achieve them.",
      63: "Pay off high-interest debts to save money in the long run.",
      77: "Track your expenses to identify areas where you can save.",
      89: "Review your insurance coverage to ensure adequate protection.",
    };

    return adviceMap[boxNumber] || "";
  };

  return (
    <div className="snake-ladder-game">
      <h1>Snake and Ladder Game</h1>
      <div className="board">{renderBoard()}</div>
      <div className="game-message">{gameMessage}</div>
      <button className="roll-dice-btn" onClick={handleRollDice}>
        Roll Dice
      </button>
    </div>
  );
};

export default SnakeGame;
