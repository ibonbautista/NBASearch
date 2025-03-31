import { Player,Nba } from "./player.js";

class PlayerHTML extends Player{

    constructor(id,playerName,position,age,games,minutesPlayed,per,tsPercent,threePAR,ftr,totalRBPercent,assistPercent,stealPercent,blockPercent,
                turnoverPercent,usagePercent,team,season){
        super(id,playerName,position,age,games,minutesPlayed,per,tsPercent,threePAR,ftr,totalRBPercent,assistPercent,stealPercent,blockPercent,
                turnoverPercent,usagePercent,team,season);
        this.article = null;
    }

    // CREACION DE ARTICLES QUE REPRESENTA A CADA JUGADOR
    createHTML(fatherElement) {
        this.article = document.createElement("article");
        this.article.classList.add("player", "card");

        fatherElement.appendChild(this.article);
    }

    // INICIALIZA CADA ELEMENTO PARA SU VISUALIZACION
    initialize(fatherElement) {
        this.createHTML(fatherElement);
        this.render();
    }

    // VISUALIZACION DE ELEMENTOS. Tarjetas de players
    render() {
        this.article.innerHTML = "";

        const title = document.createElement("h3");
        title.textContent = "Season: " + this.season;

        const attributeList = document.createElement("ul");
        attributeList.classList.add("player__attributes");

        const attributeAge = document.createElement("li");
        attributeAge.classList.add("attribute", "age");
        attributeAge.textContent = "Edad: " + this.age;

        const attributePosition = document.createElement("li");
        attributePosition.classList.add("attribute", "position");
        attributePosition.textContent = "Posición: " + this.position;

        const attributeGames = document.createElement("li");
        attributeGames.classList.add("attribute", "games");
        attributeGames.textContent = "Games: " + this.games;

        const attributeMinutes = document.createElement("li");
        attributeMinutes.classList.add("attribute", "minutes");
        attributeMinutes.textContent = "Minutes: " + this.minutesPlayed;

        const attributePoints = document.createElement("li");
        attributePoints.classList.add("attribute", "points");
        attributePoints.textContent = "Points per game: " + this.pointsPerGame;

        const attributeTeam = document.createElement("li");
        const teamImage = document.createElement("img");
        teamImage.setAttribute("src",`./assets/${this.team}.png`);
        attributeTeam.classList.add("attribute", "team");
        attributeTeam.append(teamImage);

        attributeList.append(attributeAge, attributePosition, attributeGames, attributeMinutes, attributePoints, attributeTeam);

        this.article.appendChild(title);
        this.article.appendChild(attributeList);
    }
}

class NbaHTML extends Nba{
    constructor(name,section){
        super(name);
        this.section = section;
    }

    addList(player){
        this.listOfPlayers.push(player);
        player.initialize(this.section);
    }
    addListFromArray(list){
        for(let i = 0; i < list.length; i++){
            const player = new PlayerHTML(
                list[i].id,
                list[i].playerName,
                list[i].position,
                list[i].age,
                list[i].games,
                list[i].minutesPlayed,
                list[i].pointsPerGame,
                list[i].throwPercent,
                list[i].threePercent,
                list[i].freePercent,
                list[i].reboundPercent,
                list[i].assistPercent,
                list[i].stealPercent,
                list[i].blockPercent,
                list[i].turnoverPercent,
                list[i].minutePercent,
                list[i].team,
                list[i].season);
            this.addList(player);
        }
    }
}

export {PlayerHTML, NbaHTML};