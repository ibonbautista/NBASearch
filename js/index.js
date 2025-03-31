import { PlayerHTML, NbaHTML } from "./playerHTML.js";
import { searchDataByName, searchDataBySeason,putShield } from "./api.js";

function main(){
}


const playerList = document.getElementById("player__list");
const myNbaHTML = new NbaHTML("Lista jugadores",playerList);
const searchNameButton = document.getElementById("searchNameButton");
const searchPositionButton = document.getElementById("searchPositionButton");
const searchSeasonButton = document.getElementById("searchSeasonButton");
const teamShields = document.getElementById("teams");

searchNameButton.addEventListener("click",()=>{
    const playerSearched = document.getElementById('nameIntroduced').value;
    teamShields.style.display = "none";
    playerList.innerHTML="";
    searchDataByName(playerSearched,myNbaHTML);
})

searchPositionButton.addEventListener("click",()=>{
    const positionSearched = document.getElementById('positionIntroduced').value;
    teamShields.style.display = "none";
    playerList.innerHTML="";
    buscarJugadores(positionSearched,myNbaHTML);
})

searchSeasonButton.addEventListener("click",()=>{
    const seasonSearched = document.getElementById('seasonIntroduced').value;
    teamShields.style.display = "none";
    playerList.innerHTML="";
    searchDataBySeason(seasonSearched,myNbaHTML);
})




main();