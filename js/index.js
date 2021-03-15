// HTML elements
const gallery = document.querySelector('#gallery');
const searchContainer = document.querySelector('.search-container');



// Inserting HTML Into DOM
function addHTML(htmlElement, htmlToAdd){
    htmlElement.insertAdjacentHTML('afterbegin', htmlToAdd)
}

// Form Markup
const searchForm = `
<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;




// Fetching the API
function fetchData(url){
    return fetch(url)
    .then(res => res.json())
    .catch(err => new Error(`Something went Wrong: ${err}`, err));
}


// Gallery and Modal View
fetchData('https://randomuser.me/api/?results=12')
    .then(data => {
        getUsers(data)
        generateHTML(data)
    })



//Gallery Markup
function getUsers(data) { 
    const html = data.results.map(person =>  
        `<div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${person.picture.thumbnail}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                <p class="card-text">${person.email}</p>
                <p class="card-text cap">${person.location.city} ${person.location.country}</p>
            </div>
        </div>`
    ).join('');
    gallery.insertAdjacentHTML('afterbegin', html);
}


// Modal Markup

function generateHTML(data){
    const html = data.results.map(person =>
    `
    <div class="modal-container">
        <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
                <img class="modal-img" src="${person.picture.thumbnail}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${person.name.first} ${person.name.last}</h3>
                <p class="modal-text">${person.email}</p>
                <p class="modal-text cap">${person.location.city} ${person.location.country}</p>
                <hr>
                <p class="modal-text">${person.cell}</p>
                <p class="modal-text">${person.location.street.number} ${person.location.street.name}, ${person.location.country} ${person.location.state}, ${person.location.postcode}</p>
                <p class="modal-text">Birthday: ${new Date(person.dob.date)}</p>
        </div>
    </div>
    `)
    addHTMLToDOM(html)
} 

function addHTMLToDOM(html){
    const cards = document.querySelectorAll('.card');
    let cardList = [...cards];
    
    cardList.map((card, i) => {
        card.addEventListener('click', () => {
            gallery.insertAdjacentHTML("afterbegin", html[i]);
            
            // close button Event
            const closeBtn = document.querySelector('#modal-close-btn');
        
            closeBtn.addEventListener('click', (e) => {
            const modal = document.querySelector('.modal-container');
            const x = document.querySelector('strong');

            if (e.target === closeBtn || e.target === x){
                modal.style.display = 'none';
            } else{
                modal.style.display === ''
            }
            });
        });
    });
}








//----- Add Modal Info from API to HTML



// Modal Window




addHTML(searchContainer, searchForm);
// addHTML(modal, modalHTML);
