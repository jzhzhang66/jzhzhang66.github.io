import axios from 'axios';

export async function getPhotoLinks(type) {
    const response = await axios.get(`https://peaceful-bayou-26310.herokuapp.com/${type}`, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }})
    return response.data
   }

