function diceSelecter() {
    var random = Math.random();
    diceRoll= Math.floor(random * 6);
    var arr= ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    return arr[diceRoll];
}
var randomNo1=diceSelecter();
var randomNo2=diceSelecter()
document.querySelector(".img1").setAttribute("src",randomNo1);
document.querySelector(".img2").setAttribute("src",randomNo2);

if (randomNo1>randomNo2) {
  document.querySelector(".container h1").innerHTML = "player 1 win";
} else {
  document.querySelector(".container h1").innerHTML = "player 2 win";
}
