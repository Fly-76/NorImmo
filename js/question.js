//automatiquely hidde answer
let question1 = document.getElementById("question1");
question1.style.display = "none";

let question2 = document.getElementById("question2");
question2.style.display = "none";

let question3 = document.getElementById("question3");
question3.style.display = "none";

//show and hidde answer

function showResult1() { 
    if (question1.style.display === "none") {
        question1.style.display = "block";
    } else {
        question1.style.display = "none";
    }
} 

function showResult2() { 
    if (question2.style.display === "none") {
        question2.style.display = "block";
    } else {
        question2.style.display = "none";
    }
} 

function showResult3() { 
    if (question3.style.display === "none") {
        question3.style.display = "block";
    } else {
        question3.style.display = "none";
    }
} 