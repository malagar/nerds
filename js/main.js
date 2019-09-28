$(function(){

	$('.slick-slider').slick();

  
});


var link = document.querySelector(".map__inner-btn");
var popup = document.querySelector("#modal-open-form");
var close = popup.querySelector(".modal-close-btn");
var login = popup.querySelector("#login");



link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();	
	popup.classList.remove("modal-show");
});







 
