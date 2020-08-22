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

A faire :
    - controler les input; surface, chambre, matérieau
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

// Desactivate input: estimation, to avoid user action
inputEstimation.disabled = true;

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








    // 6c757d - secondary
    // dc3545 - danger
    // 28a745 - success
    //  /^(?=.*[a-z])(?=.*\d).{6,30}$/i


    // rgb(73, 80, 87)

    // this.style.color = "red";
    // #495057; default

    // #6c757d

    // 7f7f7f - black-50
    // 343a40 - dark
    // 212529 - body
    // 6c757d - muted

    // 6c757d - secondary
    // dc3545 - danger
    // 28a745 - success

    // 721c24
    // f8d7da


    // --blue: #007bff;
    // --indigo: #6610f2;
    // --purple: #6f42c1;
    // --pink: #e83e8c;
    // --red: #dc3545;
    // --orange: #fd7e14;
    // --yellow: #ffc107;
    // --green: #28a745;
    // --teal: #20c997;
    // --cyan: #17a2b8;
    // --white: #fff;
    // --gray: #6c757d;
    // --gray-dark: #343a40;
    // --primary: #007bff;
    // --secondary: #6c757d;
    // --success: #28a745;
    // --info: #17a2b8;
    // --warning: #ffc107;
    // --danger: #dc3545;
    // --light: #f8f9fa;
    // --dark: #343a40;    

//    console.log(window.getComputedStyle(this, null).getPropertyValue("color"));



    // // if (!this.className.match(/(?:^|\s)text-danger(?!\S)/))
    //     this.className += "text-danger";




// this.className += "text-danger";
// document.getElementById("monElement").className =
//    document.getElementById("maClasse").className.replace( /(?:^|\s)MyClass(?!\S)/g , "" )

// Cette expressions régulière permet de supprimer les occurrence d’un mot (maClasse) dans une liste de mots séparé par des espaces. En s’assurant de retirer les espaces. La même classe permet de savoir si une classe est déjà présente :

// if ( document.getElementById("monElement").className.match(/(?:^|\s)maClasse(?!\S)/) )







//if (event.key.match(/^[a-z0-9àéêè']+$/i)) {console.log("ok");}

//     if (event.keyCode === 13) {

// Commençons par la regex et admettons qu'elle permette de rechercher les numéros français, commençant par 0 ou +33 et possédant 9 chiffres sans compter le 0 ou +33. Ainsi, voici une écriture possible de celle-ci :

// (0|\+33)[1-9]( *[0-9]{2}){4}

// email Pour respecter la spécification HTML5 cf:developer.mozilla.org
//var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//<textarea  name=t2 id=t2 cols=25 rows=2 style="width:300px;"
// onkeypress="if(this.value.match(/\D/)) this.value=this.value.replace(/\D/g,'')"
// onkeyup   ="if(this.value.match(/\D/)) this.value=this.value.replace(/\D/g,'')"

