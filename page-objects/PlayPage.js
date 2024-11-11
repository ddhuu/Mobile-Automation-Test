import RestartPopup from "./RestartPopup";

const RESTART_BUTTON = '//android.widget.Button[@content-desc="Restart"]';
const ZERO_POINT = '//android.view.View[@content-desc="0"]';
const ONE_POINT = '//android.view.View[@content-desc="1"]';

class PlayPage {
  constructor() {
    this.cellLocators = [
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[1]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[2]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[3]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[4]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[5]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[6]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.widget.FrameLayout/android.view.View/android.view.View[7]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.widget.FrameLayout/android.view.View/android.view.View[8]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.widget.FrameLayout/android.view.View/android.view.View[9]',
    ];
    this.markedCells = new Array(9).fill(false);
  }

  wait_until_screen_displayed() {
    $(this.cellLocators[0]).waitForDisplayed();
  }

  getCell(index) {
    return $(this.cellLocators[index]);
  }

  async clickCell(index) {
    const cell = await this.getCell(index);
    await cell.waitForDisplayed();
    await cell.click();
    this.markedCells[index] = true;
    this.updateCellLocators();
  }

  async clickRestart() {
    await $(RESTART_BUTTON).click();
  }

  async clickRestartPopup() {
    await RestartPopup.clickRestartButton();
    this.resetCellLocators();
  }

  async clickResume() {
    await RestartPopup.clickResume();
  }

  updateCellLocators() {
    let viewIndex = 1;
    for (let i = 0; i < this.markedCells.length; i++) {
      if (!this.markedCells[i]) {
        this.cellLocators[
          i
        ] = `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[${viewIndex}]`;
        viewIndex++;
      }
    }
  }

  resetCellLocators() {
    this.markedCells.fill(false);
    this.cellLocators = [
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[1]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[2]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[3]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[4]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[5]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[6]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.widget.FrameLayout/android.view.View/android.view.View[7]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.widget.FrameLayout/android.view.View/android.view.View[8]',
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.widget.FrameLayout/android.view.View/android.view.View[9]',
    ];
  }

  async checkMarkedCells() {
    for (let i = 0; i < this.markedCells.length; i++) {
      if (this.markedCells[i]) {
        const cell = await $(
          `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.widget.ImageView[${
            i + 1
          }]`
        );
        const isDisplayed = await cell.isDisplayed();
        expect(isDisplayed).toBe(true);
      } else {
        const cell = await this.getCell(i);
        const isDisplayed = await cell.isDisplayed();
        expect(isDisplayed).toBe(true);
      }
    }
  }

  async checkPointsDisplayed() {
    const zeroPoint = await $(ZERO_POINT);
    const onePoint = await $(ONE_POINT);
    expect(await zeroPoint.isDisplayed()).toBe(true);
    expect(await onePoint.isDisplayed()).toBe(true);
  }
}

export default PlayPage;
