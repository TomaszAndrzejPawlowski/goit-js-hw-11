`use strict`;

import axios from 'axios';

export const fetchResults = async (url, options) => {
    const response = await axios(url, options);
    return response;
}