import axios from "axios";
    

axios.defaults.baseURL =  "https://pixabay.com/api/";
axios.defaults.params = {
      key: "54666268-2618e7de02917d56fb8a894d5",
    q: '',
    image_type: 'photo',
    orientation:'horizontal',
    safesearch: true,
}
export function getImagesByQuery(query) {
     return axios.get('',
        { params: { ...axios.defaults.params, q: query } }).then(res => res.data);
}