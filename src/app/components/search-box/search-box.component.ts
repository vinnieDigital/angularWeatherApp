import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="search-box">
      <input 
        [(ngModel)]="city" 
        placeholder="Enter Zip Code or City Name"
        (keyup.enter)="onSearch()"
      >
      <button (click)="onSearch()">Search</button>
    </div>
  `,
  styles: [
    `
    .search-box {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    input {
      flex: 1;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `,
  ],
})
export class SearchBoxComponent {
  city = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.city.trim()) {
      this.search.emit(this.city);
    }
  }
}
