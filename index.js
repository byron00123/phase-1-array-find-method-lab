// code your solution here
function superbowlWin(games) {
    const winningGame = games.find(game => game.result === "W");
    return winningGame ? winningGame.year : undefined;
  }
  