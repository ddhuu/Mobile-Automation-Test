import fs from 'fs';
import RestartPopup from './RestartPopup';

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
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.widget.FrameLayout/android.view.View/android.view.View[9]'
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
    await RestartPopup.clickRestart();
    this.resetCellLocators();
  }

  async clickResume() {
    await RestartPopup.clickResume();
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
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.widget.FrameLayout/android.view.View/android.view.View[9]'
    ];
  }
}

export default PlayPage;