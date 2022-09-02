// Oppgave 1
const removeBrn = document.getElementById("remove-btn");
function removeText () {
    const text = document.getElementById("remove");
    text.innerHTML = null;
}
removeBrn.addEventListener("click", removeText);

// Oppgave 2
const changeTextBtn = document.getElementById("change-btn");
function changeText () {
    const text = document.getElementById("change");
    text.innerHTML = "This is some new text."
}
changeTextBtn.addEventListener("click", changeText);

// Oppgave 3
const inputText = document.getElementById("input");
function printInputText (event) {
    const text = document.getElementById("input-text");
    text.innerHTML = inputText.value;
}
inputText.addEventListener("input", printInputText);

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const listBtn = document.getElementById("write-list");
function writeList () {
    const  ul = document.createElement("ul")
    ul.setAttribute("id", "ul");
    myList.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
    });
    listBtn.after(ul);

}
listBtn.addEventListener("click", writeList);

// Oppgave 5
const createBtn = document.getElementById("create");
function createNewElement () {
    const elementDropDown = document.getElementById("select");
    const selected = elementDropDown.value;
    const input = document.getElementById("text").value;

    const newElement = document.createElement(selected);
    newElement.innerHTML = input;
    const placeholder = document.getElementById("placeholder");
    placeholder.append(newElement);
}
createBtn.addEventListener("click", createNewElement);

// Oppgave 6
const removeLiBtn = document.getElementById("remove-li");
function removeLi () {
    const ul = document.getElementById("list");
    const li = ul.querySelector("li");
    li.remove();
}
removeLiBtn.addEventListener("click", removeLi);

// Oppgave 7
const shortInput = document.getElementById("name");
const orderBtn = document.getElementById("order");

function checkLenghtOfInput () {
    const inputLenght = String(shortInput.value).length;
    if (inputLenght>4) {
        orderBtn.disabled = true;
    } else {
        orderBtn.disabled = false;
    }
}
shortInput.addEventListener("input", checkLenghtOfInput);

// Oppgave 8
const colorBtn = document.getElementById("color");
const ulColor = document.getElementsByClassName("children");

function colorChildren () {
    const liChildren = ulColor[0].getElementsByTagName("li");
    for (let i=0; i<liChildren.length; i++) {
        if(i%2===0) {
            liChildren[i].style.border = '1px solid green';
        } else {
            liChildren[i].style.border = '1px solid pink';
        }
    }
    
}

colorBtn.addEventListener("click", colorChildren);
