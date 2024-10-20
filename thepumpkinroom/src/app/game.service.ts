import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private currentLocation: string = '';
  private playerProgress: string[] = [];

  constructor() {}

  // Track player progress
  makeChoice(choice: string) {
    this.playerProgress.push(choice);
    // Update the current location or state based on the choice
  }

  getProgress() {
    return this.playerProgress;
  }

  resetGame() {
    this.playerProgress = [];
    this.currentLocation = '';
  }
}
