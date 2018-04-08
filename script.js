const aboutUsLink = document.querySelector('.website_header--listAboutUs');
const serviceLink = document.querySelector('.website_header--listService');
const reviewsLink = document.querySelector('.website_header--listReviews');
const contactLink = document.querySelector('.website_header--listContact');
const about = document.querySelector('.website_about');
const service = document.querySelector('.website_service');
const reviews = document.querySelector('.website_reviews');
const contact = document.querySelector('.website_contact');

//moving to element events
const moveToAbout = () => moveToElement(about);
const moveToService = () => moveToElement(service);
const moveToReviews = () => moveToElement(reviews);
const moveToContact = () => moveToElement(contact);

aboutUsLink.addEventListener("click", moveToAbout);
serviceLink.addEventListener("click", moveToService);
reviewsLink.addEventListener("click", moveToReviews);
contactLink.addEventListener("click", moveToContact);

//function moving to element itself
function moveToElement(where) {
  console.log(where)
  where.scrollIntoView({
    behavior: 'smooth'
  });
}