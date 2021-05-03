var randomNumber1 = (((Math.floor((Math.random())*6)))+1);
var img;
if (randomNumber1 == "1") {
  img = "images/dice1.png";
}
else if (randomNumber1=="2") {
  img = "images/dice2.png";
}
else if (randomNumber1=="3") {
  img = "images/dice3.png";
}
else if (randomNumber1=="4") {
  img = "images/dice4.png";
}
else if (randomNumber1=="5") {
  img = "images/dice5.png";
}
else if (randomNumber1=="6") {
  img = "images/dice6.png";
}
document.querySelector(".img1").setAttribute("src", img);

var randomNumber1 = (((Math.floor((Math.random())*6)))+1);
var img;
if (randomNumber1 == "1") {
  img = "images/dice1.png";
}
else if (randomNumber1=="2") {
  img = "images/dice2.png";
}
else if (randomNumber1=="3") {
  img = "images/dice3.png";
}
else if (randomNumber1=="4") {
  img = "images/dice4.png";
}
else if (randomNumber1=="5") {
  img = "images/dice5.png";
}
else if (randomNumber1=="6") {
  img = "images/dice6.png";
}
document.querySelector(".img1").setAttribute("src", img);

var randomNumber2 = (((Math.floor((Math.random())*6)))+1);
var imgs;
if (randomNumber2 == "1") {
  imgs = "images/dice1.png";
}
else if (randomNumber2=="2") {
  imgs = "images/dice2.png";
}
else if (randomNumber2=="3") {
  imgs = "images/dice3.png";
}
else if (randomNumber2=="4") {
  imgs = "images/dice4.png";
}
else if (randomNumber2=="5") {
  imgs = "images/dice5.png";
}
else if (randomNumber2=="6") {
  imgs = "images/dice6.png";
}
document.querySelector(".img2").setAttribute("src", imgs);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 wins!" ;
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 wins!" ;
}
if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").textContent = "Its a Draw!" ;
}
