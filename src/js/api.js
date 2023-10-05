`use strict`;

import axios from 'axios';



export const fetchResults = async (userInput, currentPage) => {
    const apiKey = `39664886-734d85d446af9c48bd55da1f3`;
    const url = `https://pixabay.com/api/`;
    const options = {
    params: {
      key: apiKey,
      q: userInput,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: currentPage,
      per_page: 40
    }
}
    const response = await axios(url, options);
    return response.data;
}