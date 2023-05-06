
var randomNumber1 = Math.floor(Math.random() * 2) + 1; //1-2

var randomDiceImage = "toss" + randomNumber1 + ".jpg";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelector("img");

image1.setAttribute("src", randomImageSource);


if (randomNumber1 === 1) {
  document.querySelector("h1").innerHTML = "Heads";
}
else{
  document.querySelector("h1").innerHTML = "Tails";
}
