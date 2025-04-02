class Player {

    constructor(id,playerName,position,age,games,gamesStarted,minutesPg,threePercent,twoPercent,ftPercent,offensiveRb,defensiveRb,totalRb,assists,steals,
                blocks,turnovers,personalFouls,points,team,season){

        this.id = id || "Without ID";
        this.playerName = playerName || "Without Name";
        this.position = position || "Without Position";
        this.age = age || "Without Age";
        this.gamesPlayed = games || "0*";
        this.gamesStarted = gamesStarted || "0*";
        this.minutesPlayed = minutesPg || "0*";
            this.minutesPer = (this.minutesPlayed / this.gamesPlayed) || "0 minutes per game";
        this.threePercent = threePercent || "0.0*";
        this.twoPercent = twoPercent || "0.0*";
        this.freePercent = ftPercent || "0.0*";
        this.offReb = offensiveRb || "0*";
            this.offRebPer = (this.offReb / this.gamesPlayed) || "0.0*";
        this.defReb = defensiveRb || "0*";
            this.defRebPer = (this.defReb / this.gamesPlayed) || "0.0*";
        this.totalRb = totalRb || "0*";
            this.totalRbPer = (this.totalRb / this.gamesPlayed) || "0.0*";
        this.assists = assists || "0*";
            this.assistsPer = (this.assists / this.gamesPlayed) || "0.0*";
        this.steals = steals || "0*"
            this.stealsPer = (this.steals / this.gamesPlayed) || "0.0*";
        this.blocks = blocks || "0*";
            this.blockPer = (this.blocks / this.gamesPlayed) || "0.0*";
        this.turnovers = turnovers || "0*";
            this.turnoversPer = (this.turnovers / this.gamesPlayed) || "0.0*";
        this.personalFouls = personalFouls || "0*";
            this.personalFoulsPer = (this.personalFouls / this.gamesPlayed) || "0.0*";
        this.points = points || "0*";
            this.pointsPer = (this.points / this.gamesPlayed) || "0.0*";
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
}



export {Player, Nba};