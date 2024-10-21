export interface Choice {
  id: number;
  text: string;
  questionId: number;
  nextStoryPartId: number | null;
}
