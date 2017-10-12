import axios from 'axios';

const getCollections = {
  default: (token) => {
    const url = 'https://api.producthunt.com/v1/collections';
    return axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }  
}

export default getCollections;