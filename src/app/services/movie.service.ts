import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${environment.apiToken}`
    });
  }

  // 🔎 Search Movies
  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie`, {
      headers: this.getHeaders(),
      params: { query, page }
    });
  }

  // 🔥 Popular Movies
  getPopularMovies(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular`, {
      headers: this.getHeaders(),
      params: { page }
    });
  }

  // 🎬 Get details
  getMovieDetails(id: number) {
    return this.http.get(`${this.apiUrl}/movie/${id}`, {
      headers: this.getHeaders()
    });
  }
}
