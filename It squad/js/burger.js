  
const burger = document.querySelector('.burger')
const burger__menu = document.querySelector('.burger__menu');
const body = document.querySelector('.body');
const nav__bar = document.querySelector('.nav__bar');
const logo = document.querySelector('.nav__logo');

burger.addEventListener('click', function(){
   nav__bar.classList.toggle('none');
   burger.classList.toggle('active');
   burger__menu.classList.toggle('active');
   burger__menu.classList.toggle('none');
   body.classList.toggle('lock');
   logo.classList.toggle('hidden');
});

  