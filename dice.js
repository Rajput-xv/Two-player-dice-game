/* 
var p1=Math.floor((Math.random()*6 +1));
var p2=Math.floor((Math.random()*6 +1));

var img1="images/dice"+p1+".png";
var img2="images/dice"+p2+".png";

document.querySelector("img")[0].setAttributes("src", img1);
document.querySelector("img")[1].setAttributes("src", img2);

if(p1>p2){
    document.querySelector("h1").textContent="Player 1 Wins !!!";
}
else if (p1===p2){
    document.querySelector("h1").textContent="Draw !!!";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins !!!";
}
*/ 









var p1=Math.floor((Math.random()*6 +1));
var p2=Math.floor((Math.random()*6 +1));


if(p1>p2){
    document.querySelector("h1").textContent="Player 1 Wins !!!";
}
else if (p1===p2){
    document.querySelector("h1").textContent="Draw !!!";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins !!!";
}


if(p1===1 ){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(p1===2 ){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(p1===3 || p2===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(p1===4 ){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(p1===5 ){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    
}
else if(p1===6 ){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

if(p2===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(p2===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(p2===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(p2===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(p2===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else if(p2===6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
