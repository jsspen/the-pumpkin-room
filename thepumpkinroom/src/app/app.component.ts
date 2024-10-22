import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StoryService } from './story.service';

import { Choice } from './models/choice.model';
import { StoryPart } from './models/story-part.model';
import { Question } from './models/question.model';
import { Progress } from './models/progress.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The Pumpkin Room';
  content: StoryPart | null = null;
  questions: Question[] = [];
  question: Question | null = null;
  choices: Choice[] = [];
  userName: string = '';
  storyText: string = '';
  progress: Progress | null = null;

  constructor(private storyService: StoryService) {}

  fetchStoryPart(id: number) {
    this.storyService.getStoryPart(id).subscribe(
      (response: StoryPart) => {
        this.content = response;
        this.storyText = this.content.text;
        this.questions = this.content.questions;

        if (this.questions.length > 0) {
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
    this.fetchStoryPart(choice.nextStoryPartId);
    // this.progress = this.storyService.getProgress();
  }

  newGame(userName: string) {
    this.storyService.createNewPlayer(userName).subscribe((response) => {
      console.log('Player created:', response);
    });
  }

  resetGame() {
    this.storyService.resetGame(this.userName).subscribe((response) => {
      console.log('Game Reset', response);
    });
    this.fetchStoryPart(1);
  }

  ngOnInit() {
    this.fetchStoryPart(1);
  }
}

// TODOS
// const progress: Progress = {
//   userId: ,
//   userName: this.userName,
//   currentStoryPartId: ,
//   choicesMade: [],
//   completed: false
// };

// this.storyService.saveProgress(progress).subscribe(response => {
//   console.log('Progress saved:', response);
// });
