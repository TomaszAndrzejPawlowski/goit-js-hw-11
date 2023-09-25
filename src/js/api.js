`use strict`;
import Notiflix from 'notiflix';
import axios from 'axios';

const searchInput = document.querySelector('.search-form input');

const apiKey = `39664886-734d85d446af9c48bd55da1f3`;
const userInput = searchInput.textContent;
const url = `https://pixabay.com/api/?key=${apiKey}&q=${userInput}`;
