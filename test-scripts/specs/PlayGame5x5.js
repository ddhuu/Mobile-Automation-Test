import fs from "fs";
import PlayGameFlow from "../../test-flow/PlayGameFlow";

describe("5x5", () => {
  beforeEach(async () => {
    await PlayGameFlow.resetGame();
  });
  it(" Player 1 wins with a vertical line", async () => {
    const testCaseName = "Test Player 1 wins with a vertical line";
    const timestamp = new Date().toISOString();
    try {
      await PlayGameFlow.navigateToHardModePlayPage();
      const moves = [0, 1, 5, 2, 10, 3, 15];
      for (let i = 0; i < moves.length; i++) {
        await PlayGameFlow.playHardModeMove(moves[i]);
      }
      await PlayGameFlow.verifyPlayer1Win();
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
    } catch (error) {
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
      throw error;
    }
  });

  it(" Player 1 wins with a horizontal line", async () => {
    const testCaseName = "Test Player 1 wins with a horizontal line";
    const timestamp = new Date().toISOString();
    try {
      await PlayGameFlow.navigateToHardModePlayPage();
      const moves = [0, 5, 1, 10, 2, 15, 3];
      for (let i = 0; i < moves.length; i++) {
        await PlayGameFlow.playHardModeMove(moves[i]);
      }
      await PlayGameFlow.verifyPlayer1Win();
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
    } catch (error) {
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
      throw error;
    }
  });

  it(" Player 1 wins with a diagonal line", async () => {
    const testCaseName = "Test Player 1 wins with a diagonal line";
    const timestamp = new Date().toISOString();
    try {
      await PlayGameFlow.navigateToHardModePlayPage();
      const moves = [0, 1, 6, 2, 12, 3, 18];
      for (let i = 0; i < moves.length; i++) {
        await PlayGameFlow.playHardModeMove(moves[i]);
      }
      await PlayGameFlow.verifyPlayer1Win();
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
    } catch (error) {
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
      throw error;
    }
  });

  it("Draw Game when choosing side X", async () => {
    const testCaseName = "Draw Game When Choose Side X";
    const timestamp = new Date().toISOString();
    try {
      await PlayGameFlow.navigateToHardModePlayPage();
      const moves = [
        0, 1, 6, 7, 10, 12, 18, 19, 21, 23, 2, 5, 13, 15, 4, 14, 9, 17, 22, 24, 11, 16, 20, 8, 3
      ];
      for (let i = 0; i < moves.length; i++) {
        await PlayGameFlow.playHardModeMove(moves[i]);
      }
      await PlayGameFlow.verifyDraw();
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
    } catch (error) {
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
      throw error;
    }
  });
});
