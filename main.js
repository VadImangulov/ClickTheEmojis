var isGameOver = true;
var score = 0;
var lives = 3;


function updateScore() {
    document.getElementById("score").innerHTML = "Score: " + score;
}

function updateLives() {
    document.getElementById("lives").innerHTML = "Lives: " + lives;
}


function startGame() {
    isGameOver = false;
    updateScore();
    updateLives();
    createNewDiv();

}

function createNewDiv() {
    var d = document.createElement('div');

    var size = 15;
    var offset = size * 1.5;

    d.style.width = size + 'px';
    d.style.height = size + 'px';
    d.style.position = 'absolute';

    d.style.top = getRandomInt(offset, window.innerHeight - offset) + "px";
    d.style.left = getRandomInt(offset, window.innerWidth - offset) + "px";

    d.innerHTML = "&#" + getRandomInt(0x1F600, 0x1F64F) +";";

    d.onclick = function () {
        if (isGameOver == false) {
            createNewDiv();
            score++;
            updateScore();

            d.onclick = function () {
                if (isGameOver == false) {
                    lives--;
                    updateLives();

                    if (lives == 0) {
                        alert("Game over you score is " + score);
                        isGameOver = true;
                    }
                }
            };
        }
    };

    document.body.appendChild(d);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}