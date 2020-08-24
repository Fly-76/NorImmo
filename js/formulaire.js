console.log("formulaire")
// ***********************************************************************************
/* formulaire
Le formulaire contient les éléments suivants :
• Nom : entre 2 et 50 caractères, pas de chiffres
• Prénom : entre 2 et 50 caractères, pas de chiffres
• Téléphone : un numéro valide au format français vérifié par regex
• Motif du contact (devis, information ou réclamation)
• Message : 400 caractères maximum, le nombre de caractères restant est affiché en temps réel

sous la zone de saisie. Il est également vérifié que le message ne contient pas les termes suivant: 
    sexe, sex, con, connard

Si la saisie utilisateur est valide, alors l’input passe au vert. Si ce n’est pas le cas il passe au rouge et
un message lui indique son erreur (géré en JS et non CSS).
*/

// ***********************************************************************************
// Constant declaration
const forbiden = ["connard$", "sexe$", "sex$", "con$", "connard$"];
const motifslist = ["devis", "information", "réclamation"];

// Global variable declaration
let btnSubmit = document.getElementById("btnSubmit");
let btnDropDown = document.getElementById("btnDropDown");
let motifs = document.getElementsByClassName("dropdown-item");

let nom = document.getElementsByTagName("input")[0];
let prenom = document.getElementsByTagName("input")[1];
let telephone = document.getElementsByTagName("input")[2];
let inputMotif = document.getElementsByTagName("input")[3];
let message = document.getElementsByTagName("textarea")[0];

let count = document.getElementById("count");
let counter = 400;

// Desactivate input: estimation, to avoid user action
inputMotif.disabled = true;

// ***********************************************************************************
// Set evt handler for submit button
//
function initField() {
    nom.value = "";
    prenom.value = "";
    telephone.value = "";
    inputMotif.value = "";
    message.value = "";
    count.innerText = `Il vous reste 400 caractères`;
    nom.style.color = "#6c757d";
    prenom.style.color = "#6c757d";
    telephone.style.color = "#6c757d";
    message.style.color = "#6c757d";
}

function checkForm() {
    if ( // Valid only if no red color
        nom.style.color == "#dc3545"
        || prenom.style.color == "#dc3545"
        || telephone.style.color == "#dc3545"
        || message.style.color == "#dc3545"
        ) {

    } else initField();
}

btnSubmit.addEventListener("click", checkForm);
//document.onload(initField());

// ***********************************************************************************
// Set evt listener for motifs dropbox
//
for(let i=0; i<motifs.length; i++) {
    motifs[i].addEventListener("click", function(){
        inputMotif.value = this.innerText;
    })
}

// ***********************************************************************************
// Set evt handler for input : nom
//
// Verify user input; only letter accepted, max 50 Characters
nom.addEventListener("keypress", function() {
    if (event.keyCode === 13) prenom.focus();
    if (!event.key.match(/[a-z éêëè]/i) || this.value.match(/(.){50}/)) event.preventDefault();
}, true);

// Verify user input; between 2 to 50 letters
nom.addEventListener("blur", function() {
    if (this.value.match(/(.){2}/) && !this.value.match(/(.){50}/)) {
        this.style.color = "#28a745";
    } else {
        this.style.color = "#dc3545";
    }
},true);

// ***********************************************************************************
// Set evt handler for input : prenom
//
// Verify user input; digit not allowed
prenom.addEventListener("keypress", function() {
    if (event.keyCode === 13) telephone.focus();
    if (!event.key.match(/[a-z éêëè]/i) || this.value.match(/(.){50}/)) event.preventDefault();
}, true);

// Verify user input; between 2 to 50 letters
prenom.addEventListener("blur", function() {
    if (this.value.match(/(.){2}/) && !this.value.match(/(.){50}/)) {
        this.style.color = "#28a745";
    } else {
        this.style.color = "#dc3545";
    }
},true);

// ***********************************************************************************
// Set evt handler for input : telephone
//
// Verify user input : only digit allowed, max 10 digits
telephone.addEventListener("keypress", function() {
    if (event.keyCode === 13) btnDropDown.focus();
    if (!event.key.match(/[0-9]/) || this.value.match(/(.){10}/)) event.preventDefault();
}, true);

// Verify user input; phone format 0YXXXXXXXX X-> digit 0 to 9, Y-> digit 1 to 9
telephone.addEventListener("blur", function() {
    
    if (this.value.match(/^0[1-9]{1}[0-9]{8}/g)) {
        this.style.color = "#28a745";
    } else {
        this.style.color = "#dc3545";
    }
},true);

// ***********************************************************************************
// Set evt handler for input : message
//
// Verify user input, max 400 char, forbiden words
message.addEventListener("input", function() {
   
    if (message.value.length>400)
        message.value = message.value.substr(0,400);
    // display number of characters left
    counter = 400 - message.value.length;
    count.innerText = `Il vous reste ${counter} caractères`;

    // check no forbiden word
    let words = this.value.split(' ');
    let regex = new RegExp("(\)(" + forbiden.join("|") + "/g)");

    let flagWarn = false;
    for (word of words) {
        if (word.match(regex)) flagWarn = true;
    }
    if (flagWarn) this.style.color = "#dc3545";
    else this.style.color = "#28a745"; 

    if (event.keyCode === 13) this.blur();
}, true);
