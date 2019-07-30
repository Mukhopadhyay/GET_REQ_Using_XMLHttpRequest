//This is the div from the html file, in which the container divs will be placed
const app = document.getElementById('root');

//this div will be loaded with the data
const container = document.createElement('div');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

    // Parse the received json data
 var data = JSON.parse(this.response);
 //check if the status is fine or not.
 if (request.status >= 200 && request.status < 400) {
   data.forEach(movie => {
     const card = document.createElement('div');
     card.setAttribute('class', 'card');

     const h1 = document.createElement('h1');
     h1.textContent = movie.title;
     h1.style.fontSize = '1.4em';
     h1.style.textDecoration = 'underline';

     const p = document.createElement('p');
     p.textContent = movie.description;

     container.appendChild(card);
     card.appendChild(h1);
     card.appendChild(p);
   });
 } else {
   const errorMessage = document.createElement('marquee');
   errorMessage.textContent = `Its not working`;
   app.appendChild(errorMessage);
 }
}

let fetchFunction = function() {
    console.log("Button clicked!");
    request.send();
}
