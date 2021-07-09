var randomNumber = 6;

var randomizer1 = Math.ceil(Math.random()*randomNumber);
var randomizer2 = Math.ceil(Math.random()*randomNumber);

document.querySelector(".img1").setAttribute("src","images/dice"+randomizer1+".png");

document.querySelector(".img2").setAttribute("src","images/dice"+randomizer2+".png");


if(randomizer1>randomizer2){
document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomizer2>randomizer1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw";
}