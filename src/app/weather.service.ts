import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '0a6c6b36f4094b77a4730909241211'
  private baseUrl = 'https://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}`);
  }
}