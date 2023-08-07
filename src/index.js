import { displayHome } from './pageLoad.js';
import { displayContact } from './contactTab.js';  
import { displayMenu } from './menuTab.js';


document.getElementById('homeTab').addEventListener('click', displayHome);
document.getElementById('menuTab').addEventListener('click', displayMenu);
document.getElementById('contactTab').addEventListener('click', displayContact);

