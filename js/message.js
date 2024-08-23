const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;

let autoslider = setTimeout(slideShow,5000);

display(index);

function slideShow (autoslider) {
	nextSlide();
	clearTimeout(autoslider);
	autoslider = setTimeout(slideShow,7000);
}
slideShow();

function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
	// slides[index].className = slides[index].className === "active" ? "inactive" : "active";
	// clearTimeout(autoslider);
	// autoslider = setTimeout(slideShow,5000);
}

function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}
function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

