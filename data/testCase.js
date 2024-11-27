const testCases3x3 = [
  {
    name: "Test Player 1 wins with a horizontal line",
    moves: [0, 3, 1, 6, 2],
    verify: "verifyPlayer1Win",
  },
  {
    name: "Test Player 1 wins with a vertical line",
    moves: [0, 1, 3, 2, 6],
    verify: "verifyPlayer1Win",
  },
  {
    name: "Test Player 1 wins with a diagonal line",
    moves: [0, 1, 4, 2, 8],
    verify: "verifyPlayer1Win",
  },
  {
    name: "Player 2 wins when player 1 choose X side",
    moves: [0, 3, 1, 4, 6, 5],
    verify: "verifyPlayer2Win",
  },
  {
    name: "Draw game when choose side is X",
    moves: [0, 3, 4, 8, 6, 2, 5, 1, 7],
    verify: "verifyDraw",
  },
  {
    name: "Back To Home Screen",
    moves: [0, 1, 3, 2, 6],
    verify: "backToHomePage",
  },
  {
    name: "Test click Resume button after making some moves",
    moves: [0, 1],
    verify: "clickResume",
  },
];

const testCases5x5 = [
  {
    name: "Test Player 1 wins with a vertical line",
    moves: [0, 1, 5, 2, 10, 3, 15],
    verify: "verifyPlayer1Win",
  },
  {
    name: "Test Player 1 wins with a horizontal line",
    moves: [0, 5, 1, 10, 2, 15, 3],
    verify: "verifyPlayer1Win",
  },
  {
    name: "Test Player 1 wins with a diagonal line",
    moves: [0, 1, 6, 2, 12, 3, 18],
    verify: "verifyPlayer1Win",
  },
  {
    name: "Draw Game When Choose Side X",
    moves: [
      0, 1, 6, 7, 10, 12, 18, 19, 21, 23, 2, 5, 13, 15, 4, 14, 9, 17, 22, 24, 11, 16, 20, 8, 3
    ],
    verify: "verifyDraw",
  },
];

export { testCases3x3, testCases5x5 };