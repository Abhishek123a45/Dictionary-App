

function showHam(){
    let hamburger = document.getElementById("hamburger");

    if (hamburger.style.display === "none" || hamburger.style.display === "") {
        hamburger.style.display = "flex";
        hamburger.classList.add('open');
    }

    else if(hamburger.style.display === "flex"){
        hamburger.style.display = "none";
        hamburger.classList.remove('open');
    }
}
