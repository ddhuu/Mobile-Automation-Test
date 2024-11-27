import fs from "fs";
import PlayGameFlow from "../../test-flow/PlayGameFlow";
import { testCases5x5 as testCases } from "../../data/testCase";

describe("5x5", () => {
  beforeEach(async () => {
    await PlayGameFlow.resetGame();
  });

  testCases.forEach(({ name, moves, verify }) => {
    it(`should ${name}`, async () => {
      const timestamp = new Date().toISOString();
      try {
        await PlayGameFlow.navigateToHardModePlayPage();
        for (let i = 0; i < moves.length; i++) {
          await PlayGameFlow.playHardModeMove(moves[i]);
        }
        await PlayGameFlow[verify]();
        fs.appendFileSync("log.txt", `${timestamp} - ${name}: pass\n`);
      } catch (error) {
        fs.appendFileSync("log.txt", `${timestamp} - ${name}: fail\n`);
        throw error;
      }
    });
  });
});
