export interface Progress {
  userId: number;
  userName: string;
  currentStoryPartId: number;
  choicesMade: Array<number>;
  completed: boolean;
}
