// const movies = require('./data.js');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
	const result = array.map((movie) => movie.director); //Busca i guarda a un array tots els valors de la key director de l'array que li ve per funció.
	console.log('EXERCICE 1 ->', result);
	return result;
}

// Exercise 2: Get the films of a certain director
// Filtra les pelis comparant el director de la peli de l'array que li passes amb el nom del director que li pases per funció.
function getMoviesFromDirector(array, director) {
	const moviesFromDirector = array.filter((movie) => movie.director === director);
	return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
	let moviesFromDirector = getMoviesFromDirector(array, director);
	let scoreMoviesDirector = moviesFromDirector.reduce((acc, item) => acc + item.score, 0);
	const moviesAverageDirector = Number((scoreMoviesDirector / moviesFromDirector.length).toFixed(2));
	return moviesAverageDirector;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
	const movieTitleList = array.map((movie) => movie.title);
	movieTitleList.sort();

	if (movieTitleList.length > 20) {
		let top20movies = movieTitleList.slice(0, 20);
		return top20movies;
	} else {
		return movieTitleList;
	}
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
	const moviesList = [ ...array ];
	const moviesOrder = moviesList.sort((a, b) => {
		if (a.year < b.year) {
			return -1;
		}
		if (a.year > b.year) {
			return 1;
		}
		if (a.year === b.year) {
			// Si els anys son iguals.
			const titleA = a.title.toUpperCase();
			const titleB = b.title.toUpperCase();
			if (titleA < titleB) {
				return -1;
			}
			if (titleA > titleB) {
				return 1;
			}
		}
	});
	return moviesOrder;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
	const genreMovies = array.filter((item) => {
		if (item.genre.includes(genre) && item.score !== '') {
			return true;
		}
	});
	const scoreMoviesGenre = genreMovies.reduce((acc, item) => acc + item.score, 0);
	const moviesAverageGenre = Number((scoreMoviesGenre / genreMovies.length).toFixed(2));
	return moviesAverageGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
	const moviesList = array.map((item) => {
		let timeSplit = item.duration.split(' ');
		let timeHours = Number(timeSplit[0].replace('h', ''));
		let totalTime = timeHours * 60;

		if (timeSplit.length > 1) {
			let timeMinutes = Number(timeSplit[1].replace('min', ''));
			totalTime = totalTime + timeMinutes;
		}
		return {
			title: item.title,
			year: item.year,
			director: item.director,
			duration: totalTime,
			genre: item.genre,
			score: item.score
		};
	});
	return moviesList;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
	const moviesYear = array.filter((movie) => movie.year == year);

	const moviesYearOrder = moviesYear.sort((a, b) => {
		if (a.score < b.score) {
			return 1;
		}
		if (a.score > b.score) {
			return -1;
		}
		if (a.score === b.score) {
			return 0;
		}
	});
	const bestMovieOfYear = [ moviesYearOrder[0] ];
	return bestMovieOfYear;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = {
		getAllDirectors,
		getMoviesFromDirector,
		moviesAverageOfDirector,
		orderAlphabetically,
		orderByYear,
		moviesAverageByCategory,
		hoursToMinutes,
		bestFilmOfYear
	};
}
