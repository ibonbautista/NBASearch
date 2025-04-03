import { Player,Nba } from "./player.js";
import { saveToLocalStorage } from "./localStorage.js";

class PlayerHTML extends Player{

    constructor(id,playerName,position,age,games,gamesStarted,minutesPg,threePercent,twoPercent,ftPercent,offensiveRb,defensiveRb,totalRb,assists,steals,
        blocks,turnovers,personalFouls,points,team,season){
        super(id,playerName,position,age,games,gamesStarted,minutesPg,threePercent,twoPercent,ftPercent,offensiveRb,defensiveRb,totalRb,assists,steals,
            blocks,turnovers,personalFouls,points,team,season);
        this.article = null;
        this.minutesPer = Math.trunc((this.minutesPg / this.games) * 100) / 100 || "0 minutes per game";
        this.offensiveRbPer = Math.trunc((this.offensiveRb / this.games) * 100) / 100 || "0.0*";
        this.defensiveRbPer = Math.trunc((this.defensiveRb / this.games) * 100) / 100 || "0.0*";
        this.totalRbPer = Math.trunc((this.totalRb / this.games)* 100) / 100 || "0.0*";
        this.assistsPer = Math.trunc((this.assists / this.games)* 100) / 100 || "0.0*";
        this.stealsPer = Math.trunc((this.steals / this.games)* 100) / 100 || "0.0*";
        this.blockPer = Math.trunc((this.blocks / this.games)* 100) / 100 || "0.0*";
        this.turnoversPer = Math.trunc((this.turnovers / this.games)* 100) / 100 || "0.0*";
        this.personalFoulsPer = Math.trunc((this.personalFouls / this.games)* 100) / 100 || "0.0*";
        this.pointsPer = Math.trunc((this.points / this.games)* 100) / 100 || "0.0*";
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
            favButton.textContent = "Choose";
            favButton.addEventListener("click", () => {
                saveToLocalStorage(this.playerName,this.position,this.team,this.season);
                favButton.textContent = "CHOOSED";
                favButton.style.backgroundColor = "black";
                favButton.style.color = "white";
            })
        
        //CREATE ALL OF LIST WITH THE ATTRIBUTES WE CHOOSE
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
                attributePosition.textContent = "Position: PG (1, Base)";
                break;
            case "SG":
                attributePosition.textContent = "Position: SG (2, Escolta)";
                break;
            case "SF":
                attributePosition.textContent = "Position: SF (3, Alero)";
                break;
            case "PF":
                attributePosition.textContent = "Position: PF (4, Ala-pívot)";
                break;
            case "C":
                attributePosition.textContent = "Position: C (5, Pívot)";
                break;
            default:
                attributePosition.textContent = "Position: None";
                break;
        }

        const attributeGames = document.createElement("li");
        attributeGames.classList.add("attribute", "games");
        attributeGames.textContent = "Total games: " + this.games + ", started: " + this.gamesStarted;

        const attributeMinutes = document.createElement("li");
        attributeMinutes.classList.add("attribute", "minutes");
        attributeMinutes.textContent = "Total minutes: " + this.minutesPg + ", per: " + this.minutesPer;

        const attributePoints = document.createElement("li");
        attributePoints.classList.add("attribute", "points");
        attributePoints.textContent = "Total points: " + this.points + " per: " + this.pointsPer;

        const attributeShotPercents = document.createElement("li");
        attributeShotPercents.classList.add("attribute", "shootPercents");
        attributeShotPercents.textContent = "2T: " + this.twoPercent + " 3T: " + this.threePercent + " FT: " + this.ftPercent;

        const attributeRebounds = document.createElement("li");
        attributeRebounds.classList.add("attribute", "rebounds");
        attributeRebounds.textContent = "Total: " + this.totalRbPer + " offensiveRb: " + this.offensiveRbPer + " defensiveRb: " + this.defensiveRbPer;

        const attributeAsBlocks = document.createElement("li");
        attributeAsBlocks.classList.add("attribute", "asblocks");
        attributeAsBlocks.textContent = "Assists: " + this.assistsPer + " Blocks: " + this.blockPer;

        const attributeStealTurn = document.createElement("li");
        attributeStealTurn.classList.add("attribute", "stealturn");
        attributeStealTurn.textContent = "Steals: " + this.stealsPer + " Turnovers: " + this.turnoversPer;

        
        //TO DO => RECOGER LOS EQUIPOS MAL PUESTOS PARA QUE SALGAN TODAS LAS IMAGENES
        const attributeTeam = document.createElement("li");
        
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
                list[i].games, list[i].gamesStarted, list[i].minutesPg,
                list[i].threePercent, list[i].twoPercent, list[i].ftPercent,
                list[i].offensiveRb, list[i].defensiveRb, list[i].totalRb, 
                list[i].assists, list[i].steals, list[i].blocks,
                list[i].turnovers, list[i].personalFouls, 
                list[i].points,
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
                list[i].games, list[i].gamesStarted, list[i].minutesPg,
                list[i].threePercent, list[i].twoPercent, list[i].ftPercent,
                list[i].offensiveRb, list[i].defensiveRb, list[i].totalRb, 
                list[i].assists, list[i].steals, list[i].blocks,
                list[i].turnovers, list[i].personalFouls, 
                list[i].points,
                list[i].team, list[i].season);
            if(player.position === positionSearched){
                this.addList(player);
            }
        }
    }
}


export {PlayerHTML, NbaHTML};