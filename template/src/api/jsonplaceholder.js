import axios from 'axios';

const root = 'http://jsonplaceholder.typicode.com';

export const getPosts = () => {
  return axios.get(`${root}/posts`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
