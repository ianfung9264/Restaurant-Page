import { clearContent } from './utils';


//This module is responsible for generating the homepage content using JS


function createHomePage(){
    const div = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our Restaurant';
    div.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'Our restaurant offer the finest dinning experience';
    div.appendChild(description);

    return div;
}

function displayHome() {
    clearContent();
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(createHomePage());
}

export { displayHome }

