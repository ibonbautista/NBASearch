//ARCHIVO PARA REALIZAR LOS FETCHS EN FUNCION DE LAS NECESIDADES


//Recogemos la URL básica de la API
const BASE_URL = "http://rest.nbaapi.com/api/PlayerDataAdvanced/"; 

//Preparación de la función fetch general
async function fetchData(parameter) {
    try {
        //Concateno la URL básica con el parámetro a buscar
        const finalURL = new URL (BASE_URL + parameter); 
        const response = await fetch(finalURL);
        if(!response.ok){
            throw new Error ('HTTP error! status: ${response.status}');
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error(error);
    }
}

//BUSCAMOS JUGADORES POR NOMBRE
async function searchDataByName(playerName,section){
    const parameter = "name/" + playerName;
    const listOfPlayers = await fetchData(parameter);
    section.addListFromArray(listOfPlayers);
}

//BUSCAMOS JUGADORES POR TEMPORADA
async function searchDataBySeason(playerSeason,section){
    const parameter = "season/" + playerSeason;
    const listOfPlayers = await fetchData(parameter);
    section.addListFromArray(listOfPlayers);
}

export {searchDataByName, searchDataBySeason};
