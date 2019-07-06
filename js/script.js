/*----- begin block [page-slider] for file {index.html} -----*/

var pageSliderControlItems = document.querySelectorAll(".page-slider-item");
var pageContainerBackground = document.querySelector(".page-container");
var pageSlideCount = 3;
var pageSliderContainerItems = document.querySelectorAll(".page-slider");


function pageSliderSwitch (event) {
	var pageSliderControlCurrentItem = document.querySelector(".page-slider-item.active");
	var pageSliderCurrentItem = document.querySelector(".page-slider.active");

	for (var k=1; k <= pageSlideCount; k++) {
		pageContainerBackground.classList.remove("slide-"+k);
	};

	for (var j=0; j < pageSliderControlItems.length; j++) {
		if (pageSliderControlItems[j] === this) {
			pageSliderControlCurrentItem.classList.remove("active");
			pageSliderControlItems[j].classList.add("active");
			pageContainerBackground.classList.add("slide-"+(j+1));
			pageSliderCurrentItem.classList.remove("active");
			pageSliderContainerItems[j].classList.add("active");
			console.log(pageSliderContainerItems[j]);
			break;
		};
	};
	
};

for (var i=0; i < pageSliderControlItems.length; i++) {
	pageSliderControlItems[i].addEventListener("click", pageSliderSwitch);
};

/*----- end block [page-slider] for file {index.html} -----*/