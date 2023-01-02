function randomDice() {
    //para que el boton roll se resetee tengo que crear la funcion que la he llamado randomDice

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber2);

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")




    if (randomNumber1 > randomNumber2) {
        document.querySelector(".resultado").innerHTML = "Player 1 wins";
    }
    if (randomNumber1 < randomNumber2) {
        document.querySelector(".resultado").innerHTML = "Player 2 wins";
    }
    if (randomNumber2 === randomNumber1) {
        document.querySelector(".resultado").innerHTML = "Draw";
    }
}
//si fuera un ID en vez de un class, podria usar el getElementbyID
