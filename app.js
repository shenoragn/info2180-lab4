var btnSEARCH;
var bxSEARCH;
var rsltSection;
var superheroes = <?php echo json_encode($superheroes); ?>

window.onload = function() {
    btnSEARCH = document.querySelector(".btn");
    btnSEARCH.addEventListener("click", BtnHandler);
    bxSEARCH = document.getElementById("hero");
    rsltSection = document.querySelector(".results");
}

function BtnHandler(e){
    e.preventDefault();
	if (bxSEARCH==null){
		fetch("superheroes.php", {
			method: 'POST',
			body: bxSEARCH.value.trim(),
			headers: {
				'Content-Type': 'text/plain'
			}
	   })
	   .then(response => response.text())
	   .then(data => rsltSection.innerHTML = data);
	}else if(<?php in_array(bxSEARCH.value.trim(), $superheroes) ?>){
		fetch ( "superheroes.php", {
			method: 'POST',
			body: bxSEARCH.value.trim(),
			headers: {
				'Content-Type': 'text/plain'
			}
	   }).then(data = rsltSection.innerHTML = superheroes[btnSEARCH.value.trim()];)
	}else {
		rsltSection.setAttribute("class", "notfound").innerHTML = "SUPERHERO NOT FOUND";
	}
}
