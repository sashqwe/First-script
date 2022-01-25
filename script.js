

'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let firstMovie = prompt('Один из последних просмотренных фильмов?','Название фильма');
let firstRate = prompt('На сколько оцените его?','Оценка');
let secondMovie = prompt('Один из последних просмотренных фильмов?','Название фильма');
let secondRate = prompt('На сколько оцените его?','Оценка');


personalMovieDB.movies[firstMovie] = firstRate;
personalMovieDB.movies[secondMovie] = secondRate;

console.log(personalMovieDB.movies);


