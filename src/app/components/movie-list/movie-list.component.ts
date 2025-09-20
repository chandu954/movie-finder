import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';       // for *ngIf, *ngFor
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, SearchBarComponent],
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  movies: any[] = [];
}
