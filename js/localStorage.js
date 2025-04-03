

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

//FUNCTION TO SAVE PLAYER IN LOCALSTORAGE
function saveToLocalStorage(playerName, position, team, season) {
  const playerFav = {
    name: playerName,
    position: position,
    team: team,
    season: season,
  };
  //POSITION FILTER
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

//CREATE CARD FOR POINT GUARD FAVORITE
const pgDiv = document.getElementById("pg");
const titlePg = document.createElement("h3");
titlePg.textContent = JSON.parse(localStorage.pointGuardFav).name;
const attributeListPg = document.createElement("ul");
attributeListPg.classList.add("fav-player-attributes");
const attributeSeasonPg = document.createElement("li");
attributeSeasonPg.classList.add("attribute", "season");
attributeSeasonPg.textContent = "Season: " + JSON.parse(localStorage.pointGuardFav).season;
const attributeTeamPg = document.createElement("li");
const teamImagePg = document.createElement("img");
teamImagePg.setAttribute("src",`./assets/${JSON.parse(localStorage.pointGuardFav).team}.png`);
attributeTeamPg.classList.add("attribute", "team");
attributeTeamPg.append(teamImagePg);
attributeListPg.append(titlePg, attributeSeasonPg, attributeTeamPg);
pgDiv.append(attributeListPg);

//CREATE CARD FOR SHOOTING GUARD FAVORITE
const sgDiv = document.getElementById("sg");
const titleSg = document.createElement("h3");
titleSg.textContent = JSON.parse(localStorage.shootingGuardFav).name;
const attributeListSg = document.createElement("ul");
attributeListSg.classList.add("fav-player-attributes");
const attributeSeasonSg = document.createElement("li");
attributeSeasonSg.classList.add("attribute", "season");
attributeSeasonSg.textContent = "Season: " + JSON.parse(localStorage.shootingGuardFav).season;
const attributeTeamSg = document.createElement("li");
const teamImageSg = document.createElement("img");
teamImageSg.setAttribute("src",`./assets/${JSON.parse(localStorage.shootingGuardFav).team}.png`);
attributeTeamSg.classList.add("attribute", "team");
attributeTeamSg.append(teamImageSg);
attributeListSg.append(titleSg, attributeSeasonSg, attributeTeamSg);
sgDiv.append(attributeListSg);

//CREATE CARD FOR SMALL FORWARD FAVORITE
const sfDiv = document.getElementById("sf");
const titleSf = document.createElement("h3");
titleSf.textContent = JSON.parse(localStorage.smallForwardFav).name;
const attributeListSf = document.createElement("ul");
attributeListSf.classList.add("fav-player-attributes");
const attributeSeasonSf = document.createElement("li");
attributeSeasonSf.classList.add("attribute", "season");
attributeSeasonSf.textContent = "Season: " + JSON.parse(localStorage.smallForwardFav).season;
const attributeTeamSf = document.createElement("li");
const teamImageSf = document.createElement("img");
teamImageSf.setAttribute("src",`./assets/${JSON.parse(localStorage.smallForwardFav).team}.png`);
attributeTeamSf.classList.add("attribute", "team");
attributeTeamSf.append(teamImageSf);
attributeListSf.append(titleSf, attributeSeasonSf, attributeTeamSf);
sfDiv.append(attributeListSf);

//CREATE CARD FOR POWER FORWARD FAVORITE
const pfDiv = document.getElementById("pf");
const titlePf = document.createElement("h3");
titlePf.textContent = JSON.parse(localStorage.powerForwardFav).name;
const attributeListPf = document.createElement("ul");
attributeListPf.classList.add("fav-player-attributes");
const attributeSeasonPf = document.createElement("li");
attributeSeasonPf.classList.add("attribute", "season");
attributeSeasonPf.textContent = "Season: " + JSON.parse(localStorage.powerForwardFav).season;
const attributeTeamPf = document.createElement("li");
const teamImagePf = document.createElement("img");
teamImagePf.setAttribute("src",`./assets/${JSON.parse(localStorage.powerForwardFav).team}.png`);
attributeTeamPf.classList.add("attribute", "team");
attributeTeamPf.append(teamImagePf);
attributeListPf.append(titlePf, attributeSeasonPf, attributeTeamPf);
pfDiv.append(attributeListPf);

//CREATE CARD FOR CENTER FAVORITE
const cDiv = document.getElementById("c");
const titleC = document.createElement("h3");
titleC.textContent = JSON.parse(localStorage.centerFav).name;
const attributeListC = document.createElement("ul");
attributeListC.classList.add("fav-player-attributes");
const attributeSeasonC = document.createElement("li");
attributeSeasonC.classList.add("attribute", "season");
attributeSeasonC.textContent = "Season: " + JSON.parse(localStorage.centerFav).season;
const attributeTeamC = document.createElement("li");
const teamImageC = document.createElement("img");
teamImageC.setAttribute("src",`./assets/${JSON.parse(localStorage.centerFav).team}.png`);
attributeTeamC.classList.add("attribute", "team");
attributeTeamC.append(teamImageC);
attributeListC.append(titleC, attributeSeasonC, attributeTeamC);
cDiv.append(attributeListC);

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

export { saveToLocalStorage };
