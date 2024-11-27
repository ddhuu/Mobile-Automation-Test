import fs from "fs";
import PlayGameFlow from "../../test-flow/PlayGameFlow";
import { testCases3x3 as testCases } from "../../data/testCase";

fs.writeFileSync("log.txt", "");

describe("3x3", () => {
  beforeEach(async () => {
    await PlayGameFlow.resetGame();
  });

  testCases.forEach(({ name, moves, verify }) => {
    it(`should ${name}`, async () => {
      const timestamp = new Date().toISOString();
      try {
        await PlayGameFlow.navigateToPlayPage();
        for (let i = 0; i < moves.length; i++) {
          await PlayGameFlow.playMove(moves[i]);
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
