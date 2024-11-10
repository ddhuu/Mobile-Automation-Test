const XPLAYER_BUTTON =
  '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]';

const START_BUTTON = '~Start game';

class ChooseSidePage {
  wait_until_screen_displayed() {
    $(XPLAYER_BUTTON).waitForDisplayed();
  }

  get xplayer_button() {
    return $(XPLAYER_BUTTON);
  }

  get start_button() {
    return $(START_BUTTON);
  }

  async clickXPlayerButton() {
    const button = await $(XPLAYER_BUTTON);
    await button.waitForDisplayed();
    await button.click();
  }

  async clickStartButton() {
    const button = await $(START_BUTTON);
    await button.waitForDisplayed();
    await button.click();
  }
}

export default new ChooseSidePage();