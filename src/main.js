import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
  hideLoadMoreButton
} from './js/render-functions.js';


const formElem = document.querySelector('.form');
const inputValue = document.querySelector('[name="search-text"]');
const loadBtn = document.querySelector('.js-load-btn');

let inputVal = '';
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;

formElem.addEventListener('submit', async e => {
  e.preventDefault();

  inputVal = inputValue.value.trim();
  currentPage = 1;

  if (!inputVal) {
    iziToast.error({ message: 'Please enter a search query!' });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const res = await getImagesByQuery(inputVal, currentPage);
    const images = res.hits;

    if (images.length === 0) {
      iziToast.error({ message: 'No images found for your query.' });
      return;
    }

    createGallery(images);

    maxPage = Math.ceil(res.totalHits / pageSize);

    if (currentPage < maxPage) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({ message: "You've reached the end of search results." });
    }
  } catch {
    iziToast.error({ message: 'Error fetching images. Please try again.' });
  } finally {
    hideLoader();
  }

  formElem.reset();
});


loadBtn.addEventListener('click', async () => {
  currentPage += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const res = await getImagesByQuery(inputVal, currentPage);
    const images = res.hits;

    if (images.length === 0) return;

    createGallery(images);

 
    const firstCard = document.querySelector('.gallery .item-gallery');
    if (firstCard) {
      const cardHeight = firstCard.getBoundingClientRect().height;
      window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
    }

    maxPage = Math.ceil(res.totalHits / pageSize);
  } catch {
    iziToast.error({ message: 'Error fetching images. Please try again.' });
  } finally {
    hideLoader();

    if (currentPage < maxPage) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({ message: "You've reached the end of search results." });
    }
  }
});