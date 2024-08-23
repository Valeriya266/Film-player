const API_KEY = "4f8c450d-d4fa-40ec-a418-3dff941d495e";
const API_KEY_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1";

getMovies(API_KEY_POPULAR);

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    showMovies(respData);
}

function showMovies(data) {
    const moviesEl = document.querySelector('.movies');

    data.items.forEach((movie) => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
		    <div class="movie__cover-inner">
				<img src="${movie.posterUrlPreview}" alt="${movie.nameRu}" class="movie__cover">
				<div class="movie__cover--darkened"></div>
				<div class="movie__info">
					<div class="movie__title">${movie.nameRu}</div>
					<div class="movie__category">${movie.genres.map((genre) => ` ${genre.genre}`)}</div>
					<div class="movie__average movie__average--green">${movie.ratingKinopoisk}</div>
				</div>
			</div>
        `;
        moviesEl.appendChild(movieEl);
    });


}