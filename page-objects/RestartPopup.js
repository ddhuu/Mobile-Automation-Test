const RESUME_BUTTON = '//android.widget.Button[@content-desc="Resume"]';
const RESTART_BUTTON = '//android.widget.Button[@content-desc="Restart"]';

class RestartPopup {
  get resumeButton() {
    return $(RESUME_BUTTON);
  }

  get restartButton() {
    return $(RESTART_BUTTON);
  }

  async clickResume() {
    await this.resumeButton.waitForDisplayed();
    await this.resumeButton.click();
  }

  async clickRestart() {
    await this.restartButton.waitForDisplayed();
    await this.restartButton.click();
  }
}

export default new RestartPopup();