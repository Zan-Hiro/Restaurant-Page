import  { content, createHome } from './home';
import { createPhotosPage } from './photo';
import { createMenuPage } from './menu';

createHome();

const mainBtn = document.querySelector('.main');
const photosBtn = document.querySelector('.photos');
const menuBtn = document.querySelector('.menu');

const returnHome = () => {
  content.innerHTML = "";
  createHome();
};

mainBtn.addEventListener('click', returnHome);
photosBtn.addEventListener('click', createPhotosPage);
menuBtn.addEventListener('click', createMenuPage);