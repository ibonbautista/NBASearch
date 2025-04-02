import { PlayerHTML, NbaHTML } from "./playerHTML.js";
import { searchDataByName, searchDataBySeason, searchDataByPosition, searchDataCurrentSquad, searchDataByTeam } from "./api.js";
import { shields, teamNames } from "./data.js";
import { saveToLocalStorage } from "./localStorage.js";


//ZONE TO GET SECTION
let searchName = "";
let searchNameSection = "";
let searchSeason = "";
let searchSeasonSection = "";
let searchPosition = "";
let searchPositionSection = "";
let searchTeam = "";
let searchTeamSection = "";
let teamsList = "";
let playerList = "";
let myNbaHTML = "";

//FUNCTION TO INITIALIZE BASIC LAYERS OF PAGE
function main(){

    //GET SECTION FOR SHOW INFO FROM THE API
    playerList = document.getElementById("player-list");
    myNbaHTML = new NbaHTML("Lista jugadores",playerList);

    //HOME BUTTONS AND INPUTS => BY DEFAULT SEARCH BY NAME
    searchName = document.getElementById("search-name");
    searchNameSection = document.getElementById("search-section-by-name");
    searchSeason = document.getElementById("search-season");
    searchSeasonSection = document.getElementById("search-section-by-season");
    searchPosition = document.getElementById("search-position");
    searchPositionSection = document.getElementById("search-section-by-position");
    searchTeam = document.getElementById("search-team");
    searchTeamSection = document.getElementById("search-section-team-season");
    
    searchNameSection.style.display = "block";
    searchSeasonSection.style.display = "none";
    searchPositionSection.style.display = "none";
    searchTeamSection.style.display = "none"; 
    
    //HOME TEAMS
    teamsList = document.getElementById("team-squads");
    for(let i=0; i<shields.length; i++){
        const teamShield = document.createElement("img");
        teamShield.setAttribute("src","./assets/"+shields[i]+".png");
        teamShield.classList.add("team-shield");
        teamShield.addEventListener("click", () => {
            teamsList.style.display = "none";
            playerList.innerHTML="";
            searchDataCurrentSquad(shields[i],myNbaHTML);
        })
        teamsList.appendChild(teamShield);
    }
}
main();

    
//SEARCH BY NAME ZONE
const searchNameInput = document.getElementById("name-introduced");
searchName.addEventListener("click",()=>{
    searchNameSection.style.display = "block";
    searchSeasonSection.style.display = "none";
    searchPositionSection.style.display = "none";
    searchTeamSection.style.display = "none";
    console.log("hola");
})
searchNameInput.addEventListener("input", async () => {
    const playerSearched = searchNameInput.value.trim();
    teamsList.style.display = "none";
    playerList.innerHTML="";
    searchDataByName(playerSearched,myNbaHTML);
})

//SEARCH BY SEASON ZONE
const searchSeasonInputOnly = document.getElementById("season-introduced-only");
const currentYear = new Date().getFullYear();
for (let year = currentYear; year >= 1950; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    searchSeasonInputOnly.appendChild(option);
}
searchSeason.addEventListener("click",()=>{
    searchNameSection.style.display = "none";
    searchSeasonSection.style.display = "block";
    searchPositionSection.style.display = "none";
    searchTeamSection.style.display = "none";
})
searchSeasonInputOnly.addEventListener("change", async () => {
    const seasonSearched = searchSeasonInputOnly.value;
    teamsList.style.display = "none";
    playerList.innerHTML="";
    searchDataBySeason(seasonSearched,myNbaHTML);
})


//SEARCH BY POSITION ZONE
const searchSeasonForPosition = document.getElementById("season-introduced-for-position");
for (let year = currentYear; year >= 1950; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    searchSeasonForPosition.appendChild(option);
}
const searchPositionInput = document.getElementById("position-introduced");
searchPosition.addEventListener("click",()=>{
    searchNameSection.style.display = "none";
    searchSeasonSection.style.display = "none";
    searchPositionSection.style.display = "block";
    searchTeamSection.style.display = "none";
})
let seasonSearched = "";
let positionSearched = "";
searchSeasonForPosition.addEventListener("change", async () => {
    seasonSearched = searchSeasonForPosition.value;
})
searchPositionInput.addEventListener("change", async () => {
    positionSearched = searchPositionInput.value;
    if(seasonSearched.length < 1){
        seasonSearched = new Date().getFullYear();
    }
    teamsList.style.display = "none";
    playerList.innerHTML="";
    searchDataByPosition(seasonSearched,positionSearched,myNbaHTML);
})

//SEARCH BY TEAM ZONE

/*

    const seasonAndPosition = document.getElementById("season-introduced-for-position");
    for (let year = currentYear; year >= 1950; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        seasonAndPosition.appendChild(option);
    }

    const seasonAndTeam = document.getElementById("season-introduced-for-team");
    for (let year = currentYear; year >= 1950; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        seasonAndTeam.appendChild(option);
    }
    const teamOfSeason = document.getElementById("team-introduced");
    for(let i=0; i<teamNames.length; i++){
        const teamOptionName = document.createElement("option");
        teamOptionName.classList.add("team-name");
        teamOptionName.setAttribute("value",teamNames[i]);
        teamOptionName.textContent = teamNames[i];
        teamOptionName.addEventListener("change", () => {
            console.log("hola");
            teamsList.style.display = "none";
            playerList.innerHTML="";
            searchDataByTeam(seasonSearched,teamNames[i],myNbaHTML);
        })
        teamOfSeason.appendChild(teamOptionName);
    }
}





const searchTeam = document.getElementById("search-team");
const searchTeamSection = document.getElementById("search-section-team-season");
searchTeam.addEventListener("click",()=>{
    searchNameSection.style.display = "none";
    searchSeasonSection.style.display = "none";
    searchPositionSection.style.display = "none";
    searchTeamSection.style.display = "block"; 



















    
    
    
    
    
    
    
    
    
    
    
    
    /*const buttonFav = document.getElementById("fav");
    buttonFav.addEventListener("click",()=>{
        console.log("hola");
        const player = document.getElementById("atributteList");
    console.log(player);
    saveToLocalStorage("playerFav",player);
    console.log(localStorage.getItem("playerFav"));
})*/



