import { users } from './util.js';

// TODO: Hent HTML #id med getElementById
const searchName = document.getElementById("name");
const searchAge = document.getElementById("age");
const serachBtn = document.getElementById("filter");
const usersUl = document.getElementById("users");
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. 
//       Du kan bruke users importert over for å hente en liste med 10 brukere
function createTable (users) {
    usersUl.innerHTML = null;
    const descriptiveLi = document.createElement("li");
    descriptiveLi.innerHTML += "<span>ID</span><span>Name</span><span>Age</span>";
    usersUl.append(descriptiveLi);
    for (const user of users) {
        const userLi = document.createElement("li");
        userLi.innerHTML += `<p>${user.id}</p> <p>${user.name}</p> <p>${user.age}</p>`; 
        usersUl.append(userLi);
    }
}
createTable(users);
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
function handleSearch() {
    const serchedName = document.getElementById("name").value;
    const userExist = users.find((user) => user.name ===serchedName);
    if (userExist) {
        const fondUser = users.filter((user) => user.name === serchedName);
        createTable(fondUser);
    } else {
        createTable(users);
    }
}
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
function handleFilter () {
    const filterAge = Number(document.getElementById("age").value);
    const userExist = users.find((user) => user.age > filterAge);
    if (userExist) {
        const fondUser = users.filter((user) => user.age > filterAge);
        createTable(fondUser);
    } else {
        createTable(users);
    }
}
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
const serchedInput = document.getElementById("name");
serchedInput.addEventListener("keyup", handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
const filterBtn = document.getElementById("filter");
filterBtn.addEventListener("click", handleFilter);
