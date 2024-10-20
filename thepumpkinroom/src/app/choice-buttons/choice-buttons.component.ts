import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-choice-buttons',
  standalone: true,
  imports: [],
  templateUrl: './choice-buttons.component.html',
  styleUrl: './choice-buttons.component.scss',
})
export class ChoiceButtonsComponent {
  // @Input() currentScene!: Scene;

  constructor(private gameService: GameService) {}

  // makeChoice(index: number) {
  //   this.currentScene = this.gameService.makeChoice(index);
  // }
}
