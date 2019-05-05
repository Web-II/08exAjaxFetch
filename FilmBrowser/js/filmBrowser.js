function fetchRequest(url){
	
}

class Film {
  constructor(id, title, type, poster, year) {
    this._id = id;
    this._title = title;
    this.poster = poster;
    this._type = type;
    this._year = year;
    this._detail = {time:'',genre:'',director:'',actors:'',plot:'',language:''}
  }
  get id() { return this._id; }
  
  get title() { return this._title; }

  get type() { return this._type; }

  get poster() { return this._poster; }
  set poster(value) { value !== 'N/A' ? this._poster = value : this.poster = 'images/No_image_available.svg'; }
 
  get year() { return this._year; }

  get detail() { return this._detail; }
  
}

class FilmRepository {
  constructor() {
    this._films = [];
  }

  get films() { return this._films; }

  addFilms(arrFilms) {
    
  }
  addDetail(id,objDetail){
    
  }
  getFilmById(id){
    
  }
}

class FilmBrowserApp {
  constructor() {
    this._filmRepository = new FilmRepository();
  }

  get filmRepository() { return this._filmRepository; }
  
  searchFilms(searchText){
      if (searchText !== '' && /([^\s])/.test(searchText)){
        //url: http://www.omdbapi.com/?s=${searchText}&apikey=yourkey
      }
  }

  getFilm(id){
    //url: http://www.omdbapi.com/?i=${id}&plot=full&apikey=yourkey
    
  }
  

  showFilms() {
    document.getElementById('films').innerHTML = '';
    this.filmRepository.films.forEach((film) => {
      document.getElementById('films').insertAdjacentHTML('beforeend',
      `     
        <div class="col s12 m6">
          <div class="card small horizontal">
            <div class="card-image">
              <img src="${film.poster}">
              </div>
            <div class="card-stacked">  
              <div class="card-content">
                <span class="card-title">${film.title}</span>             
                <ul>
                  <li>Type: ${film.type}</li>
                  <li>Year: ${film.year}</li>
                </ul>
                <a id="${film.id}" class="btn-floating btn-small waves-effect waves-light green"><i class="material-icons">details</i></a>
              </div> 
            </div>       
          </div>
        </div>
      `
      );
      //implementeer
      document.getElementById(film.id).onclick = ()=>{
        
      }
    });
  }

  showDetailFilm(film){
    let details = '';
    //create <li> elementen om de elk detail weer te geven, voeg deze toe aan details
    Object.entries(film.detail).forEach(([key, value]) => {
       details += `<li><label>${key}:</label> ${value}</li>`;
    });
    document.getElementById('films').innerHTML = '';    
    document.getElementById('films').insertAdjacentHTML('beforeend',
      `     
        <div class="col s12">
          <div class="card horizontal">
            <div class="card-image">
              <img src="${film.poster}">
            </div>
            <div class="card-stacked">  
              <div class="card-content">
                <span class="card-title">${film.title}</span>             
                <ul>
                  <li><label>type:</label> ${film.type}</li>
                  <li><label>year:</label> ${film.year}</li>
                  ${details}
                </ul>
              </div>
            </div>       
          </div>
          <a id="listFilms" class="waves-effect waves-light btn-small"><i class="material-icons right">list</i>Back</a>            
        </div>
      `
    );
    //implementeer
    document.getElementById('listFilms').onclick = ()=>{
      
    }
  }

  showNoResult(){
    document.getElementById('films').innerHTML = '';
    document.getElementById('films').insertAdjacentHTML('beforeend',
      `
      <div class="col s12">
        <p>No result!!</p>
      </div>
      `
    );
  }
}

const init = function() {
  const filmBrowserApp = new FilmBrowserApp();
  //implementeer
  document.getElementById("searchBtn").onclick = ()=>{
    
  }
}

window.onload = init;
