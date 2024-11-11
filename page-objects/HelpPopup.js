const DISMISS_BUTTON = '//android.widget.Button[@content-desc="Dismiss"]';

class HelpPopup {
  get dismissButton() {
    return $(DISMISS_BUTTON);
  }

  async clickDismiss() {
    await this.dismissButton.waitForDisplayed();
    await this.dismissButton.click();
  }
}

export default new HelpPopup();