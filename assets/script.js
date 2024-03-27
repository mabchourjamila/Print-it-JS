// Liste des slides
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

// constante pour déclarer le dossier des images du slider 
const dossierSlides = './assets/images/slideshow/';

// varibale pour déclarer le slide sélectionné par l'utilisateur
let selectedSlide = 0;

// créer les points dots
createDots();
// afficher le premier slide au chargement de la page
showSlide(selectedSlide);

// Evenement pour le click sur le bouton précédent
document.getElementById('prev').addEventListener("click", () => {
	showPrevious();
	console.log("click sur le bouton prev, slide affiché : " + selectedSlide);
});

// Evenement pour le click sur le bouton suivant
document.getElementById('next').addEventListener("click", () => {
	showNext();
	console.log("click sur le bouton next, slide affiché : " + selectedSlide);
});

// fonction pour Afficher le slide précédent 
function showPrevious() {
	// déclarer l'index de l'image précédent à afficher
	let prevIndex = selectedSlide - 1;
	// si on est au début de la liste des images on affiche alors la derniere image
	if (prevIndex < 0) prevIndex = slides.length - 1;
	// afficher le slide précédent
	showSlide(prevIndex);
}

// fonction pour Afficher le slide suivant 
function showNext() {
	// déclarer l'index de l'image suivante à afficher
	let nextIndex = selectedSlide + 1;
	// si on est à la fin de la liste des images on affiche alors la premiere image
	if (nextIndex > slides.length - 1) nextIndex = 0;
	// afficher le slide suivant
	showSlide(nextIndex);
}

// fonction pour Afficher le slide avec l'index
function showSlide(index) {
	// si le slide existe dans la liste des slides alors on l'affiche
	if (slides[index]) {
		// changer l'image
		let image = document.querySelector('#banner .banner-img');
		image.setAttribute('src', dossierSlides + slides[index].image);
		//changer le paragraphe
		let paragraph = document.querySelector('#banner p');
		paragraph.innerHTML = slides[index].tagLine;
	}
	// mettre à jour la nouvelle image affichée
	selectedSlide = index;
	// activer le point avec la class dot_selected et le suppr des autres
	showDots(index);
}

// fonction pour Afficher et mettre à jours les points
function showDots(index) {
	// charger le div des dots
	let dots = document.querySelectorAll('.dot');
	// parcourir la liste et supprimer la classe dot_selected
	dots.forEach(dot => {
		dot.classList.remove('dot_selected');
	});
	// ajouter la class dot_selected 
	dots[index].classList.add('dot_selected');
}

// fonction pour Créer les points 
function createDots() {
	// charger le div des dots
	let dots = document.querySelector("#banner .dots");
	// ajouter un dot par slide 
	for (let i = 0; i < slides.length; i++) {
		// créer la balise <span>
		let dot = document.createElement('span');
		// ajouter la classe dot à la balise <span>
		dot.classList.add('dot');
		// ajouter l'attribut data-index avec l'index du slide
		dot.setAttribute('data-index', i);
		// ajouter le point dans le bloc dots
		dots.appendChild(dot);
	}
}

// Evenements pour les points dots
document.querySelectorAll('.dot').forEach(dot => {
	dot.addEventListener('click', (event) => {
		// Obtenir l'index de la diapositive à partir de l'attribut data-index
		let index = parseInt(event.target.getAttribute('data-index'));
		console.log('click sur le point ' + index)
		// afficher le slide avec index
		showSlide(index);
	});
});