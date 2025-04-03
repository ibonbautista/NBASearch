//Basic URL from the API
const BASE_URL = "http://rest.nbaapi.com/api/PlayerDataTotals/query?";

//Basic Fetch function
async function fetchData(parameter) {
    try {
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

//Function to search by name of player => gets all seasons of a player
async function searchDataByName(playerName,section){
    const parameter = "playerName=" + playerName + "&sortBy=Season&ascending=false&pageSize=50";
    const listOfPlayers = await fetchData(parameter);
    section.addListFromArray(listOfPlayers);
}

//Function to search by season => gets all players of a unique season
async function searchDataBySeason(seasonSearched,section){
    const parameter = "season=" + seasonSearched + "&sortBy=PlayerName&ascending=true&pageSize=900";
    const listOfPlayers = await fetchData(parameter);
    section.addListFromArray(listOfPlayers);
}

//Function to search by position => gets the position in a unique season (default = current year)
async function searchDataByPosition(seasonSearched,positionSearched,section){
    const parameter = "season=" + seasonSearched + "&sortBy=PlayerName&ascending=true&pageSize=900";
    const listOfPlayers = await fetchData(parameter);
    section.addListBySeasonAndPosition(listOfPlayers,seasonSearched,positionSearched);
}

//Function to search squads => gets the squad for a team in a unique season
async function searchDataByTeam(seasonSearched,teamSearched,section){
   /* const parameter = "season=" + seasonSearched + "&team=" + teamSearched + "&sortBy=PlayerName&ascending=true&pageSize=30";
    const listOfPlayers = await fetchData(parameter);
    section.addListFromArray(listOfPlayers);*/
} 

//Function to search current squad => gets the current squad from a team
async function searchDataCurrentSquad(team,section){
    const parameter = "season=2025&team=" + team + "&sortBy=PlayerName&ascending=true&pageSize=30";
    const listOfPlayers = await fetchData(parameter);
    section.addListFromArray(listOfPlayers);
}

export { searchDataByName, searchDataBySeason, searchDataByPosition, searchDataCurrentSquad, searchDataByTeam };
