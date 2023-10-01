`use strict`;
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import axios from 'axios';

const moreBtn = document.querySelector(".load-more");
const gallery = document.querySelector(".gallery");
const searchForm = document.querySelector("#search-form")

moreBtn.style.display = "none";

const apiKey = `39664886-734d85d446af9c48bd55da1f3`;
// const userInput = searchForm.currentTarget.value;
const pageCount = 1;
let userInput = ``;
const url = `https://pixabay.com/api/`;

const options = {
  params: {
    key: apiKey,
    q: userInput,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: pageCount,
    per_page: 40
  }
}

const fetchResults = async () => {
  try {
    const response = await axios(url, options)
    console.log(response)
    console.log("działa")
  } catch {
    Notiflix.Notify.faliure(error)
  }
  
}

const createGallery = images => {
    const markup = images.map(image => `<div class="photo-card">
  <a class="photo-card__link" href="${image.largeImageURL}">
  <img class="photo-card__image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${image.likes}
    </p>
    <p class="info-item">
      <b>Views</b>${image.views}
    </p>
    <p class="info-item">
      <b>Comments</b>${image.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${image.downloads}
    </p>
  </div>
</div>`)
        .join(``);
    gallery.innerHTML += markup;
    const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.searchQuery.value;
  userInput = inputValue;
  fetchResults();
  console.log(userInput)
})