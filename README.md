# Angular8OmdbapiMovieSearchEngine


## Uruchomienie projektu

- Sklonować projekt z repozytorium - git clone project_url project_folder_name
- Przed uruchomieniem projektu dodać plik environment.ts na wzór pliku environment.example.ts i podstawić właściwe dane.
- Wydać polecenie - ng serve następnie otworzyć przegląderkę i następujący adres - http://localhost:4200/


## Wersja online

#### wersja ta nie jest aktualna z repozytorium / problem z działaniem przez brak SSL / lepiej uruchomić projekt lokalnie
[http://sandbox.jakubgania.io/search](http://sandbox.jakubgania.io/search)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## To Do

- obsługa błęgów - http
- RWD => głównie pod breakpoint mobilny
- implementacja BEM w stylach
- refaktoryzacja
- dodać loader podczas działania infnite scroll
- dodać efekt pralaxy dla zdjęcia na stronie wyszukiwania
- dodać przeliczanie ocen na reprezentację wizualną na wykresach
- podział na mniejsze komponenty

## Lista kroków

- instalacja angular CLI
- inicjalizacja projektu
- utworzenie repozytorium
- wgranie projektu do repozytorium
- utworzenie komponentu - search
- utworzenie komponent - move
- utworzenie i dodanie pliku/modułu app-routing.module.ts z routingiem
- uzyskanie klucza do API
- implementacja odpowiednich komponentów
- implementacja mechanizmu infinity scoll w oparciu o komponent - [Angular Infinite Scroll](https://www.npmjs.com/package/ngx-infinite-scroll)
- refaktoryzacja niektórych części kodu
- implementacja drugiego widoku wyników wyszukiwania filmów
- duuuużo drobnych poprawek technicznych i wizualnych
- dodanie obłsugi SCSS i konwersja plików z CSS => SCSS
- implementacja BEM (ale nie całkowicie)








- przy wyświetlaniu danych z API sprawdzam czy występuje dany klucz oraz czy klucz nie jest pusty lub czy nie ma wartości 'N/A' ponieważ czasami z API  przychodzą dane albo bez wartości w kluczu albo pusty klucz

- zdjęcia w widoku listy - albo zostawić do lewej, albo centrować każde horyzontalnie i wertykalnie w sekcji dla zdjęcia ???
