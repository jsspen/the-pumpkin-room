import { Choice } from './choice.model';

export interface Question {
  id: number;
  text: string;
  storyPartId: number;
  choices: Choice[];
}
