// TODO: Bruk getElementById til å hente HTML-elementene med #id
const guessUl = document.getElementById("guess");
const numbersUl = document.getElementById("numbers");
// TODO: Bruk querySelector til å hente knappen
const button = document.querySelector("button");
// TODO: Lag en liste med tallene som skal sorteres
const numbers = [66,33,99,85];
// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
function displayNumbers () {
    for (const number of numbers) {
        numbersUl.innerHTML += `<li>${number}</li>`
    }
}
// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
function displayInputBox () {
    for (const number of numbers) {
        guessUl.innerHTML += `<li><input type="number"></li>`
    }
}
// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
function getInput () {
    const inputs = document.querySelectorAll("input");
    const numbers = numbersUl.querySelectorAll("li");
    const guess = [];
    let index;
    let number;
    let i = 0;
    for (const input of inputs) {
        index = Number(input.value-1);
        number = numbers[i].innerHTML;
        guess[index] = number;
        i++;
        debugger
    }
    return guess;
}
// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
function checkNumberSeq () {
    const guess = getInput();
    let isCorrect = numbers.sort().join('') === guess.join('');
    debugger
    if (isCorrect) {
        alert("You did it!");
    }
}
// TODO: Lag en funksjon som "lager UI" --Nødvendig?
function createUI () {
    displayNumbers();
    displayInputBox();
}
// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
button.addEventListener("click", checkNumberSeq);
createUI();