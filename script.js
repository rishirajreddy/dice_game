//Holding Scores of Player 1 and Player 2
var score_1 = 0;
var score_2 = 0;

//Take input from User via alert
var user = prompt("Enter Your name to play:");
var txt;
if(user === null || user === "") {
    txt = 'Player';
}
else {
    txt = user;
}

document.querySelector("#player_name").innerHTML = txt;
document.querySelector("#player_name_score").innerHTML = txt+":";

//Firing onclick event to set images and call getWinner function  
document.querySelector("#play").addEventListener("click" , () => {
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomImage1 = "dice_"+randomNumber1+".png";
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomImage2 = "dice_"+randomNumber2+".png";
    document.querySelector("#num-1").setAttribute("src",randomImage1);
    document.querySelector("#num-2").setAttribute("src",randomImage2);
    getWinner(randomNumber1,randomNumber2);
}) 
document.querySelector("#reset").onclick = () => {
    document.getElementById("p1").innerHTML = 0;
    document.getElementById("p2").innerHTML = 0;
    document.querySelector("#num-1").setAttribute("src","dice_6.png");
    document.querySelector("#num-2").setAttribute("src","dice_6.png");
    document.querySelector("#winner").innerHTML = 'GoodLuck  Mate!!';
}
//getWinner Function
function getWinner(rand1,rand2) {
    if(rand1 === rand2){
        document.querySelector("#winner").innerHTML = "It's a Tie!!";
    }
    
    else if(rand1 > rand2) {
        score_1+=1;
        document.getElementById("p1").innerHTML = ` ${score_1}`; 
        document.querySelector("#winner").innerHTML = `${txt} Wins!!`;
    }
    
    else {
        score_2++;
        document.getElementById("p2").innerHTML = ` ${score_2}`;
        document.querySelector("#winner").innerHTML = "Computer Wins";
    }
}

