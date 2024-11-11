// import fs from "fs";
// import PlayGameFlow from "../../test-flow/PlayGameFlow";




// describe("3x3", () => {
//   beforeEach(async () => {
//     await PlayGameFlow.resetGame();
//   });

  
//   it("should click Restart button immediately after navigating to play page", async () => {
//     const testCaseName = "Test click Restart button ";
//     const timestamp = new Date().toISOString();
//     try {
//       await PlayGameFlow.navigateToPlayPage();
//       const moves = [0, 1];
//       for (let i = 0; i < moves.length; i++) {
//         await PlayGameFlow.playMove(moves[i]);
//       }
//       await PlayGameFlow.clickRestart();
//       fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: pass\n`);
//     } catch (error) {
//       fs.appendFileSync("log.txt", `${timestamp} - ${testCaseName}: fail\n`);
//       throw error;
//     }
//   });
  

 

 

  

  

  
// });
