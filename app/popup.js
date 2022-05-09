var burgerPage = document.querySelector('.burger-menu');
var burgerMenu = document.querySelector('.burgermenu-button');
var headerClose = document.querySelector('.burger-menu__header-close');

headerClose.addEventListener('click', function(event) {
    event.preventDefault();
    burgerPage.style.display = 'none';
});

burgerMenu.addEventListener('click', function(event) {
    event.preventDefault();
    burgerPage.style.display = 'block';
});

burgerPage.addEventListener('click', function() {
    burgerPage.style.display = 'none';
});

var messagePage = document.querySelector('.popup-feedback');
var messageButton = document.querySelector('.header__chat-button');
var messageButton2 = document.querySelector('.burger-menu__chat-button');
var messageClose = document.querySelector('.modal-message-close');

messageClose.addEventListener('click', function(event) {
    event.preventDefault();
    messagePage.style.display = 'none';
});

messageButton.addEventListener('click', function(event) {
    event.preventDefault();
    messagePage.style.display = 'block';
});

messageButton2.addEventListener('click', function(event) {
    event.preventDefault();
    messagePage.style.display = 'block';
    burgerPage.style.display = 'none';
});

messagePage.addEventListener('click', function() {
    messagePage.style.display = 'none';
});

var callPage = document.querySelector('.popup-call');
var callButton = document.querySelector('.header__call-button');
var callButton2 = document.querySelector('.burger-menu__call-button');
var callClose = document.querySelector('.modal-call-close');

callClose.addEventListener('click', function(event) {
    event.preventDefault();
    callPage.style.display = 'none';
});

callButton.addEventListener('click', function(event) {
    event.preventDefault();
    callPage.style.display = 'block';
});

callButton2.addEventListener('click', function(event) {
    event.preventDefault();
    callPage.style.display = 'block';
    burgerPage.style.display = 'none';
});

callPage.addEventListener('click', function() {
    callPage.style.display = 'none';
});