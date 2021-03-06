import axios from 'axios';
const baseUrl = 'https://api.producthunt.com'
// axios.interceptors.response.use((response) => {
//   return response;
// }, function (error) {
//   return Promise.reject(error.response);
// });
const getCollections = {
  default: (token) => {
    const url = `${baseUrl}/v1/collections`;
    return axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  featured: (token) => {
    const url = `${baseUrl}/v1/collections`;
    return axios({
      method: 'get',
      url: url,
      params: {
        'search[featured]': true
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }  
}

const getTopics = {
  trending: (token) => {
    const url = `${baseUrl}/v1/topics`;
    return axios({
      method: 'get',
      url: url,
      params: {
        'search[trending]': true
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  default: (token) => {
    const url = `${baseUrl}/v1/topics`;
    return axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const getPosts = {
  todayPosts: (token) => {
    const url = `${baseUrl}/v1/me/feed`;
    return axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const getComments = {
  latest: (token) => {
    const url = `${baseUrl}/v1/comments`;
    return axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
const getUser = {
  myself: (token) => {
    const url = `${baseUrl}/v1/me`;
    return axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    });
  }
}
export {
  getCollections,
  getTopics,
  getPosts,
  getComments,
  getUser
}