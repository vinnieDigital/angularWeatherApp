import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './app/components/search-box/search-box.component';
import { WeatherDisplayComponent } from './app/components/weather-display/weather-display.component';
import { WeatherService } from './app/services/weather.service';
import { WeatherData } from './app/models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, WeatherDisplayComponent],
  template: `
    <div class="container">
      <h1>Weather App</h1>
      <app-search-box (search)="searchWeather($event)"></app-search-box>
      <app-weather-display [weather]="weatherData"></app-weather-display>
      <p class="error" *ngIf="error">{{ error }}</p>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 0 1rem;
      font-family: Arial, sans-serif;
    }
    .error {
      color: red;
      text-align: center;
    }
  `]
})
export class App {
  weatherData?: WeatherData;
  error = '';

  constructor(private weatherService: WeatherService) {}

  searchWeather(city: string) {
    this.error = '';
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        this.error = 'Failed to fetch weather data. Please try again.';
        console.error('Weather API Error:', err);
      }
    });
  }
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error(err));