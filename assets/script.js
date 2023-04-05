const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const flecheGauche = document.querySelector(".arrow_left");

flecheGauche.addEventListener("click", function () {
 




   console.log("clique fleche de droite")
});




const flecheDroite = document.querySelector(".arrow_right");

flecheDroite.addEventListener("click", function () {





    
   console.log("clique fleche de droite")
});



const bulletPointZone = document.querySelector(".dots");

for (var i = 0; i < slides.length; i++) {

	let dot = document.createElement ("div"); //équivalent de contenu html :<div> </div>
	dot.classList.add ("dot");//equivalent de contenu html: <div class = "dot"> </div>
	dot.id = "dot" + i ;
	bulletPointZone.appendChild (dot);


  console.log(i);
}