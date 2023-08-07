import { clearContent } from './utils';


function menuTabContent (){
    const div = document.createElement('div');
    const headline = document.createElement('h1');
    headline.textContent = 'Here is the menu!';
    div.appendChild(headline)
    
    return div;
}
function displayMenu() {
    clearContent();
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(menuTabContent());
}

export { displayMenu }