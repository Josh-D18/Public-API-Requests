// Form Markup
const searchContainer = document.querySelector('.search-container');
const searchForm = `
<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;




// Gallery Markup
const gallery = document.querySelector('#gallery');
const galleryHTML = `
<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">first last</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>
</div>`;


// Modal Markup
const modal = document.createElement('div');
modal.setAttribute('class', 'modal-container');

const modalHTML = ` 
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
<div class="modal-info-container">
    <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
    <h3 id="name" class="modal-name cap">name</h3>
    <p class="modal-text">email</p>
    <p class="modal-text cap">city</p>
    <hr>
    <p class="modal-text">(555) 555-5555</p>
    <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
    <p class="modal-text">Birthday: 10/21/2015</p>
</div>`





// Inserting HTML Into DOM
searchContainer.insertAdjacentHTML('afterbegin', searchForm);
gallery.insertAdjacentHTML('afterbegin', galleryHTML);
modal.insertAdjacentHTML('afterbegin', modalHTML);
// gallery.insertAdjacentElement("afterend", modal);


// HTML Elements For Modal



// Fetching the API
function fetchData(url){
    return fetch(url)
    .then(res => res.json())
}


// Fecthing data and changing HTML
fetchData('https://randomuser.me/api/?results=12')
    .then(data => {
        data.results.map(person => {
            // HTML Elements For Modal

            const galleryImg = document.querySelector('.card-img');
            const nameElement = document.querySelector('#name');
            const cityAndCountry = document.querySelector('.card-text.cap');
            const emailElement = document.querySelector('.card-text');

            // Info from API
            const image = person.picture.thumbnail;
            const firstName = person.name.first;
            const lastName = person.name.last;
            const city = person.location.city;
            const country = person.location.country;
            const email = person.email;
        
            // Changing HTML 
            galleryImg.src = image; 
            nameElement.textContent = `${firstName} ${lastName}`;
            emailElement.textContent = email;
            cityAndCountry.textContent = `${city} ${country}`;
            gallery.insertAdjacentHTML('afterbegin', galleryHTML);
        });
});
