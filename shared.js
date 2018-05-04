var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');
var ctaButton = document.querySelector('.main-nav__item--cta');

// console.dir(selectPlanButton);

for (i=0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener('click', function() {
		// modal.style.display = 'block';
		// backdrop.style.display = "block";
		modal.classList.add('open');
		backdrop.style.display = "block";
		setTimeout(function() {
			backdrop.classList.add('open');
		}, 10);		
	});
}
if (noButton) {
	noButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function() {
	// mobileNav.style.display	= 'none';
	mobileNav.classList.remove("open");
	closeModal();
});

function closeModal() {
	// modal.style.display = 'none';
	// backdrop.style.display = 'none';	
	if (modal) {
		modal.classList.remove('open');
	}
		backdrop.classList.remove('open');
		setTimeout(function() {
			backdrop.style.display = "none";
	}, 200); //has to match transition duration property
}

//side menu
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

//add event listener

toggleButton.addEventListener('click', function() {
	// mobileNav.style.display = 'block';
	// backdrop.style.display = 'block';
	mobileNav.classList.add('open');
	backdrop.style.display = "block";
	setTimeout(function() {
		backdrop.classList.add('open');
	}, 10);
});

//button animation listener

ctaButton.addEventListener('animationstart', function() {
	console.log('Animation started', event);
});

ctaButton.addEventListener('animationsend', function() {
	console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', function() {
	console.log('Animation iteration', event);
});
