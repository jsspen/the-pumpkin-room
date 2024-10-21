import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Progress } from './models/progress.model';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // // Track player progress
  // makeChoice(choice: string) {
  //   this.playerProgress.push(choice);
  //   // Update the current location or state based on the choice
  // }

  getStoryPart(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/story/${id}`);
  }

  saveProgress(progress: Progress): Observable<any> {
    return this.http.post(`${this.apiUrl}/progress`, progress);
  }

  getProgress() {
    return this.http.get<Progress>(`${this.apiUrl}/progress`);
  }

  resetGame() {
    this.http.post(`${this.apiUrl}/progress`, '[]');
    this.http.post(`${this.apiUrl}/story/1`, {});
  }
}
