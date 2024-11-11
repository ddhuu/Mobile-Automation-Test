import ChooseSidePage from "../page-objects/ChooseSidePage";
import HardModePlayPage from "../page-objects/HardModePlayPage";
import HomePage from "../page-objects/HomePage";
import PlayerModePage from "../page-objects/PlayerModePage";
import PlayPage from "../page-objects/PlayPage";
import RestartPopup from "../page-objects/RestartPopup";
import ResultPage from "../page-objects/ResultPage";

class PlayGameFlow {
  constructor() {
    this.playPage = new PlayPage();
    this.playHardMode = new HardModePlayPage();
  }

  async navigateToPlayPage() {
    await HomePage.wait_until_screen_displayed();
    await HomePage.clickThreePlayerButton();

    await PlayerModePage.wait_until_screen_displayed();
    await PlayerModePage.clickMultiplayerModeButton();

    await ChooseSidePage.wait_until_screen_displayed();
    await ChooseSidePage.clickXPlayerButton();
    await ChooseSidePage.start_button.waitForDisplayed();
    await ChooseSidePage.clickStartButton();

    await this.playPage.wait_until_screen_displayed();
  }

  async navigateToHardModePlayPage() {
    await HomePage.wait_until_screen_displayed();
    await HomePage.clickFivePlayerButton();

    await PlayerModePage.wait_until_screen_displayed();
    await PlayerModePage.clickMultiplayerModeButton();

    await ChooseSidePage.wait_until_screen_displayed();
    await ChooseSidePage.clickXPlayerButton();
    await ChooseSidePage.start_button.waitForDisplayed();
    await ChooseSidePage.clickStartButton();

    await this.playPage.wait_until_screen_displayed();
  }

  async playMove(position) {
    await this.playPage.clickCell(position);
  }

  async playHardModeMove(position) {
    await this.playHardMode.clickCell(position);
  }

  async verifyPlayer1Win() {
    const expectedWinMessage = "Player 1 win!";
    const actualWinMessage = await ResultPage.getPlayer1WinText();
    expect(actualWinMessage).toBe(expectedWinMessage);
    await this.clickPlayAgain();
  }

  async verifyPlayer2Win() {
    const expectedWinMessage = "Player 2 win!";
    const actualWinMessage = await ResultPage.getPlayer2WinText();
    expect(actualWinMessage).toBe(expectedWinMessage);
    await this.clickPlayAgain();
  }

  async backToHomePage() {
    await this.clickPlayAgain();
    await HomePage.wait_until_screen_displayed();
    // expect(await threePlayerButton.getText()).toBe("3x3");
    // expect(await fivePlayerButton.getText()).toBe("5x5");
  }

  async verifyDraw() {
    const expectedDrawMessage = "It's a draw!";
    await browser.pause(5000);
    const actualDrawMessage = await ResultPage.getDrawText();
    expect(actualDrawMessage).toBe(expectedDrawMessage);
    await this.clickPlayAgain();
  }

  async resetGame() {
    this.playPage = new PlayPage();
    this.playHardMode = new HardModePlayPage();
  }

  async clickPlayAgain() {
    await ResultPage.clickPlayAgain();
    await this.playPage.wait_until_screen_displayed();
  }

  async clickRestart() {
    await this.playPage.clickRestart();
    await this.playPage.clickRestartPopup();
    await this.playPage.wait_until_screen_displayed();
    await browser.pause(5000);
    // for (let i = 0; i < 9; i++) {
    //   const cell = await this.playPage.getCell(i);
    //   const isDisplayed = await cell.isDisplayed();
    //   expect(isDisplayed).toBe(true);
    // }
  }

  async clickResume() {
    await this.playPage.clickRestart();
    await this.playPage.clickResume();
    await this.playPage.wait_until_screen_displayed();

    await browser.pause(5000);

    for (let i = 0; i < this.playPage.markedCells.length; i++) {
      if (this.playPage.markedCells[i]) {
        const cell = await this.playPage.getCell(i);
        const isDisplayed = await cell.isDisplayed();
        expect(isDisplayed).toBe(true);
      }
    }
  }

  async clickRefight() {
    await ResultPage.clickRefight();
    await this.playPage.wait_until_screen_displayed();
    await this.playPage.checkPointsDisplayed();
  }
}

export default new PlayGameFlow();
