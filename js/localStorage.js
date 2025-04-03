import { favPlayers } from "./data.js";

//CREATE DEFAULT POSITIONS OF LOCALSTORAGE
if(!localStorage.getItem("pointGuardFav")){
	const playerFav = {
		name: "",
		position: "PG",
		team: "",
		season: 0,
	  };
	localStorage.setItem('pointGuardFav', JSON.stringify(playerFav));
}
if(!localStorage.getItem("shootingGuardFav")){
	const playerFav = {
		name: "",
		position: "SG",
		team: "",
		season: 0,
	  };
	  localStorage.setItem('shootingGuardFav', JSON.stringify(playerFav));
}
if(!localStorage.getItem("smallForwardFav")){
	const playerFav = {
		name: "",
		position: "SF",
		team: "",
		season: 0,
	  };
	  localStorage.setItem('smallForwardFav', JSON.stringify(playerFav));
}
if(!localStorage.getItem("powerForwardFav")){
	const playerFav = {
		name: "",
		position: "PF",
		team: "",
		season: 0,
	  };
	  localStorage.setItem('powerForwardFav', JSON.stringify(playerFav));
}
if(!localStorage.getItem("centerFav")){
	const playerFav = {
		name: "",
		position: "c",
		team: "",
		season: 0,
	  };
	  localStorage.setItem('centerFav', JSON.stringify(playerFav));
}

// Guardar objetos en LocalStorage
function saveToLocalStorage(playerName, position, team, season) {
  const playerFav = {
    name: playerName,
    position: position,
    team: team,
    season: season,
  };

  if (favPlayers.length <= 4) {
    favPlayers.push(playerFav);
  }
  console.log(favPlayers.length);

  //FILTRO PARA LAS POSICIONES
  switch (position) {
    case "PG":
      localStorage.setItem("pointGuardFav", JSON.stringify(playerFav));
      break;
    case "SG":
      localStorage.setItem("shootingGuardFav", JSON.stringify(playerFav));
      break;
    case "SF":
      localStorage.setItem("smallForwardFav", JSON.stringify(playerFav));
      break;
    case "PF":
      localStorage.setItem("powerForwardFav", JSON.stringify(playerFav));
      break;
    case "C":
      localStorage.setItem("centerFav", JSON.stringify(playerFav));
      break;
    default:
      localStorage.setItem("pointguardFav", "Bad position");
      break;
  }
}


const pgDiv = document.getElementById("pg");
const titlePg = document.createElement("h3");
titlePg.textContent = JSON.parse(localStorage.pointGuardFav).name || "";
const attributeListPg = document.createElement("ul");
attributeListPg.classList.add("fav-player-attributes");
const attributeSeasonPg = document.createElement("li");
attributeSeasonPg.classList.add("attribute", "season");
attributeSeasonPg.textContent = JSON.parse(localStorage.pointGuardFav).season;
const attributePositionPg = document.createElement("li");
attributePositionPg.classList.add("attribute", "position");
attributePositionPg.textContent = JSON.parse(localStorage.pointGuardFav).position;
const attributeTeamPg = document.createElement("li");
attributeTeamPg.classList.add("attribute", "team");
attributeTeamPg.textContent = JSON.parse(localStorage.pointGuardFav).team;

const sgDiv = document.getElementById("sg");
const titleSg = document.createElement("h3");
titleSg.textContent = JSON.parse(localStorage.shootingGuardFav).name;
const attributeListSg = document.createElement("ul");
attributeListSg.classList.add("fav-player-attributes");
const attributeSeasonSg = document.createElement("li");
attributeSeasonSg.classList.add("attribute", "season");
attributeSeasonSg.textContent = JSON.parse(localStorage.shootingGuardFav).season;
const attributePositionSg = document.createElement("li");
attributePositionSg.classList.add("attribute", "position");
attributePositionSg.textContent = JSON.parse(localStorage.shootingGuardFav).position;
const attributeTeamSg = document.createElement("li");
attributeTeamSg.classList.add("attribute", "team");
attributeTeamSg.textContent = JSON.parse(localStorage.shootingGuardFav).team;

const sfDiv = document.getElementById("sf");
const titleSf = document.createElement("h3");
titleSf.textContent = JSON.parse(localStorage.smallForwardFav).name;
const attributeListSf = document.createElement("ul");
attributeListSf.classList.add("fav-player-attributes");
const attributeSeasonSf = document.createElement("li");
attributeSeasonSf.classList.add("attribute", "season");
attributeSeasonSf.textContent = JSON.parse(localStorage.smallForwardFav).season;
const attributePositionSf = document.createElement("li");
attributePositionSf.classList.add("attribute", "position");
attributePositionSf.textContent = JSON.parse(localStorage.smallForwardFav).position;
const attributeTeamSf = document.createElement("li");
attributeTeamSf.classList.add("attribute", "team");
attributeTeamSf.textContent = JSON.parse(localStorage.smallForwardFav).team;

