let ticTacToe = (() => {

    let n = 3;
    let playerTurn = 'x';
    let gameArr = []; //[0, 0, 0, 0, 0, 0, 0, 0, 0];
    let index = 0;
    let moves = 0;

    for (i = 1; i < 9; i++) {
        gameArr[i] = i;
    }

    console.log(gameArr);
    console.log(playerTurn + " in iife")

    let board = document.createElement('table');

    for (let i = 0; i < n; i++) {
        let row = document.createElement('tr');
        board.appendChild(row);
        for (let i = 0; i < n; i++) {
            let cell = document.createElement('td');
            cell.innerHTML = '&nbsp;';
            cell.id = index;
            index++;
            row.appendChild(cell);
        }
    }

    let checkWinner = () => {
        let gameEnded = false;
        if(moves >= 9) {
            gameEnded = true;
            alert('its a draw!');
        }

        for (let i = 0; i < 9; i += 3) {
            if (gameArr[i] == gameArr[i + 1] && gameArr[i + 1] == gameArr[i + 2]) {
                gameEnded = true;
            }
        }
        for (let i = 0; i < n; i++) {
            if (gameArr[i] == gameArr[i + 3] && gameArr[i + 3] == gameArr[i + 6]) {
                gameEnded = true;
            }
        }
        if (gameArr[0] == gameArr[4] && gameArr[4] == gameArr[8]) {
            gameEnded = true;
        }
        if (gameArr[2] == gameArr[4] && gameArr[4] == gameArr[6]) {
            gameEnded = true;
        }

        return gameEnded;
    }

    document.body.appendChild(board);

    return { gameArr, playerTurn, checkWinner, moves };
})();

let tds = document.querySelectorAll('td');

tds.forEach(td => {
    td.addEventListener('click', e => {
        if (!ticTacToe.checkWinner() && ticTacToe.moves < 9) {
            if (e.target.innerHTML == '&nbsp;') {
                if (ticTacToe.playerTurn == '0') {
                    e.target.textContent = '0';
                    ticTacToe.gameArr[e.target.id] = e.target.textContent;
                    if (!ticTacToe.checkWinner()) {
                        ticTacToe.playerTurn = 'x';
                        console.log(ticTacToe.playerTurn);
                    }
                } else {
                    e.target.textContent = 'x';
                    ticTacToe.gameArr[e.target.id] = e.target.textContent;
                    if (!ticTacToe.checkWinner()) {
                        ticTacToe.playerTurn = '0';
                        console.log(ticTacToe.playerTurn);
                    }
                }
                if (ticTacToe.checkWinner()) {
                    alert(ticTacToe.playerTurn + " won!");
                }
                console.log(ticTacToe.gameArr);

            } else {
                return;
            }
            ticTacToe.moves++;
            console.log(ticTacToe.moves);
        }
    })
});

let newGameBtn = document.createElement('button');
newGameBtn.addEventListener('click', () => {
    location.reload();
})
newGameBtn.innerHTML = 'New game';
document.body.appendChild(newGameBtn);