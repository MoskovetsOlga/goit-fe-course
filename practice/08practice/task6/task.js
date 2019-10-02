/*
  Создайте функцию createMovieCard(), которая
  создает и возвращает DOM-узел карточки кинофильма.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/



const createMovieCard = ({ imageSrc, imageAlt, title, description, date, rating }) => {

  let movie = document.createElement('div');
  movie.classList.add('movie');

  let movieImage = document.createElement('img');
  movieImage.classList.add('movie__image');
  movieImage.src = imageSrc;
  movieImage.alt = imageAlt;

  let movieBody = document.createElement('div');
  movieBody.classList.add('movie__body');

  let movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie__title');
  movieTitle.textContent = title;

  let movieDescription = document.createElement('p');
  movieDescription.classList.add('movie__description');
  movieDescription.textContent = description;

  let movieDate = document.createElement('p');
  movieDate.classList.add('movie__date');
  movieDate.textContent = date;

  let movieRating = document.createElement('p');
  movieRating.classList.add('movie__rating');
  movieRating.textContent = rating;

  movie.append(movieImage);
  movieBody.append(movieTitle);
  movieBody.append(movieDescription);
  movieBody.append(movieDate);
  movieBody.append(movieRating);
  movie.append(movieBody);

  document.querySelector('.root').append(movie);

  return movie;
}

createMovieCard(
  {
    imageSrc: 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    imageAlt: 'The Godfather',
    title: 'The Godfather',
    description: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would- be killers, launching a campaign of bloody revenge.',
    date: 'Released: 1972-03-14',
    rating: 'Rating: 8.6'
  })


