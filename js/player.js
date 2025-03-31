class Player {

    constructor(id,playerName,position,age,games,minutesPlayed,per,tsPercent,threePAR,ftr,totalRBPercent,assistPercent,stealPercent,blockPercent,
                turnoverPercent,usagePercent,team,season){

        this.id = id || "Sin ID";
        this.playerName = playerName || "Sin Nombre";
        this.position = position || "Sin posición"
        this.age = age || "Sin edad";
        this.games = games || "Sin partidos";
        this.minutesPlayed = minutesPlayed || "Sin minutos jugados";
        this.pointsPerGame = per || "Sin puntos por partido";
        this.throwPercent = tsPercent || "Sin sin tiros por partido";
        this.threePercent = threePAR || "Sin triples por partido";
        this.freePercent = ftr || "Sin tiros libres por partido";
        this.reboundPercent = totalRBPercent || "Sin rebotes por partido";
        this.assistPercent = assistPercent || "Sin asistencias por partido";
        this.stealPercent = stealPercent || "Sin robos por partido";
        this.blockPercent = blockPercent || "Sin tapones por partido";
        this.turnoverPercent = turnoverPercent || "Sin pérdidas por partido";
        this.minutePercent = usagePercent || "Sin minutos por partido";
        this.team = team || "Sin equipo";
        this.season = season || "Sin temporada";
    }
}

class Nba {
    
    constructor(nombre){
        this.nombre = nombre;
        this.listOfPlayers = [];
    }

    addList(player){
        this.listOfPlayers.push(player);
    }
    addListFromArray(list){
        for(let i = 0; i < list.length; i++){
            const player = new Player(
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
                list[i].team);
            this.addList(player);
        }
    }
}


export {Player, Nba};