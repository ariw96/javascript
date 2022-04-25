const warriorsGames = [{
        awayTeam: {
            team: 'Golden State',
            points: 119,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 106,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 105,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 127,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 126,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 85,
            isWinner: false
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 92,
            isWinner: false
        },
        awayTeam: {
            team: 'Houston',
            points: 95,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 94,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 98,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 115,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 86,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 101,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 92,
            isWinner: false
        }
    }
]
const ulParent = document.createElement('ul');
for (let game of warriorsGames) {
    const { homeTeam, awayTeam } = game;
    const gameLi = document.createElement('li');
    const { team: homeTeamName, points: homeTeamPoints, isWinner: homeTeamIsWinner } = homeTeam;
    const { team: awayTeamName, points: awayTeamPoints, isWinner: awayTeamIsWinner } = awayTeam;
    const teamNames = `${awayTeamName} @ ${homeTeamName}`;
    let scoreLine = `${awayTeamPoints}- ${homeTeamPoints}`;
    if (homeTeamPoints > awayTeamPoints) {
        scoreLine = `${awayTeamPoints}- <b>${homeTeamPoints}</b>`;
    } else {
        scoreLine = `<b>${awayTeamPoints}</b>- ${homeTeamPoints}`;
    }
    gameLi.innerHTML = `${teamNames} ${scoreLine}   `;
    ulParent.appendChild(gameLi);

}
document.body.prepend(ulParent);