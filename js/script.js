
document.querySelectorAll('.services__accordion-button').forEach((el) => {
   el.addEventListener('click', () => {
      let content = el.previousElementSibling;
      let button = el;
      button.classList.toggle('active__accordion');
      if(content.style.maxHeight){
            document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
      }  else{
            document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
      }
   })
})

//scrol
document.querySelector('.about__btn').addEventListener('click', function(){
      document.querySelector('.about').scrollIntoView({behavior: 'smooth'});
});
document.querySelector('.sercices__btn').addEventListener('click', function(){
      document.querySelector('.services').scrollIntoView({behavior: 'smooth'});
});
document.querySelector('.projects__btn').addEventListener('click', function(){
      document.querySelector('.new__services').scrollIntoView({behavior: 'smooth'});
});
document.querySelector('.contacts__btn').addEventListener('click', function(){
      document.querySelector('.discuss').scrollIntoView({behavior: 'smooth'});
});
document.querySelector('.header-content-button').addEventListener('click', function() {
      document.querySelector('.team').scrollIntoView({behavior: 'smooth'});
 });
document.querySelector('.footer__button').addEventListener('click', function() {
     window.scrollTo({top: 0, left: 0,behavior: 'smooth'});
});

//modal

const modalbtn = document.querySelector('.discuss__button');
const modal = document.querySelector('.modal');

modalbtn.addEventListener('click', function() {
      modal.classList.toggle('modalhidden');
      window.scrollTo({top: 0, left: 0});
      body.classList.toggle('lock');
})










