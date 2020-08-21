document.getElementById("q1").style.display="none";
document.getElementById("q2").style.display="none";
document.getElementById("q3").style.display="none";

function showResult() {
    document.getElementById("q1").style.display = "block";
    console.log("q1");
    document.getElementById("q2").style.display = "block";
    console.log("q2");
    document.getElementById("q3").style.display = "block";
    console.log("q3");
}

function hiddeResult() {
    document.getElementById("q1").style.display = "none";
    console.log("q1");
    document.getElementById("q2").style.display = "none";
    console.log("q2");
    document.getElementById("q3").style.display = "none";
    console.log("q3");
}