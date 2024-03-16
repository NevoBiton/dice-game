var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImages = "dice" + randomNumber1 + ".png";

var randomImagesSource = "images/" + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImages2 = "dice" + randomNumber2 + ".png";

var randomImagesSource2 = "images/" + randomDiceImages2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImagesSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player one won!"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player two won!"
} else {
  document.querySelector("h1").innerHTML = "Its a draw!"
};
