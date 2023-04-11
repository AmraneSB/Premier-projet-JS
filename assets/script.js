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



var z = 0;

const bulletPointZone = document.querySelector(".dots");


for (var i = 0; i < slides.length; i++) {

	let dot = document.createElement ("div"); //équivalent de contenu html :<div> </div>
	dot.classList.add ("dot");//equivalent de contenu html: <div class = "dot"> </div>
	dot.id = "dot" + i ;
	bulletPointZone.appendChild (dot);//rajout de dot dans le contenu html 

	
  	console.log(i);



}



var whitePoint = document.getElementById("dot"+[z]);


	whitePoint.classList.add ("dot_selected");




const flecheDroite = document.querySelector(".arrow_right");

   flecheDroite.addEventListener("click", function () {
	 if (z < 3 ) {
	var whitePoint = document.getElementById("dot"+[z]);
	whitePoint.classList.remove ("dot_selected");
	z++
	var whitePoint = document.getElementById("dot"+[z]);
	whitePoint.classList.add ("dot_selected");

	document.querySelector(".banner-img").src = "./assets/images/slideshow/"+ slides[z].image;
	
	document.querySelector("p").innerHTML = "<p>"+""+"</p>";
	document.querySelector("p").innerHTML ="<p>"+ slides[z].tagLine +"</p>";
	
   
	

}
else {
	var whitePoint = document.getElementById("dot"+[z]);
	whitePoint.classList.remove ("dot_selected");
	z = 0;
	var whitePoint = document.getElementById("dot"+[z]);
	whitePoint.classList.add ("dot_selected");

	document.querySelector(".banner-img").src = "./assets/images/slideshow/"+ slides[z].image;
	

	document.querySelector("p").innerHTML = "<p>"+""+"</p>";
	document.querySelector("p").innerHTML ="<p>"+ slides[z].tagLine +"</p>";
}

    
   console.log("clique fleche de droite")
});









const flecheGauche = document.querySelector(".arrow_left");

	flecheGauche.addEventListener("click", function () {
 if (z > 0 ) {
	var whitePoint = document.getElementById("dot"+[z]);
	whitePoint.classList.remove ("dot_selected");
	z--
	var whitePoint = document.getElementById("dot"+[z]);
	whitePoint.classList.add ("dot_selected");
	
	document.querySelector(".banner-img").src = "./assets/images/slideshow/"+ slides[z].image;
	

	document.querySelector("p").innerHTML = "<p>"+""+"</p>";
	document.querySelector("p").innerHTML ="<p>"+ slides[z].tagLine +"</p>";
   
}
else {
	var whitePoint = document.getElementById("dot"+[z]);
	whitePoint.classList.remove ("dot_selected");
	z = 3 ;
	var whitePoint = document.getElementById("dot"+[z]);
	whitePoint.classList.add ("dot_selected");
	
	document.querySelector(".banner-img").src = "./assets/images/slideshow/"+ slides[z].image;
	
	
	document.querySelector("p").innerHTML = "<p>"+""+"</p>";
	document.querySelector("p").innerHTML ="<p>"+ slides[z].tagLine +"</p>";
}


   console.log("clique fleche de gauche")



});


