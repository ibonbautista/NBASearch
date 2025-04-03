class Player {

    constructor(id,playerName,position,age,games,gamesStarted,minutesPg,threePercent,twoPercent,ftPercent,offensiveRb,defensiveRb,totalRb,assists,steals,
                blocks,turnovers,personalFouls,points,team,season){

        this.id = id || "Without ID";
        this.playerName = playerName || "Without Name";
        this.position = position || "Without Position";
        this.age = age || "Without Age";
        this.games = games || "0*";
        this.gamesStarted = gamesStarted || "0*";
        this.minutesPg = minutesPg || "0*";
            this.minutesPer = Math.trunc((this.minutesPg / this.games) * 100) / 100 || "0 minutes per game";
        this.threePercent = threePercent || "0.0*";
        this.twoPercent = twoPercent || "0.0*";
        this.ftPercent = ftPercent || "0.0*";
        this.offensiveRb = offensiveRb || "0*";
            this.offensiveRbPer = Math.trunc((this.offensiveRb / this.games) * 100) / 100 || "0.0*";
        this.defensiveRb = defensiveRb || "0*";
            this.defensiveRbPer = Math.trunc((this.defensiveRb / this.games) * 100) / 100 || "0.0*";
        this.totalRb = totalRb || "0*";
            this.totalRbPer = Math.trunc((this.totalRb / this.games)* 100) / 100 || "0.0*";
        this.assists = assists || "0*";
            this.assistsPer = Math.trunc((this.assists / this.games)* 100) / 100 || "0.0*";
        this.steals = steals || "0*"
            this.stealsPer = Math.trunc((this.steals / this.games)* 100) / 100 || "0.0*";
        this.blocks = blocks || "0*";
            this.blockPer = Math.trunc((this.blocks / this.games)* 100) / 100 || "0.0*";
        this.turnovers = turnovers || "0*";
            this.turnoversPer = Math.trunc((this.turnovers / this.games)* 100) / 100 || "0.0*";
        this.personalFouls = personalFouls || "0*";
            this.personalFoulsPer = Math.trunc((this.personalFouls / this.games)* 100) / 100 || "0.0*";
        this.points = points || "0*";
            this.pointsPer = Math.trunc((this.points / this.games)* 100) / 100 || "0.0*";
        this.team = team || "Without team";
        this.season = season || "Without season";
    }
}

class Nba {
    
    constructor(name){
        this.name = name;
        this.listOfPlayers = [];
    }

    addList(player){
        this.listOfPlayers.push(player);
    }
    addListFromArray(list){
        for(let i = 0; i < list.length; i++){
            const player = new Player(
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
}



export {Player, Nba};