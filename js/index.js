// HTML elements
const gallery = document.querySelector('#gallery');
const searchContainer = document.querySelector('.search-container');
const modal = document.createElement('div');
modal.setAttribute('class', 'modal-container');



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

// Gallery View
fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    .then(data => getUsers(data))
    .catch(err => new Error(`Something went Wrong: ${err}`, err));

// Modal View
fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    .then(data => addmodalHTML(data))

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

function addmodalHTML(data){
    const cards = document.querySelectorAll('.card');
    const html = data.results.map(person =>
    `
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
        <p class="modal-text">Birthday: ${person.dob.date}</p>
    </div>
    `)
    console.log(cards)
    let cardList = [...cards];

    cardList.map(card => {
        card.addEventListener('click', () => {
            card.insertAdjacentHTML("afterend", html);
            // console.log(document.querySelector('#modal-close-btn'))
            
        
            // X button Event
            // const closeBtn = document.querySelector('#modal-close-btn');
            // const x = document.querySelector('strong');
        
            // closeBtn.addEventListener('click', (e) => {
            // const modal = document.querySelector('.modal-container');
            // console.log(e.target)
            // if (e.target === closeBtn || e.target === x){
            //     modal.style.display = 'none';
            //     elementClicked = true;
            // } else{
            //     elementClicked = false;
            //     modal.style.display === ''
            // }
            // });
        });
    });
} 









//----- Add Modal Info from API to HTML



// Modal Window




addHTML(searchContainer, searchForm);
// addHTML(modal, modalHTML);
