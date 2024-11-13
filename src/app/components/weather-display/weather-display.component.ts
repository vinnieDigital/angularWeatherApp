import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../models/weather.model';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="weather-info" *ngIf="weather">
      <h2>{{ weather.location.name }}, {{ weather.location.country }}</h2>
      <div class="weather-details">
        <img [src]="weather.current.condition.icon" [alt]="weather.current.condition.text">
        <p class="temp">{{ weather.current.temp_f }}°F</p>
        <p class="condition">{{ weather.current.condition.text }}</p>
        <div class="extra-info">
          <p>Humidity: {{ weather.current.humidity }}%</p>
          <p>Wind: {{ weather.current.wind_mph }} m/h</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .weather-info {
      text-align: center;
      padding: 2rem;
      background-color: #f8f9fa;
      border-radius: 8px;
    }
    .weather-details {
      margin-top: 1rem;
    }
    .temp {
      font-size: 3rem;
      margin: 0.5rem 0;
    }
    .condition {
      font-size: 1.2rem;
      color: #666;
    }
    .extra-info {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 1rem;
    }
  `]
})
export class WeatherDisplayComponent {
  @Input() weather?: WeatherData;
}