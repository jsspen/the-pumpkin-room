import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './models/profile.model';
import { Question } from './models/question.model';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  createNewPlayer(userName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/profile`, {
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
  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/profile`);
  }

  saveProfile(profile: Profile): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile`, profile);
  }

  resetGame(userName: string): Observable<any> {
    const resetState = {
      userName: userName,
      currentStoryPartId: 1,
      completed: false,
    };
    return this.http.put(`${this.apiUrl}/profile`, resetState);
  }
}
