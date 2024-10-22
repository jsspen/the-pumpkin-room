import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryService } from './story.service';
import { Choice } from './models/choice.model';
import { StoryPart } from './models/story-part.model';
import { Question } from './models/question.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The Pumpkin Room';
  content: StoryPart | null = null;
  questions: Question[] = [];
  userName = '';
  storyText = '';
  questionText = '';
  progress = {};

  constructor(private storyService: StoryService) {}

  fetchStoryPart(id: number) {
    this.storyService.getStoryPart(id).subscribe(
      (response: StoryPart) => {
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

  resetGame() {
    this.storyService.resetGame(this.userName).subscribe((response) => {
      console.log('Game Reset', response);
    });
    this.progress = {};
  }
}

// TODOS
// makeChoice(choice: Choice) {
//   this.storyService.getStoryPart(choice.nextStoryPartId);
//   this.playerProgress = this.storyService.getProgress();
// }

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
