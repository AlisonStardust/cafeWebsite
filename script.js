const listItems = document.querySelectorAll('.website_header--list li');
console.log(listItems);

const aboutUsLink = document.querySelector('.website_header--listAboutUs');
const serviceLink = document.querySelector('.website_header--listService');
const reviewsLink = document.querySelector('.website_header--listReviews');
const contactLink = document.querySelector('.website_header--listContact');
const button = document.querySelector('.website_introduction--button');


const about = document.querySelector('.website_about');
const service = document.querySelector('.website_service');
const reviews = document.querySelector('.website_reviews');
const contact = document.querySelector('.website_contact');

const moveToAbout = () => moveToElement(about);
aboutUsLink.addEventListener("click", moveToAbout);
button.addEventListener("click", moveToAbout);

const moveToService = () => moveToElement(service);
serviceLink.addEventListener("click", moveToService);

const moveToReviews = () => moveToElement(reviews);
reviewsLink.addEventListener("click", moveToReviews);

const moveToContact = () => moveToElement(contact);
contactLink.addEventListener("click", moveToContact);

//function moving to element itself
function moveToElement(where) {
  console.log(where)
  where.scrollIntoView({
    behavior: 'smooth'
  });
}