const PLAYER_1_WIN_MESSAGE = '//android.view.View[@content-desc="Player 1 win!"]';
const PLAYER_2_WIN_MESSAGE = '//android.view.View[@content-desc="Player 2 win!"]';
const PLAY_AGAIN_BUTTON = '//android.widget.Button[@content-desc="Take me home"]';
const DRAW_MESSAGE = '//android.view.View[@content-desc="It\'s a draw!"]';

class ResultPage {
  get player1WinMessage() {
    return $(PLAYER_1_WIN_MESSAGE);
  }

  get player2WinMessage() {
    return $(PLAYER_2_WIN_MESSAGE);
  }

  get drawMessage() {
    return $(DRAW_MESSAGE);
  }

  get playAgainButton() {
    return $(PLAY_AGAIN_BUTTON);
  }

  async isPlayer1WinDisplayed() {
    return await this.player1WinMessage.isDisplayed();
  }

  async isPlayer2WinDisplayed() {
    return await this.player2WinMessage.isDisplayed();
  }

  async isDrawDisplayed() {
    return await this.drawMessage.isDisplayed();
  }

  async getPlayer1WinText() {
    await this.player1WinMessage.waitForDisplayed({ timeout: 10000 });
    const text = await this.player1WinMessage.getAttribute('content-desc');
    return text;
  }

  async getPlayer2WinText() {
    await this.player2WinMessage.waitForDisplayed({ timeout: 10000 });
    const text = await this.player2WinMessage.getAttribute('content-desc');
    return text;
  }

  async getDrawText() {
    await this.drawMessage.waitForDisplayed({ timeout: 10000 });
    const text = await this.drawMessage.getAttribute('content-desc');
    return text;
  }

  async clickPlayAgain() {
    await this.playAgainButton.waitForDisplayed({ timeout: 10000 });
    await this.playAgainButton.click();
  }
}

export default new ResultPage();