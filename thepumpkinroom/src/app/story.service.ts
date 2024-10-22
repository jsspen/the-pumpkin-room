import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Progress } from './models/progress.model';
import { Question } from './models/question.model';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  createNewPlayer(userName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/progress`, {
      userName,
    });
  }

  getQuestion(currentStoryPartId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/question/${currentStoryPartId}`);
  }

  getChoices(questionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/choice/${questionId}`);
  }

  getStoryPart(storyPartId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/story/${storyPartId}`);
  }

  // need to pass userName
  getProgress(): Observable<Progress> {
    return this.http.get<Progress>(`${this.apiUrl}/progress`);
  }

  saveProgress(progress: Progress): Observable<any> {
    return this.http.put(`${this.apiUrl}/progress`, progress);
  }

  resetGame(userName: string): Observable<any> {
    const resetState = {
      userName: userName,
      currentStoryPartId: 1,
      completed: false,
    };
    return this.http.put(`${this.apiUrl}/progress`, resetState);
  }
}
