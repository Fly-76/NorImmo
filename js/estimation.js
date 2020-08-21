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
    - remplir matérieau lorsqu on clique sur la popup 
    - empecher l'utilisateur d'entrer du texte dans estimation
*/
// ***********************************************************************************

// Global variable declaration
let btnEstimation = document.getElementById("btnEstimation");
let inputSurface = document.getElementsByTagName("input")[0];
let inputChambre = document.getElementsByTagName("input")[1];
let inputMateriau = document.getElementsByTagName("input")[2];
let inputEstimation = document.getElementsByTagName("input")[3];
let matériau = document.getElementsByClassName("dropdown-item");

// ***********************************************************************************
// Compute estimation
//
function estimation() {
    let rate = 0;
    switch (inputMateriau.value) {
        case "parpaing": rate = 1.2;
            break;
        case "brique": rate = 1.3;
            break; 
        case "bois": rate = 1.15;
    }

    let cout = 1000 * parseInt(inputSurface.value,10)
             + 10000 * parseInt(inputChambre.value,10);
    cout = cout * rate;
    console.log(cout);
}

// Set evt handler for estimation button
btnEstimation.addEventListener("click", estimation);

// Set evt listener for matériau dropbox
for(let i=0; i<matériau.length; i++) {
    matériau[i].addEventListener("click", function(){
        console.log(this);
        inputMateriau.value = this.innerText;
    })
}
