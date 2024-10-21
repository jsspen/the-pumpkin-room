import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryService } from './story.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'The Pumpkin Room';
  storyStart =
    "You don't know how you got here but you are standing outside the front door of a house that you don't recognize. You look around but see only the deep dark woods in all directions. It's cold and you're very confused. You can see that the door to the house hasn't been shut all the way and there's a faint glow of light coming from inside. It's incredibly quiet but it's impossible to know if anyone is home. It seems like its the middle of the night.";
  choice01 =
    'Do you open the door and look around inside the house or do you try to find your way through the woods?';
  option01a = 'Head into the house';
  option01b = 'Head into the woods';

  playerProgress: string[] = [];

  constructor(private storyService: StoryService) {}

  makeChoice(choice: string) {
    this.storyService.makeChoice(choice);
    this.playerProgress = this.storyService.getProgress();
  }

  resetGame() {
    this.storyService.resetGame();
    this.playerProgress = [];
  }
}
