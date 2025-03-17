let cells = document.querySelectorAll(".cell");
let roll = document.getElementById("status");
let rollX = true;
let rollO = false;
let gameState = true;

if(rollX){
    roll.innerHTML = "plyer x roll";
}else{
    roll.innerHTML = "player o roll";
}

cells.forEach(function (cell) {
  cell.addEventListener("click", handelClick);
});

function handelClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));
  insertSymbol(clickedCellIndex);
}

function insertSymbol(index) {
  if (cells[index].innerHTML !== "X" && cells[index].innerHTML !== "O" && gameState === true) {
    if (rollX) {
      cells[index].innerHTML = "X";
      cells[index].style.color = "red";
      [rollX, rollO] = [rollO, rollX];
      roll.innerHTML = "player o roll";
    } else {
      cells[index].innerHTML = "O";
      cells[index].style.color = "green";
      [rollO, rollX] = [rollX, rollO];
      roll.innerHTML = "player x roll";
    }
    checkWinner();
  }
}

function checkWinner(){
    if(cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML){
        // row check
        roll.innerHTML = "player " + cells[0].innerHTML + " win";
        gameState = false;
    }else if(cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML){
        // row check
        roll.innerHTML = "player " + cells[3].innerHTML + " win";
        gameState = false;
    }else if(cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML){
        // row check
        roll.innerHTML = "player " + cells[6].innerHTML + " win";
        gameState = false;
    } else if(cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML){
        // column check
        roll.innerHTML = "player " + cells[0].innerHTML + " win";
        gameState = false;
    }else if(cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML){
        // column check
        roll.innerHTML = "player " + cells[1].innerHTML + " win";
        gameState = false;
    }else if(cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML){
        // column check
        roll.innerHTML = "player " + cells[2].innerHTML + " win";
        gameState = false;
    }else if(cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML){
        //diagonal check
        roll.innerHTML = "player " + cells[0].innerHTML + " win";
        gameState = false;
    }else if(cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML){
        //diagonal check
        roll.innerHTML = "player " + cells[2].innerHTML + " win";
        gameState = false;
    }

    if(checkTie()){
        roll.innerHTML = "tie";
        gameState = false;
    }
}

function checkTie(){
    for(let i = 0; i < cells.length; i++){
        if(cells[i].innerHTML.match(/[1-9]/g)){
            return false;
        }
    }
    return true;
}

document.getElementById("resetBtn").onclick = function(){
    location.reload();
}
