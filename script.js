const navBtnContainer = document.querySelector('.nav-btn-container');
const searchBox = document.querySelector('.search-box');
const closeBtn = document.querySelector('.close-btn');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  searchBox.classList.add('active');
  navBtnContainer.classList.add('active');
  
})
closeBtn.addEventListener('click', () => {
  searchBox.classList.remove('active');
  navBtnContainer.classList.remove('active');

})