var randumNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randumNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage1 ;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randumNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randumNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2 ;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randumNumber1 > randumNumber2) {
    document.querySelector("h1").innerHTML = "😍Player 1 wins" ;
}
else if (randumNumber1 < randumNumber2) {
      document.querySelector("h1").innerHTML = "😎Player 2 wins"
}
else {
    document.querySelector("h1").innerHTML = "Draw!😣"

}