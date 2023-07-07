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

//Flèche gauche
const flecheGauche = document.querySelector(".arrow_left");
flecheGauche .addEventListener("click", function () {
	position = position - 1;
	if(position < 0) {
		position = slides.length - 1;
	}
	bannerImg.src = imgPath + slides[position].image;
	tagLine.innerHTML = slides[position].tagLine;
	dot();
});

//Flèche droite
const flecheDroite = document.querySelector(".arrow_right");
flecheDroite .addEventListener("click", function () {
	position = position + 1;
	if(position > slides.length - 1) {
		position = 0;
	}
	bannerImg.src = imgPath + slides[position].image;
	tagLine.innerHTML = slides[position].tagLine;
	dot();
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