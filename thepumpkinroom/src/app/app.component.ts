import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryService } from './story.service';
import { Choice } from './models/choice.model';
import { StoryPart } from './models/story-part.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The Pumpkin Room';
  // storyPart: any;
  content: any;
  playerProgress = {};
  userName = '';
  storyText = '';
  questions: { text: string; choices: any[] }[] = [];
  questionText = '';
  choices = [];

  constructor(private storyService: StoryService) {}

  fetchStoryPart(id: number) {
    this.storyService.getStoryPart(id).subscribe(
      (response) => {
        console.log('Content fetched:', response);
        this.content = response;
        this.storyText = this.content.text;
        this.questions = this.content.questions;
        const questionCount = this.questions.length;
        if (questionCount === 1) {
          this.questionText = this.questions[0].text;
        }
      },
      (error) => {
        console.error('Error fetching StoryPart', error);
      }
    );
  }

  ngOnInit() {
    this.fetchStoryPart(1);
  }

  newGame(userName: string) {
    this.storyService.createNewPlayer(userName).subscribe((response) => {
      console.log('Player created:', response);
    });
  }

  makeChoice(choice: Choice) {
    this.storyService.getStoryPart(choice.nextStoryPartId);
    this.playerProgress = this.storyService.getProgress();
  }

  resetGame() {
    this.storyService.resetGame(this.userName);
    this.playerProgress = [];
  }
}

// // Reset the game for a user
// this.storyService.resetGame('JohnDoe').subscribe(response => {
//   console.log('Game reset:', response);
// });

// // Save progress
// const progress: Progress = {
//   userId: 1,
//   userName: 'JohnDoe',
//   currentStoryPartId: 5,
//   choicesMade: [2, 3, 6],
//   completed: false
// };

// this.storyService.saveProgress(progress).subscribe(response => {
//   console.log('Progress saved:', response);
// });
