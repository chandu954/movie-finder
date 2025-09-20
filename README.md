# Movie Finder

An Angular application to search and view movies using **The Movie Database (TMDb) API**.  
Built with **Angular**, **Angular Material**, and **RxJS**.

---

## Features

- Search movies by title
- View movie details, including genres, overview, and release date
- Responsive UI with Angular Material components
- Light and dark theme support

---

## Demo

*(Add a screenshot or link to deployed app here)*

---

## Technologies Used

- Angular 17
- Angular Material
- RxJS
- TypeScript
- TMDb API

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/chandu954/movie-finder.git
cd movie-finder
Install dependencies:

bash
Copy code
npm install
Add your TMDb API key in src/environments/environment.ts:

ts
Copy code
export const environment = {
  production: false,
  tmdbApiKey: 'YOUR_TMDB_API_KEY'
};
Run the application:

bash
Copy code
ng serve
Open in browser:

arduino
Copy code
http://localhost:4200
Usage
Use the search bar to find movies

Click on a movie card to view detailed information

Toggle between light and dark themes

Folder Structure
css
Copy code
src/
 ├─ app/
 │   ├─ components/
 │   │   ├─ movie-list/
 │   │   ├─ movie-details/
 │   │   └─ search-bar/
 │   ├─ app-routing.module.ts
 │   └─ app.component.ts
 ├─ environments/
 └─ styles.scss
License
This project is licensed under the MIT License.
