function gameObject() { 
    return {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
                    "Alan Anderson": {
                        number: 0,
                        shoe: 16,
                        points: 22,
                        rebounds: 12,
                        assists: 12,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 1
                    },
                    "Reggie Evans" : {
                        number: 30,
                        shoe: 14,
                        points: 12,
                        rebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 12,
                        slamDunks: 7
                    },
                    "Brook Lopez": {
                        number: 11,
                        shoe: 17,
                        points: 17,
                        rebounds: 19,
                        assists: 10,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 15
                    },
                    "Mason Plumlee": {
                        number: 1,
                        shoe: 19,
                        points: 26,
                        rebounds: 12,
                        assists: 6,
                        steals: 3,
                        blocks: 8,
                        slamDunks: 5
                    },
                    "Jason Terry": {
                        number: 31,
                        shoe: 15,
                        points: 19,
                        rebounds: 2,
                        assists: 2,
                        steals: 4,
                        blocks: 11,
                        slamDunks: 1
                    }
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
                    "Jeff Adrien": {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2
                    },
                    "Bismak Biyombo": {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10
                    },
                    "DeSagna Diop": {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5
                    },
                    "Ben Gordon": {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0
                    },
                    "Brendan Haywood": {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12
                    }
        }
    }
    }
}
// console.log(gameObject());

/*// function homeTeam() {
//     return gameObject()['home']['teamName']
// };
// // console.log(homeTeam());
// function awayTeam() {
//     return gameObject()['away']['teamName']
// };
// console.log(awayTeam());

// function players() {
//     const game = gameObject();
//     const homePlayers = game.home.players;
//     const awayPlayers = game.away.players;
//     //return {...homePlayers, ...awayPlayers}
//     return Object.assign{{}, homePlayers, awayPlayers}
// };
// function numPointsScored() {
//     for(const playerName in players) { //iterate through players
//         if(playerName === playerInput) { //check to see if player matches function argument
//             return players()[playerName].points //return player's points
//         }
//     }
// }

// function numPointsScored(playerName) {
//     let game = gameObject()
//     for(const gameKey in game) { // iterate through game keys (home, away)
//       const teamObj = game[gameKey]
//       const playerObj = teamObj.players
//         for(const playerKey in playerObj) { // iterate through players
//             if(playerKey === playerName) { // check to see if player matches function argument
//                     return playerObj[playerKey].points // return the player's points
//             }
//         }
//     }
// }
// console.log(numPointsScored('Ben Gordon'))*/

const game = gameObject();
const player = playersObject();
const teams = Object.values(game); 
console.log('GAME', game)
console.log('PLAYER', player);
console.log('TEAMS', teams);

function playersObject() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

function homeTeam() {
    return game.home
};
// console.log('home team', homeTeam())
function awayTeam() {
    return game.away
};
// console.log('away team', awayTeam())



function numPointsScored(playerInput) {
    return player[playerInput].points
}
// console.log(numPointsScored('Ben Gordon'))
function shoeSize(playerInput) {
    return player[playerInput].shoe
}
// console.log(shoeSize('Ben Gordon'))

function teamColors(teamName) {
    return findByMyTeam(teamName).colors
};
// console.log('team colors', teamColors('Brooklyn Nets'))
function teamName() {
    return teams.map(team => team.teamName)
};
// console.log('team name', teamName())
function findByMyTeam(teamName) {
    return teams.find(team => teamName === team.teamName)
};
console.log('find by my team', findByMyTeam('Brooklyn Nets'))

function playerNumbers(teamName) {
    for (const team of teams) {
        if (team.teamName === teamName) {
          let stats = Object.values(team.players);
          return stats.map(stat => stat.number);
        }
    }
}
console.log('players numbers', playerNumbers('Brooklyn Nets'));
console.log('players numbers', playerNumbers('Charlotte Hornets'))

function playerStats(playerName) {
    return player[playerName]
}
console.log('player stat', playerStats('Ben Gordon'))