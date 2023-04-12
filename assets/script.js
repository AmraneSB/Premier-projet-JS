const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function moveSlide(oldZ, z) {

	let whitePoint = document.getElementById("dot" + [oldZ]);
	whitePoint.classList.remove("dot_selected");
	whitePoint = document.getElementById("dot" + [z]);
	whitePoint.classList.add("dot_selected");

	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[z].image;

	document.querySelector("p").innerHTML = "<p>" + "" + "</p>";
	document.querySelector("p").innerHTML = "<p>" + slides[z].tagLine + "</p>";

}

var z = 0;
const bulletPointZone = document.querySelector(".dots");


for (var i = 0; i < slides.length; i++) {

	let dot = document.createElement("div"); //équivalent de contenu html :<div> </div>
	dot.classList.add("dot");//equivalent de contenu html: <div class = "dot"> </div>
	dot.id = "dot" + i;
	bulletPointZone.appendChild(dot);//rajout de dot dans le contenu html 
}

var whitePoint = document.getElementById("dot" + [z]);
whitePoint.classList.add("dot_selected");

const flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", function () {
	let oldZ = z;
	//z = z < 3 ? z++ : 0 ; condition ternaire 
	if (z < 3) {
		z++;
	}
	else {
		z = 0;
	}
	moveSlide(oldZ, z);
	console.log("clique fleche de droite")
});

const flecheGauche = document.querySelector(".arrow_left");
flecheGauche.addEventListener("click", function () {
	let oldZ = z;
	if (z > 0) {
		z--;
	}
	else {
		z = 3;
	}
	moveSlide(oldZ, z);
	console.log("clique fleche de gauche")
});


/* function calcul(a,b) {
return (a + b) /2;

}
*/