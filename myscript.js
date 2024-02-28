var restartButton = document.querySelector("#restart");
var squares = document.querySelectorAll("td");
var playerXScore = document.getElementById("playerX");
var playerOScore = document.getElementById("playerO");
var currentPlayer = 'X';
var scoreX = 0;
var scoreO = 0;

function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

function checkWinner() {
    // Check rows, columns, and diagonals for a winner
    for (var i = 0; i < 3; i++) {
        if (squares[i * 3].textContent !== '' &&
            squares[i * 3].textContent === squares[i * 3 + 1].textContent &&
            squares[i * 3].textContent === squares[i * 3 + 2].textContent) {
            return true;
        }
        if (squares[i].textContent !== '' &&
            squares[i].textContent === squares[i + 3].textContent &&
            squares[i].textContent === squares[i + 6].textContent) {
            return true;
        }
    }
    if (squares[0].textContent !== '' &&
        squares[0].textContent === squares[4].textContent &&
        squares[0].textContent === squares[8].textContent) {
        return true;
    }
    if (squares[2].textContent !== '' &&
        squares[2].textContent === squares[4].textContent &&
        squares[2].textContent === squares[6].textContent) {
        return true;
    }
    return false;
}

function updateScore() {
    if (currentPlayer === 'X') {
        scoreX++;
        playerXScore.textContent = "Player X: " + scoreX;
    } else {
        scoreO++;
        playerOScore.textContent = "Player O: " + scoreO;
    }
}

function handleCellClick() {
    if (this.textContent === '') {
        this.textContent = currentPlayer;

        if (checkWinner()) {
            alert("Player " + currentPlayer + " wins!");
            updateScore();
            clearBoard();
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    }
}

restartButton.addEventListener("click", function () {
    clearBoard();
    currentPlayer = 'X';
});

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', handleCellClick);
}
