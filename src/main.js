import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from "axios";
import { getImagesByQuery } from './js/pixabay-api.js';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader
} from './js/render-functions.js';


const formElem = document.querySelector('.form');
const inputValue = document.querySelector('[name="search-text"]');
const gallery = document.querySelector('.gallery');


formElem.addEventListener("submit", (e) => {
    e.preventDefault();

   const inputVal = inputValue.value.trim();

    if (!inputVal) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        clearGallery();
        return;
    }

    clearGallery ();
     showLoader();
        

    getImagesByQuery(inputVal)
        .then(data => {
            const arrOfImage = data.hits;

            if (arrOfImage.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                clearGallery();
                return;
            }
            clearGallery();
            createGallery(arrOfImage);
            }).catch(err => {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                })
                clearGallery();
            }).finally(() => {
                hideLoader();
            })
    
   
    formElem.reset();
});