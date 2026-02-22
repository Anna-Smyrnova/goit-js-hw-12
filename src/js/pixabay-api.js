import axios from "axios";
    

axios.defaults.baseURL =  "https://pixabay.com/api/";
axios.defaults.params = {
  key: "54666268-2618e7de02917d56fb8a894d5",
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
};

export async function getImagesByQuery(query, page = 1) { 
  const res = await axios.get('', {
    params: {
      ...axios.defaults.params,
      q: query,
      page: page,
    }
  });
  return res.data;
}