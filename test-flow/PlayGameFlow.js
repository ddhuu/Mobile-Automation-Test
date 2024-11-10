import ChooseSidePage from '../page-objects/ChooseSidePage';
import HomePage from '../page-objects/HomePage';
import PlayerModePage from '../page-objects/PlayerModePage';
import PlayPage from '../page-objects/PlayPage';
import RestartPopup from '../page-objects/RestartPopup';
import ResultPage from '../page-objects/ResultPage';

class PlayGameFlow {
  constructor() {
    this.playPage = new PlayPage();
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

  async playMove(position) {
    await this.playPage.clickCell(position);
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

  async verifyDraw() {
    const expectedDrawMessage = "It's a draw!";
    await browser.pause(5000);
    const actualDrawMessage = await ResultPage.getDrawText();
    console.log(`Expected: ${expectedDrawMessage}, Received: ${actualDrawMessage}`);
    expect(actualDrawMessage).toBe(expectedDrawMessage);
    await this.clickPlayAgain();
  }

  async resetGame() {
    this.playPage = new PlayPage();
  }

  async clickPlayAgain() {
    await ResultPage.clickPlayAgain();
    await this.playPage.wait_until_screen_displayed();
  }

  async clickRestart() {
    await this.playPage.clickRestart();
    await this.playPage.wait_until_screen_displayed();
    for (let i = 0; i < 9; i++) {
      const cell = await this.playPage.getCell(i);
      const isDisplayed = await cell.isDisplayed();
      expect(isDisplayed).toBe(true);
    }
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
}

export default new PlayGameFlow();