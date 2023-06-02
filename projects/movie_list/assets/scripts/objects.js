const addMovieButton = document.getElementById("add-movie-btn");
const movieList = document.getElementById("movie-list");
const searchButton = document.getElementById("search-btn");
const searchInputValue = document.getElementById('filter-title')

const movies = [];

function moveToList(filteredMovies = []) {


  let moviesToShow = movies
  if (filteredMovies.length > 0) {
    moviesToShow = filteredMovies
  }
  if (moviesToShow.length !== 0) {
      movieList.classList.add('visible')
      movieList.textContent = "";
    
      for (const movie of moviesToShow) {
        const listItem = document.createElement("li");
        let klucz = movie.getMovieKey()
        let wartosc = movie.getMovieVal()
    
        listItem.textContent = movie.title + klucz + wartosc
        // tu jest ciekawy element, poniewaz w LI dyamicznie wyswietlamy klucz i wartosc obiektu movie, ale nie mozemy sie do nich odwolac tworzac list item, poneiwaz nie znmay nazwy jego key i value ktora jest dynamicznie wpisywana przez użytkownika, w zwiazku z tym iterujemy poprzez klucze w obieckie przy pomocy petli "for ... in ..."
        // for (const key in movie) {
        //   if (key !== "title" && key !== 'id') {
        //     listItem.textContent += ` ${key} ${movie[key]}`;
        //   }
        // }

        movieList.append(listItem);
      }
    } else { movieList.classList.remove('visible') }
  
  }


function addMovieHandler() {
  const inputTitle = document.getElementById("title").value;
  const inputExtraName = document.getElementById("extra-name").value;
  const inputExtraVal = document.getElementById("extra-value").value;

  if (
    inputTitle.trim() !== "" &&
    inputExtraName.trim() !== "" &&
    inputExtraVal.trim() !== ""
  ) {
    const movie = {
      title: inputTitle,
      [inputExtraName]: inputExtraVal,
      id: Math.random(),
      getMovieKey: function () {
        return inputExtraName
      },
      getSomeVal: function () {
        return this.someKey
      },
      getMovieVal: function () {
        return this[inputExtraName]
      }
    };

    movies.push(movie);

    moveToList()
  } else {
    alert("fill all fields");
  }
}

function filterMovies() {
  const filteredValue = searchInputValue.value
  let filteredMovies
  filteredMovies = movies.filter(movie => movie.title === filteredValue)

 moveToList(filteredMovies)
  

}

searchButton.addEventListener('click', filterMovies)
addMovieButton.addEventListener("click", addMovieHandler);
