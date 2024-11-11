import fs from "fs";
import PlayGameFlow from "../../test-flow/PlayGameFlow";
import ResultPage from "../../page-objects/ResultPage";

describe("3x3", () => {
  beforeEach(async () => {
    await PlayGameFlow.resetGame();
  });

  
  it("should click Refight button after a game ends", async () => {
    const testCaseName = "Test click Refight button after a game ends";
    const timestamp = new Date().toISOString();
    try {
      await PlayGameFlow.navigateToPlayPage();
      const moves = [0, 1, 4, 2, 8];
      for (let i = 0; i < moves.length; i++) {
        await PlayGameFlow.playMove(moves[i]);
      }
      await PlayGameFlow.clickRefight();
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
    } catch (error) {
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
      throw error;
    }
  })  
});
