let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let gameCont = document.querySelector(".game-cont");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide");
    gameCont.classList.remove("hidden");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            box.classList.replace("box", "Obox");
            turnO = false;
            
        } else {
            box.classList.replace("Obox", "box");
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; // Disable box after click

        checkWinner();
        checkDraw();
        });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

function checkWinner() {
    for (let pattern of winPatterns) {
        let posVal = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal === posVal2 && posVal2 === posVal3 && posVal !== "") {
           msg.innerText = `!!!Congratulations, ${posVal} is the winner!!!`;
           console.log(msg.innerText);
           msgCont.classList.remove("hide");
           gameCont.classList.add("hidden");
           return;
        }
    }
};

const checkDraw = () => {
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        msg.innerText = "Game Draw!";
        msgCont.classList.remove("hide");
        gameCont.classList.add("hidden");
    }
};


newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

