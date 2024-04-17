let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let MsgContainer = document.querySelector(".msg-container ");
let Msg = document.querySelector("#msg");
let turn0 = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  MsgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked me");
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  Msg.innerHTML = `Congratulation! Winner is ${winner}`;
  MsgContainer.classList.remove("hide");
  disableBoxes();
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);

        showWinner(pos1Val);
      }
    }
  }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
