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

const banner = document.querySelector("#banner");
const bannerImg = document.querySelector(".banner-img");
const imgPath = "./assets/images/slideshow/";
const tagLine = document.querySelector(".tagline");
const sectionBanner = document.querySelector(".dots");
var position = 0;
bannerImg.src = imgPath + slides[position].image;
tagLine.innerHTML = slides[position].tagLine;


//Fonction slide
var slide = (direction) => {

	const directions = [
	"left", "right"
	]

	if (!directions.includes(direction)) {
		throw new Error("Left ou right sont uniquement autorisés.");
	}
	
	if (direction === 'left') {
		position = (position - 1 + slides.length) % slides.length;
	}

	if (direction === 'right') {
		position = (position + 1) % slides.length;
	}

	bannerImg.src = imgPath + slides[position].image;
	tagLine.innerHTML = slides[position].tagLine;
	dot();
}

//Flèche gauche
const flecheGauche = document.querySelector(".arrow_left");
flecheGauche .addEventListener("click", function () {
	try {
			slide('left');
		} catch(e) {
			console.log(e.message);
		}
});

//Flèche droite
const flecheDroite = document.querySelector(".arrow_right");
flecheDroite .addEventListener("click", function () {
	try {
			slide('right');
		} catch(e) {
			console.log(e.message);
		}
});

//Pagination
var dot = () => {
	
	sectionBanner.innerHTML = "";

	for (let i = 0; i < slides.length; i++) {
		const bannerDots = document.createElement("div");
		bannerDots.classList.add('dot');
		sectionBanner.appendChild(bannerDots);
		
		if (i == position) {
			bannerDots.classList.add('dot_selected');
		}
}
}

dot();