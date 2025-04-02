import { Player,Nba } from "./player.js";

class PlayerHTML extends Player{

    constructor(id,playerName,position,age,games,gamesStarted,minutesPg,threePercent,twoPercent,ftPercent,offensiveRb,defensiveRb,totalRb,assists,steals,
        blocks,turnovers,personalFouls,points,team,season){
        super(id,playerName,position,age,games,gamesStarted,minutesPg,threePercent,twoPercent,ftPercent,offensiveRb,defensiveRb,totalRb,assists,steals,
            blocks,turnovers,personalFouls,points,team,season);
        this.article = null;
    }

    //CREATE AN ARTICLE FOR EACH PLAYER
    createHTML(fatherElement) {
        this.article = document.createElement("article");
        this.article.classList.add("player", "card");

        fatherElement.appendChild(this.article);
    }

    //INITIALIZE EACH ELEMENT FOR VISUALITATION
    initialize(fatherElement) {
        this.createHTML(fatherElement);
        this.render();
    }

    //ELEMENT VISUALITATION (CARDS)
    render() {
        //REINIT ARTICLE
        this.article.innerHTML = "";

        //CREATE A TITLE ELEMENT WITH THE SEASON
        const title = document.createElement("h3");
        title.textContent = "Season: " + this.season;

        //CREATE AN UNORDERED LIST WITH THE ATTRIBUTES
        const attributeList = document.createElement("ul");
        attributeList.classList.add("player-attributes");

        //CREATE A BUTTON TO ADD IN FAVS, SAME BUTTON WITH SAME UTILITIES
        const favButton = document.createElement("button");
        favButton.classList.add("fav-button");
        favButton.textContent = "FAV";
        favButton.addEventListener("click", () => {
            //TO DO => FAV EN CONDICIONES
            const playerFav = {
                name: this.playerName,
                position: this.position
            }
            //FILTRO PARA LAS POSICIONES
            if(this.position === "C"){
                localStorage.setItem('centerFav',JSON.stringify(playerFav));
            }
            console.log(JSON.parse(localStorage.getItem('playerFav')));
        })
        
        //CREATE ALL OF LIS WITH THE ATTRIBUTES WE CHOOSE
        const attributeName = document.createElement("li");
        attributeName.classList.add("attribute", "name");
        attributeName.textContent = "Name: " + this.playerName;
        
        const attributeAge = document.createElement("li");
        attributeAge.classList.add("attribute", "age");
        attributeAge.textContent = "Age: " + this.age;

        //CREATE ATTRIBUTE POSITION TRANSLATING US POSITIONS
        const attributePosition = document.createElement("li");
        attributePosition.classList.add("attribute", "position");
        switch(this.position){
            case "PG":
                attributePosition.textContent = "Position: Point Guard (1, Base)";
                break;
            case "SG":
                attributePosition.textContent = "Position: Shooting Guard (2, Escolta)";
                break;
            case "SF":
                attributePosition.textContent = "Position: Small Forward (3, Alero)";
                break;
            case "PF":
                attributePosition.textContent = "Position: Power Forward (4, Ala-pívot)";
                break;
            case "C":
                attributePosition.textContent = "Position: Center (5, Pívot)";
                break;
            default:
                attributePosition.textContent = "Position: None";
                break;
        }

        const attributeGames = document.createElement("li");
        attributeGames.classList.add("attribute", "games");
        attributeGames.textContent = "Total games: " + this.gamesPlayed + " started: " + this.gamesStarted;

        const attributeMinutes = document.createElement("li");
        attributeMinutes.classList.add("attribute", "minutes");
        attributeMinutes.textContent = "Total minutes: " + this.minutesPlayed + " per game: " + this.minutesPer;

        const attributePoints = document.createElement("li");
        attributePoints.classList.add("attribute", "points");
        attributePoints.textContent = "Total points: " + this.points + " per game: " + this.pointsPer;

        const attributeShotPercents = document.createElement("li");
        attributeShotPercents.classList.add("attribute", "shootPercents");
        attributeShotPercents.textContent = "2 shoots: " + this.twoPercent + " 3 shoots: " + this.threePercent + " Free trhows: " + this.freePercent;

        const attributeRebounds = document.createElement("li");
        attributeRebounds.classList.add("attribute", "rebounds");
        attributeRebounds.textContent = "Total: " + this.totalRbPer + " Off-Rebounds: " + this.offRebPer + " Def-Rebounds: " + this.defRebPer;

        const attributeAsBlocks = document.createElement("li");
        attributeAsBlocks.classList.add("attribute", "asblocks");
        attributeAsBlocks.textContent = "Assists: " + this.assistsPer + " Blocks: " + this.blockPer;

        const attributeStealTurn = document.createElement("li");
        attributeStealTurn.classList.add("attribute", "stealturn");
        attributeStealTurn.textContent = "Steals: " + this.stealsPer + " Turnovers: " + this.turnoversPer;

        
        //TO DO => RECOGER LOS EQUIPOS MAL PUESTOS PARA QUE SALGAN TODAS LAS IMAGENES
        const attributeTeam = document.createElement("li");
        attributeTeam.classList.add("attribute", "team");
        attributeTeam.textContent = "Team: " + this.team;
        const attributeTeamImage = document.createElement("li");
        const teamImage = document.createElement("img");
        if(this.team === "TOT"){
            teamImage.setAttribute("src",`./assets/TOR.png`);
        }else if(this.team === "PHO"){
            teamImage.setAttribute("src",`./assets/PHX.png`);
        }else if(this.team === "SEA"){
            teamImage.setAttribute("src",`./assets/OKC.png`);
        }else{
            teamImage.setAttribute("src",`./assets/${this.team}.png`);
        }
        attributeTeam.classList.add("attribute", "team");
        attributeTeam.append(teamImage);

        //PUT ATTRIBUTES IN THE LIST IN ORDER
        attributeList.append(favButton, attributeName, attributeAge, attributePosition, attributeGames, attributeMinutes, attributePoints, attributeShotPercents, attributeRebounds, attributeAsBlocks, attributeStealTurn, attributeTeam, attributeTeamImage);

        //PUT TITLE AND ATRIBUTE LIST TO MAKE CARDS
        this.article.appendChild(title);
        this.article.appendChild(attributeList);
    }
}

