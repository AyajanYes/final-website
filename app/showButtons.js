var brandsBlock = document.querySelector('.main__repair-brands');
var equipmentsBlock = document.querySelector('.main__type-equipments');
var hiddenBrands = brandsBlock.querySelectorAll('.hidden');
var hiddenEquipments = equipmentsBlock.querySelectorAll('.hidden');

var showButton1 = document.querySelector('.show-more1');
var showButton2 = document.querySelector('.show-more2');
var hideButton1 = document.querySelector('.hide1');
var hideButton2 = document.querySelector('.hide2');

const breakp = window.matchMedia( '(min-width: 760px)' );

const breakChecker = function() {
    if ( breakp.matches === true ) {
        showButton1.style.display = 'block';
        showButton2.style.display = 'block';
        hideButton1.style.display = 'none';
        hideButton2.style.display = 'none';
    } else if ( breakp.matches === false ) {
        showButton1.style.display = 'none';
        showButton2.style.display = 'none';
        hideButton1.style.display = 'none';
        hideButton2.style.display = 'none';
    }
};


showButton1.addEventListener('click', function(evt) {
    evt.preventDefault();
    for(var i = 0; i < hiddenBrands.length; i++) {
        hiddenBrands[i].classList.remove('hidden');
    }
    showButton1.style.display = 'none';
    hideButton1.style.display = 'block';
});

showButton2.addEventListener('click', function(evt) {
    evt.preventDefault();
    for(var i = 0; i < hiddenEquipments.length; i++) {
        hiddenEquipments[i].classList.remove('hidden');
    }
    showButton2.style.display = 'none';
    hideButton2.style.display = 'block';
});

hideButton1.addEventListener('click', function(evt) {
    evt.preventDefault();
    for(var i = 0; i < hiddenBrands.length; i++) {
        hiddenBrands[i].classList.add('hidden');
    }
    showButton1.style.display = 'block';
    hideButton1.style.display = 'none';
});

hideButton2.addEventListener('click', function(evt) {
    evt.preventDefault();
    for(var i = 0; i < hiddenEquipments.length; i++) {
        hiddenEquipments[i].classList.add('hidden');
    }
    showButton2.style.display = 'block';
    hideButton2.style.display = 'none';
});

var informationText = document.querySelector('.main__text');
var hiddenInformation = informationText.querySelector('.hidden');
var showButton3 = document.querySelector('.show-more-button');

showButton3.addEventListener('click', function(evt) {
    evt.preventDefault();
    hiddenInformation.classList.remove('hidden');
});

breakp.addListener(breakChecker);
breakChecker();

