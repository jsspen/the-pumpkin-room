import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoryService } from './story.service';

import { Choice } from './models/choice.model';
import { StoryPart } from './models/story-part.model';
import { Question } from './models/question.model';
import { Profile } from './models/profile.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The Pumpkin Room';
  hasSelectedGame = false;
  showNewGameForm = false;
  hasStartedGame = false;
  errorMessage: string | null = null;
  content: StoryPart | null = null;
  questions: Question[] = [];
  question: Question | null = null;
  choices: Choice[] = [];
  userName: string = '';
  storyText: string = '';
  profile: Profile | null = null;

  constructor(private storyService: StoryService) {}

  fetchStoryPart(id: number) {
    this.storyService.getStoryPart(id).subscribe(
      (response: StoryPart) => {
        this.content = response;
        this.storyText = this.content?.text;
        this.questions = this.content?.questions;

        if (this.questions?.length > 0) {
          const randomIndex = Math.floor(Math.random() * this.questions.length);
          this.question = this.questions[randomIndex];
        }
      },
      (error) => {
        console.error('Error fetching StoryPart', error);
      }
    );
  }

  makeChoice(choice: Choice) {
    this.fetchStoryPart(choice?.nextStoryPartId);
    // this.profile = this.storyService.getProfile();
  }

  newGame() {
    this.hasSelectedGame = true;
    this.showNewGameForm = true;
  }

  newPlayer(userName: string) {
    this.storyService.createNewPlayer(userName).subscribe((response) => {
      console.log('Player created:', response);
    });
  }

  submitNewGame() {
    if (this.userName) {
      this.storyService.createNewPlayer(this.userName).subscribe(
        (response) => {
          console.log('Player created:', response);
          this.errorMessage = null;
          this.hasStartedGame = true;
          this.fetchStoryPart(1);
          this.showNewGameForm = false;
        },
        (error) => {
          this.errorMessage = error.error
            ? error.error.error
            : 'An error occurred';
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid username';
    }
  }

  loadGame() {
    this.hasSelectedGame = true;
    this.showNewGameForm = true;
  }

  resetGame() {
    this.storyService.resetGame(this.userName).subscribe((response) => {
      console.log('Game Reset', response);
    });
    this.fetchStoryPart(1);
  }
}

// TODOS
// this.storyService.saveProfile(profile).subscribe(response => {
//   console.log('Profile saved:', response);
// });
