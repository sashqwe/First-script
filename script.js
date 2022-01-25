
'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for(let i=0; i<numberOfFilms; i++){
        
        let movie = prompt('Один из последних просмотренных фильмов?','Название фильма');
        let rate = prompt('На сколько оцените его?','Оценка');
        
        if(movie != null && rate != null && movie!= '' && rate != '' && movie.length < 50 ){
            
            personalMovieDB.movies[movie] = rate;

        } else{
            
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if(numberOfFilms<10){
        console.log('Просмотрено довольно мало фильмов');
    }else if(numberOfFilms>=10 && numberOfFilms<=30){
        console.log('Вы классический зритель');
    }else if(numberOfFilms>30){
        console.log('Вы киноман');
    }else{
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat != true){
        console.log(personalMovieDB);
    }else{
        console.log('error');
    }
}

showMyDB();

function writeYourGenres(){
    for(let i=0; i<3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
    }
}

writeYourGenres();







// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/




