const THREE_PLAYER_BUTTON = '//android.widget.Button[@content-desc="3x3"]';
const FIVE_PLAYER_BUTTON = '//android.widget.Button[@content-desc="5x5"]';

class HomePage {
  wait_until_screen_displayed() {
    $(THREE_PLAYER_BUTTON).waitForDisplayed();
  }

  get three_player_button() {
    return $(THREE_PLAYER_BUTTON);
  }

  get five_player_button() {
    return $(FIVE_PLAYER_BUTTON);
  }

  async clickThreePlayerButton() {
    const button = await $(THREE_PLAYER_BUTTON);
    await button.waitForDisplayed();
    await button.click();
  }

  async clickFivePlayerButton() {
    const button = await $(FIVE_PLAYER_BUTTON);
    await button.waitForDisplayed();
    await button.click();
  }
}

export default new HomePage();