//for page-main slider
let paginationLinks = document.querySelectorAll('.page-main__product-slide-a');

for (let i = 0; i < paginationLinks.length; i++) {
  paginationLinks[i].addEventListener('click', toggleActivePaginationLink);
}

function toggleActivePaginationLink() {
  let prevActivePaginationLink = document.getElementsByClassName("page-main__product-a-active");
  prevActivePaginationLink[0].classList.remove("page-main__product-a-active");
  this.classList.toggle("page-main__product-a-active");
}

//for review buttons

let reviewSlider = document.querySelector(".page-main__review-slider");
let reviewSlide = document.querySelector(".page-main__review-slide");

let nextReview = document.querySelector(".page-main__review-button-next");
nextReview.addEventListener('click', scrollToNext);
function scrollToNext() {
  reviewSlider.scrollLeft += reviewSlide.offsetWidth;
}

let prevReview = document.querySelector(".page-main__review-button-prev");
prevReview.addEventListener('click', scrollToPrev);
function scrollToPrev() {
  reviewSlider.scrollLeft += -reviewSlide.offsetWidth;
}


//for sale tabs

let tabLinks = document.querySelectorAll('.page-main__sale-tab-a');

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener('click', toggleActiveTabLink);
}

function toggleActiveTabLink() {
  let prevActiveTabLink = document.getElementsByClassName("page-main__sale-tab_active");
  let prevTab = [].indexOf.call(tabLinks, prevActiveTabLink[0]);
  prevActiveTabLink[0].classList.remove("page-main__sale-tab_active");
  this.classList.toggle("page-main__sale-tab_active");
  
  let currentTab = [].indexOf.call(tabLinks, this);
  let tabContent = document.querySelectorAll('.page-main__sale-tab-content');

  tabContent[prevTab].style.display = "none";
  tabContent[currentTab].style.display = "initial";
  
}

