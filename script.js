let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (human, computer, target) => {
  const humanDifference = Math.abs(human - target);
  const computerDifference = Math.abs(computer - target);
  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const advanceRound = () => {
  return (currentRoundNumber += 1);
};