class NbaHTML extends Nba{
    constructor(name,section){
        super(name);
        this.section = section;
    }

    //FUNCTION TO PUSH A PLAYER IN A ARRAY
    addList(player){
        this.listOfPlayers.push(player);
        player.initialize(this.section);
    }

    //FUNCTION TO GET A OBJECT, CREATE A PLAYER AND PUSH IN ARRAY
    addListFromArray(list){
        for(let i = 0; i < list.length; i++){
            const player = new PlayerHTML(
                list[i].id, list[i].playerName, list[i].position, list[i].age,
                list[i].gamesPlayed, list[i].gamesStarted, list[i].minutesPlayed, list[i].minutesPer,
                list[i].threePercent, list[i].twoPercent, list[i].freePercent,
                list[i].offReb, list[i].offRebPer, list[i].defReb, list[i].defRebPer, list[i].totalRb, list[i].totalRbPer,
                list[i].assists, list[i].assistsPer, list[i].steals, list[i].stealsPer, list[i].blocks, list[i].blockPer,
                list[i].turnovers, list[i].turnoversPer, list[i].personalFouls, list[i].personalFoulsPer,
                list[i].points, list[i].pointsPer,
                list[i].team, list[i].season);
            this.addList(player);
        }
    }
    
    //FUNCTION TO GET AN OBJECT, CREATE A PLAYER AND USING FILTERS PUSH IN ARRAY
    addListBySeasonAndPosition(list,seasonSearched,positionSearched){
        /* console.log(seasonSearched);
        console.log(positionSearched);
        console.log(list); */
        for(let i = 0; i < list.length; i++){
            const player = new PlayerHTML(
                list[i].id, list[i].playerName, list[i].position, list[i].age,
                list[i].gamesPlayed, list[i].gamesStarted, list[i].minutesPlayed, list[i].minutesPer,
                list[i].threePercent, list[i].twoPercent, list[i].freePercent,
                list[i].offReb, list[i].offRebPer, list[i].defReb, list[i].defRebPer, list[i].totalRb, list[i].totalRbPer,
                list[i].assists, list[i].assistsPer, list[i].steals, list[i].stealsPer, list[i].blocks, list[i].blockPer,
                list[i].turnovers, list[i].turnoversPer, list[i].personalFouls, list[i].personalFoulsPer,
                list[i].points, list[i].pointsPer,
                list[i].team, list[i].season);
            if(player.position === positionSearched){
                this.addList(player);
            }
        }
    }
}


export {PlayerHTML, NbaHTML};