const pfDiv = document.getElementById("pf");
const titlePf = document.createElement("h3");
titlePf.textContent = JSON.parse(localStorage.powerForwardFav).name;
const attributeListPf = document.createElement("ul");
attributeListPf.classList.add("fav-player-attributes");
const attributeSeasonPf = document.createElement("li");
attributeSeasonPf.classList.add("attribute", "season");
attributeSeasonPf.textContent = JSON.parse(localStorage.powerForwardFav).season;
const attributePositionPf = document.createElement("li");
attributePositionPf.classList.add("attribute", "position");
attributePositionPf.textContent = JSON.parse(localStorage.powerForwardFav).position;
const attributeTeamPf = document.createElement("li");
attributeTeamPf.classList.add("attribute", "team");
attributeTeamPf.textContent = JSON.parse(localStorage.powerForwardFav).team;

const cDiv = document.getElementById("c");
const titleC = document.createElement("h3");
titleC.textContent = JSON.parse(localStorage.centerFav).name;
const attributeListC = document.createElement("ul");
attributeListC.classList.add("fav-player-attributes");
const attributeSeasonC = document.createElement("li");
attributeSeasonC.classList.add("attribute", "season");
attributeSeasonC.textContent = JSON.parse(localStorage.centerFav).season;
const attributePositionC = document.createElement("li");
attributePositionC.classList.add("attribute", "position");
attributePositionC.textContent = JSON.parse(localStorage.centerFav).position;
const attributeTeamC = document.createElement("li");
attributeTeamC.classList.add("attribute", "team");
attributeTeamC.textContent = JSON.parse(localStorage.centerFav).team;


//PUT ATTRIBUTES IN THE LIST IN ORDER
attributeListPg.append(titlePg, attributeSeasonPg, attributePositionPg, attributeTeamPg);
attributeListSg.append(titleSg, attributeSeasonSg, attributePositionSg, attributeTeamSg);
attributeListSf.append(titleSf, attributeSeasonSf, attributePositionSf, attributeTeamSf);
attributeListPf.append(titlePf, attributeSeasonPf, attributePositionPf, attributeTeamPf);
attributeListC.append(titleC, attributeSeasonC, attributePositionC, attributeTeamC);
//PUT TITLE AND ATRIBUTE LIST TO MAKE CARDS
pgDiv.append(attributeListPg);
sgDiv.append(attributeListSg);
sfDiv.append(attributeListSf);
pfDiv.append(attributeListPf);
cDiv.append(attributeListC);

console.log(JSON.parse(localStorage.getItem("pointGuardFav")));
console.log(JSON.parse(localStorage.getItem("shootingGuardFav")));
console.log(JSON.parse(localStorage.getItem("smallForwardFav")));
console.log(JSON.parse(localStorage.getItem("powerForwardFav")));
console.log(JSON.parse(localStorage.getItem("centerFav")));
console.log(favPlayers);

// Buscar libros en lo guardado
function findInLocalStorageArray(favPlayers, playerFav) {
  for (let i = 0; i <= favPlayers.length; i++) {
    if (playerFav.name === favPlayers[i].name) {
      isFav = true;
      break;
    }
  }
  return isFav;
}

/* // Recuperar todos los objetos guardados en el LocalStorage
function getFromLocalStorage (toberead) {
	const resultString = localStorage.getItem(toberead);
	const resultJSON = JSON.parse(resultString);
	const result = [];
	if(resultJSON !== null) {
		resultJSON.forEach(book => { //crear un array de libros con el formato bookhtml
			const bookCard = new BookHTML (
				book.id,
				book.title,
				book.publishedDate,
				book.pageCount,
				book.language,
				book.categories,
				book.description,
				book.imageLinks,
				book.authors,
				book.infoLink
			)
			result.push(bookCard);
		});	
	}
	
	return result;
}

// Añadir libros al array guardado en LocalStorage
function addToLocalStorageArray (toberead, book) {
	const array = getFromLocalStorage(toberead) || [];
	const index = array.findIndex(element => element.id === book.id);
	if (index !== -1) {
		return;
	}
	array.push(book);
	saveToLocalStorage(toberead, array);
}

// Eliminar libros del array guardado en LocalStorage
function removeFromLocalStorageArray (toberead, book) {
	const array = getFromLocalStorage(toberead);
	if (!array) {
		return;
	}
	const index = array.findIndex(element => element.id === book.id);
	if (index === -1) {
		return;
	}
	array.splice(index, 1);
	saveToLocalStorage(toberead, array);
}


// Función para guardar el formulario en local storage
function formToLocalStorage () {
	const formulario = document.getElementById("contact__form");
	formulario.addEventListener("submit", (e) => {
		e.preventDefault();
	});
	// Obtener los valores del formulario
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;

	 // Crear un objeto con los datos
	 let datos = {
        nombre: nombre,
        email: email
    };

	// Guardar en localStorage (convertimos el objeto a string JSON)
    localStorage.setItem("formularioDatos", JSON.stringify(datos));

    alert("Datos guardados en localStorage.");
}

*/
export { saveToLocalStorage, findInLocalStorageArray };
