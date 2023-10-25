const pltext = document.querySelector("#pltext");
const comtext = document.querySelector("#comtext");
const retext = document.querySelector("#retext");
const wins = document.querySelector("#wins");
const comwin = document.querySelector("#comwin");
const ties = document.querySelector("#ties");
const choicebutton = document.querySelectorAll(".choice");

let play;
let com;
let re;

choicebutton.forEach(button => button.addEventListener("click", () => {
   play = button.textContent;
    comTurn();
    pltext.textContent = `Player: ${play}`;
   comtext.textContent = `Computer: ${com}`;
  retext.textContent =`Result: ${checkWinner()}`;
}));

let reset=()=>{
    document.getElementById("pltext").innerHTML = `Player:`;
    document.getElementById("comtext").innerHTML = `Computer:`;
    document.getElementById("retext").innerHTML = `Result:`;
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("comwin").innerHTML = 0;
    document.getElementById("ties").innerHTML = 0;
}

function comTurn(){
   
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            com = "✊";
            break;
            case 2:
                com = "✋";
                break;
                case 3:
                    com = "✌️";
                    break;
    }
}

function checkWinner(){
    if(play == com){
    ties.innerHTML = parseInt(ties.innerHTML) + 1;
    return "Is a Tie, Try Again!!!"
}

else if (com == "✊" && play == "✋"){
    wins.innerHTML = parseInt(wins.innerHTML) + 1;
   return "You Win!!!"
}

else if (com == "✋" && play == "✊"){
    comwin.innerHTML = parseInt(comwin.innerHTML) + 1;
     return "You Lose!!!"
}

else if (com == "✋" &&  play == "✌️"){
   
    wins.innerHTML = parseInt(wins.innerHTML) + 1;
    return "You Win!!!" 
}

else if (com == "✌️" && play == "✋"){
    comwin.innerHTML = parseInt(comwin.innerHTML) + 1;
     return "You Lose!!!"
}

else if (com == "✌️" && play == "✊"){
    
    wins.innerHTML = parseInt(wins.innerHTML) + 1;
    return "You Win!!!"
}

else if  (com == "✊" && play == "✌️"){
comwin.innerHTML = parseInt(comwin.innerHTML) + 1;
 return "You Lose!!!"
}
}
