import { clearContent } from './utils';


function contactTab(){
    const div = document.createElement('div');
    const headline = document.createElement('h1');
    headline.textContent = 'Contact here!!';
    div.appendChild(headline);
    
    return div;
}

function displayContact() {
    clearContent();
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(contactTab());
}



export { displayContact }