var btnSEARCH;
var bxSEARCH;
var rsltSection;

window.onload = function() {
    btnSEARCH = document.querySelector("button");
    btnSEARCH.addEventListener("click", BtnHandler);
    bxSEARCH = document.getElementById("hero");
    rsltSection = document.querySelector(".results");
}

function BtnHandler(e){
    e.preventDefault();
    fetch("superheroes.php", {
        method: 'POST',
        body: bxSEARCH.value.trim(),
        headers: {
            'Content-Type': 'text/plain'
        }
   })
   .then(response => response.text())
   .then(data => rsltSection.innerHTML = data);
}
