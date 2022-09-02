// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
// - antall feil
// - posisjonen til bokstaven du skal skrive
// - ordet som skal vises
let nrOfMistakes = 0;
let letterPosition = 0;
let wordToBeShown = '';
let wordCounter = 0;
let typedWord = '';
// TODO: Lag en liste med ulike ord
const worldList = ["test","epple","kake","cccp","fisk"];

// TODO: Hent ut HTML #ider og knappen
const displayWordElement = document.getElementById("word");
const startBtn = document.querySelector("button");
const writtenWord = document.getElementById("letter");
const displayMistakes = document.getElementById("wrongs");

// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
function displayNewWord () {
    if (wordCounter <= worldList.length) {
        displayWordElement.innerHTML = wordToBeShown;
    } else {
        displayWordElement.innerHTML = "No more words, you are done!";
    }
}

// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
function changeWord () {
    wordToBeShown = worldList[wordCounter];
    wordCounter++;
    typedWord = '';
    letterPosition = 0;
    displayNewWord();
}

// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
function checkLetter (pressedKey) {
    // Gets the letter in the possision we need to check.
    if (pressedKey ==='Backspace') {
        typedWord = typedWord.slice(0, -1);
        letterPosition--;
        return false;
    } else {
        const displayLetter = wordToBeShown[letterPosition];
        if (displayLetter === pressedKey) {
            typedWord+=pressedKey;
            return true;
        } else {
            nrOfMistakes++;
            return false;
        }
    }
}

// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
function checkPosition () {
    const worldLenght = wordToBeShown.length;
    if (worldLenght === letterPosition) {
        return true;
    } else {
        return false;
    }
}

// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
function keyPress (e) {
    const pressedKey = e.key;
    if (checkLetter(pressedKey)) {
        letterPosition++;
        if (checkPosition()) {
            changeWord();
        }
    } 
    updateUI();
}

// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
function updateUI () {
    writtenWord.innerHTML = `${typedWord.slice(0,-1)}<u>${typedWord.slice(-1)}</u>`;
    displayMistakes.innerHTML = nrOfMistakes;
    displayWordElement.innerHTML = `<span class="green">${wordToBeShown.slice(
        0,
        letterPosition
      )}</span>${wordToBeShown.slice(letterPosition)}`;  
}

// TODO: Lytt til keyup på window
window.addEventListener("keyup", keyPress)

// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
function startGame () {
    startBtn.disabled = true;
    changeWord();
}
startBtn.addEventListener("click", startGame)
