import fs from "fs";
import PlayGameFlow from "../../test-flow/PlayGameFlow";
import ResultPage from "../../page-objects/ResultPage";

fs.writeFileSync("log.txt", "");

describe("Test Player 1 Win with Horizontal and Vertical Lines", () => {
  beforeEach(async () => {
    await PlayGameFlow.resetGame();
  });

  it("should click Resume button after making some moves", async () => {
    const testCaseName = "Test click Resume button after making some moves";
    const timestamp = new Date().toISOString();
    try {
      await PlayGameFlow.navigateToPlayPage();
      const moves = [0, 1];
      for (let i = 0; i < moves.length; i++) {
        await PlayGameFlow.playMove(moves[i]);
      }
      await PlayGameFlow.clickResume();
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
    } catch (error) {
      fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
      throw error;
    }
  });



  // it("should click specific cells in order and log the result, Player 1 wins with a horizontal line", async () => {
  //   const testCaseName = "Test Player 1 wins with a horizontal line";
  //   const timestamp = new Date().toISOString();
  //   try {
  //     await PlayGameFlow.navigateToPlayPage();
  //     const moves = [0, 3, 1, 6, 2];
  //     for (let i = 0; i < moves.length; i++) {
  //       await PlayGameFlow.playMove(moves[i]);
  //       const cell = await PlayGameFlow.playPage.getCell(moves[i]);
  //       const isDisplayed = await cell.isDisplayed();
  //       expect(isDisplayed).toBe(true);
  //     }
  //     await PlayGameFlow.verifyPlayer1Win();
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
  //   } catch (error) {
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
  //     throw error;
  //   }
  // });

  // it("should click specific cells in order and log the result, Player 1 wins with a vertical line", async () => {
  //   const testCaseName = "Test Player 1 wins with a vertical line";
  //   const timestamp = new Date().toISOString();
  //   try {
  //     await PlayGameFlow.navigateToPlayPage();
  //     const moves = [0, 1, 3, 2, 6];
  //     for (let i = 0; i < moves.length; i++) {
  //       await PlayGameFlow.playMove(moves[i]);
  //       const cell = await PlayGameFlow.playPage.getCell(moves[i]);
  //       const isDisplayed = await cell.isDisplayed();
  //       expect(isDisplayed).toBe(true);
  //     }
  //     await PlayGameFlow.verifyPlayer1Win();
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
  //   } catch (error) {
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
  //     throw error;
  //   }
  // });

  // it("should click specific cells in order and log the result, Player 1 wins with a diagonal line", async () => {
  //   const testCaseName = "Test Player 1 wins with a diagonal line";
  //   const timestamp = new Date().toISOString();
  //   try {
  //     await PlayGameFlow.navigateToPlayPage();
  //     const moves = [0, 1, 4, 2, 8];
  //     for (let i = 0; i < moves.length; i++) {
  //       await PlayGameFlow.playMove(moves[i]);
        
  //     }
  //     await PlayGameFlow.verifyPlayer1Win();
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
  //   } catch (error) {
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
  //     throw error;
  //   }
  // });

  // it("should click specific cells in order and log the result, Player 2 wins when Player 1 choose X side", async () => {
  //   const testCaseName = "Player 2 wins when player 1 choose X side";
  //   const timestamp = new Date().toISOString();
  //   try {
  //     await PlayGameFlow.navigateToPlayPage();
  //     const moves = [0, 3, 1, 4,6,5];
  //     for (let i = 0; i < moves.length; i++) {
  //       await PlayGameFlow.playMove(moves[i]);
  //       const cell = await PlayGameFlow.playPage.getCell(moves[i]);
  //       const isDisplayed = await cell.isDisplayed();
  //       expect(isDisplayed).toBe(true);
  //     }

  //     await PlayGameFlow.verifyPlayer2Win();
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
  //   } catch (error) {
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
  //     throw error;
  //   }
  // });

  // it("should click specific cells in order and log the result, Draw game when choose side is X", async () => {
  //   const testCaseName = "Draw game when choose side is X";
  //   const timestamp = new Date().toISOString();
  //   try {
  //     await PlayGameFlow.navigateToPlayPage();
  //     const moves = [0, 3, 4, 8, 6, 2, 5, 1, 7];
  //     for (let i = 0; i < moves.length; i++) {
  //       await PlayGameFlow.playMove(moves[i]);
  //     }
  //     await PlayGameFlow.verifyDraw();
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
  //   } catch (error) {
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
  //     throw error;
  //   }
  // });

  // it("should click Restart button immediately after navigating to play page", async () => {
  //   const testCaseName = "Test click Restart button ";
  //   const timestamp = new Date().toISOString();
  //   try {
  //     await PlayGameFlow.navigateToPlayPage();
  //     await PlayGameFlow.playPage.clickRestart();
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
  //   } catch (error) {
  //     fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
  //     throw error;
  //   }
  // });
});
