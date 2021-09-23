import menuItems from '../templates/menu-item.hbs';
import menu from '../menu.json';

export function createMenuItems(menu) {
    return menuItems(menu);
}

const menuItemsEl = createMenuItems(menu);
const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('afterbegin', menuItemsEl);