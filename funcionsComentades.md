// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
	let result = array.map((movie) => movie.director); //Busca i guarda a un array tots els valors de la key director de l'array que li ve per funció.
	console.log('EXERCICE 1 ->', result);
	return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) { 
	let moviesFromDirector = array.filter((movie) => movie.director === director); // Filtra les pelis comparant el director de la peli de l'array que li passes amb el nom del director que li pases per funció.
	return moviesFromDirector; // Retorna totes les pelis del director que li has passat.
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
	let moviesFromDirector = getMoviesFromDirector(array, director); // Crea un array nou (moviesFromDirector) amb les pelis del director.
	let scoreMoviesDirector = moviesFromDirector.reduce((acc, item) => acc + item.score, 0); // Suma les notes de totes les pelis de l'array nou començat per la posició 1 (0).
	let moviesAverageDirector = Number((scoreMoviesDirector / moviesFromDirector.length).toFixed(2)); // Converteix en número, divideix la nota entre les pelis (per fer la mitja) i fes que el núero tingui 2 decimals.
	return moviesAverageDirector;
}

// Exercise 4:  Alphabetic order by title

function orderAlphabetically(array) {
	let movieTitleList = array.map((movie) => movie.title); // Fa un array amb els títols de les pelis.
	movieTitleList.sort(); // Endreça alfabeticament els elements de l'array.

	if (movieTitleList.length > 20) {
		// Si la mida de l'array és major a 20.
		let top20movies = movieTitleList.slice(0, 20); // Recorre l'array i afegeix de la posició 0 a la 20 al nou array (top20movies).
		return top20movies;
	} else {
		return movieTitleList; // Si és té menys de 20 elements, retorna la llista base (ja endreçada).
	}
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
	let moviesList = [...array]; // Duplica l'array
	let moviesOrder = moviesList.sort((a, b) => { // Endreça l'array segons:
	if (a.year < b.year) { // Si l'any de la peli A és menor a l'any de la peli B.
		return -1; // Retorna -1
	}
	if (a.year > b.year) { // Si l'any de la peli A és major al de la peli B.
		return 1; // Retorna 1
	}
	if (a.year === b.year) { // Si els anys son iguals.
		const titleA = a.title.toUpperCase(); 	// Agafa el títol, passa-ho a majúscules
		const titleB = b.title.toUpperCase();	// Agafa el títol, passa-ho a majúscules
		if (titleA < titleB) { // Si el títol A va abans alfabèticament que el títol B
		return -1; // Retorna -1
		}
		if (titleA > titleB) { // Si el títol A va després alfabèticament que el títol B
		return 1; // Retorna 1
		}
	}
	});

	return moviesOrder; // Retorn de la funció: l'ordre general de les pelis
}	


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
	let moviesCategory = getMoviesFromDirector(array, category); // Crea un array nou (moviesCategory) amb les pelis de la categoria.
	let scoreCategory = moviesCategory.reduce((acc, item) => acc + item.score, 0); // Suma les notes de totes les pelis de l'array nou començat per la posició 1 (0).
	let moviesAverageCategory = Number((scoreCategry / moviesCategory.length).toFixed(2)); // Converteix en número, divideix la nota entre les pelis (per fer la mitja) i fes que el núero tingui 2 decimals.
	return moviesAverageCategory;
}