import { Question } from './question.model';

export interface StoryPart {
  id: number;
  text: string;
  questions: Question[];
}
