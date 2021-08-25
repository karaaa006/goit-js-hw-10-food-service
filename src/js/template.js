import menuTemplate from '../templates/menu.hbs';
import data from '../menu.json';

const menuRef = document.querySelector('.js-menu');
const templateResult = menuTemplate(data);

menuRef.insertAdjacentHTML('beforeend', templateResult);
