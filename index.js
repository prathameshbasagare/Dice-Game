var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomnumber2 = Math.floor(Math.random()*6)+1;

var txt1 = "images/dice"+randomnumber1+".png";
var txt2 = "images/dice"+randomnumber2+".png";


if(randomnumber1===randomnumber2){
    document.querySelector("h1").textContent = "It's a draw!!";
}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").textContent = "Player 2 wins!🚩";

}else {
    document.querySelector("h1").textContent = "🚩Player 1 wins!";
}


document.querySelector("img.img1").setAttribute("src",txt1);
document.querySelector("img.img2").setAttribute("src",txt2);





