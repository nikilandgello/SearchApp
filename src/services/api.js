import axios from 'axios';

export let perPage = 12;
const ACCESS_KEY = 'gB4MNk7lrVEx3yyxegbkJvsqZB-SdyDoSQ3p2b5PxFU';

axios.defaults.baseURL = `https://api.unsplash.com/`;

export const getImages = async (page, query) => {
  const params = new URLSearchParams({
    client_id: ACCESS_KEY,
    per_page: perPage,
    page,
    query,
    orientation: 'landscape',
  });
  const response = await axios.get('/search/photos', { params });
  return response.data;
};
