import { Component } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-choice-buttons',
  standalone: true,
  imports: [],
  templateUrl: './choice-buttons.component.html',
  styleUrl: './choice-buttons.component.scss',
})
export class ChoiceButtonsComponent {
  // @Input() currentScene!: Scene;

  constructor(private storyService: StoryService) {}

  // makeChoice(index: number) {
  //   this.currentScene = this.storyService.makeChoice(index);
  // }
}
