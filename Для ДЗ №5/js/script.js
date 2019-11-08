var answerUser = prompt('Как вы относитесь к технике Apple&', '');
var promptUser = document.querySelector('#prompt');
var ul = document.querySelector('.menu');
var menu = document.querySelectorAll('.menu-item');
var fivePointMenu = document.createElement('li');
var title = document.querySelector('#title');
var adv = document.querySelector('.adv');


menu[1].textContent = 'Второй пункт';
menu[2].textContent = 'Третий пункт';
fivePointMenu.classList.add('menu-item');
fivePointMenu.textContent = 'Пятый пункт';
ul.appendChild(fivePointMenu);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.parentElement.removeChild(adv);

promptUser.textContent = answerUser;





console.log(menu);