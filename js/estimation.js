console.log("estimation");
// ***********************************************************************************
/* estimation
paramètres
    inputSurface : la surface en m²
    inputChambre : le nombre de chambres
    inputMateriau : le matériau de construction (parpaing, bois ou brique). 

Le coût est calculé de la manière suivante:
    le coût de base est de 1000€/m², 
    chaque chambre rajoute 10 000€ au coût total, 
    le matériau choisi rajoute un surcoût au coût total
        parpaing: 20%
        brique: 30%
        bois: 15%
Ainsi une maison de 50m2 avec deux chambres en brique est normalement estimée à: 91 000€
*/

// ***********************************************************************************
// Constant declaration
const matArray = ["parpaing", "bois", "brique"];

// Global variable declaration
let btnEstimation = document.getElementById("btnEstimation");
let inputSurface = document.getElementsByTagName("input")[0];
let inputChambre = document.getElementsByTagName("input")[1];
let inputMateriau = document.getElementsByTagName("input")[2];
let inputEstimation = document.getElementsByTagName("input")[3];
let btnDropDown = document.getElementById("btnDropDown");
let matériau = document.getElementsByClassName("dropdown-item");

// Desactivate input: estimation, materiau to avoid user action
inputEstimation.disabled = true;
inputMateriau.disabled = true;

// ***********************************************************************************
// Compute estimation
//
function estimation() {

    let surface = parseInt(inputSurface.value,10);
    let nbChambre = parseInt(inputChambre.value,10);

    if ( !(surface>10 && surface<999
        && nbChambre>1 && nbChambre<100
        && matArray.includes(inputMateriau.value)
        )) {
               
        inputEstimation.style.color = "#dc3545";    // text-danger 
        inputEstimation.value = "Veuillez vérifier vos informations"
        return;
    }

    let rate = 0;
    switch (inputMateriau.value) {
        case "parpaing": rate = 1.2;
            break;
        case "brique": rate = 1.3;
            break; 
        case "bois": rate = 1.15;
    }

    let cout = 1000 * surface + 10000 * nbChambre;
    cout = cout * rate;
    cout = Math.round(cout * 100) / 100;

    inputEstimation.style.color = "#6c757d";        // text-secondary
    inputEstimation.value = cout + " €"
}

// Set evt handler for estimation button
btnEstimation.addEventListener("click", estimation);

// ***********************************************************************************
// Set evt handler for input : surface
//
// Verify user input only digits
inputSurface.addEventListener("keypress", function() {
    // another way to do:
    // if(this.value.match(/\D/)) this.value=this.value.replace(/\D/g,'');
    if (event.keyCode === 13) inputChambre.focus();
    if (event.key.match(/\D/)) event.preventDefault();
}, true);

// Verify min 2 digits , max 3 digits
inputSurface.addEventListener("blur", function() {
    if (this.value.match(/^[0-9]{2,3}$/)) this.style.color = "#6c757d";     // text-danger
    else this.style.color = "#dc3545";                                      // text-secondary
},true);

// ***********************************************************************************
// Set evt handler for input : chambre
//
// Verify user input only digits
inputChambre.addEventListener("keypress", function() {
    if (event.keyCode === 13) btnDropDown.focus();
    if (event.key.match(/\D/)) event.preventDefault();
}, true);

// Verify min 1 digits , max 2 digits
inputChambre.addEventListener("blur", function() {
    // if (this.value.match(/^[0-9]{1,2}$/)) this.style.color = "#6c757d";     // text-danger
    // else this.style.color = "#dc3545";                                      // text-secondary
},true);

// ***********************************************************************************
// Set evt handler for input : materiau
//
inputMateriau.addEventListener("keydown", function(event) {
    if (!event.key.match(/[a-z]/i)) event.preventDefault();
}, true);

// Verify input in parpaing,bois,brique
inputMateriau.addEventListener("blur", function() {

    let regex = new RegExp("(\)(" + matArray.join("|") + "/g)");

    if (this.value.match(regex)) this.style.color = "#6c757d";     // text-danger
    else this.style.color = "#dc3545";  // text-secondary
},true);

// ***********************************************************************************
// Set evt listener for matériau dropbox
//
for(let i=0; i<matériau.length; i++) {
    matériau[i].addEventListener("click", function(){
        inputMateriau.value = this.innerText;
    })
}
