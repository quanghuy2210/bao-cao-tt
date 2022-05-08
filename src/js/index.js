
//slider-show
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  groupCells: 1,
  autoPlay: 2000,
  // freeScroll: true,
  wrapAround: true
});


// scroll >> xuất hiện arrow-up
function blockUp(){
  const up = document.getElementById('arrow-up');
  const scrollValue = window.scrollY;
 if(scrollValue > 50){
   up.classList.add('arrow-block');
 }
 else{
   up.classList.remove('arrow-block');
 }
}
window.addEventListener('scroll', blockUp);

//Cuộn lên đầu trang

function pageScrollTop(){
  $('html,body').animate({
    scrollTop: 0
    }, 'slow');
}


//chiều rộng submenu
const elementNavigation = document.querySelector(".header-product-information .navigation")
const elementSubmenu = document.querySelector(".submenu")
if(elementNavigation ){
  const widthNavigation = elementNavigation.offsetWidth
}

//tìm kiếm
function handleFilterBySkill() {
  const inputSearh = document.querySelector(".search-content");
  const inputSearhValue = inputSearh.value 
  const filterData = listProduct.filter( item => {
      if ( listProduct.includes(inputSearhValue)) {
        return true;
      }
      return false;
    });
    showListProduct(filterData);
}