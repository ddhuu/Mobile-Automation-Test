import RestartPopup from "./RestartPopup";

const RESTART_BUTTON = '//android.widget.Button[@content-desc="Restart"]';
const ZERO_POINT = '//android.view.View[@content-desc="0"]';
const ONE_POINT = '//android.view.View[@content-desc="1"]';

class HardModePlayPage {
  constructor() {
    this.cellLocators = [];
    for (let i = 1; i <= 25; i++) {
      this.cellLocators.push(
        `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[${i}]`
      );
    }
    this.markedCells = new Array(25).fill(false);
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

  updateCellLocators() {
    let viewIndex = 1;
    for (let i = 0; i < this.markedCells.length; i++) {
      if (!this.markedCells[i]) {
        this.cellLocators[i] = `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[${viewIndex}]`;
        viewIndex++;
      }
    }
  }

  
}

export default HardModePlayPage;