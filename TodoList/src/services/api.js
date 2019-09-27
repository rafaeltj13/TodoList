import axios from 'axios';

const url = 'http://192.168.25.32:1337/api/'

const Api = axios.create({
  baseURL: `${url}`,
});

export default Api;