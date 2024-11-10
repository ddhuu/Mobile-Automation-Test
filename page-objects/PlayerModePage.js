const SINGLE_MODE = '//android.widget.Button[@content-desc="Single Player"]';
const MULTIPLAYER_MODE = '//android.widget.Button[@content-desc="Multi PLayer"]';

class PlayerModePage {
  wait_until_screen_displayed() {
    $(SINGLE_MODE).waitForDisplayed();
  }

  get single_mode_button() {
    return $(SINGLE_MODE);
  }

  get multiplayer_mode_button() {
    return $(MULTIPLAYER_MODE);
  }

  async clickSingleModeButton() {
    const button = await $(SINGLE_MODE);
    await button.waitForDisplayed();
    await button.click();
  }

  async clickMultiplayerModeButton() {
    const button = await $(MULTIPLAYER_MODE);
    await button.waitForDisplayed();
    await button.click();
  }
}

export default new PlayerModePage();