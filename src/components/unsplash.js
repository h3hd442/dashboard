import axios from 'axios';


export const getWallpaper = async (parameter1) => {

    const response = await axios.get(`https://api.unsplash.com/photos/random?orientation=landscape&query=${parameter1}`, {
             headers: {
                 Authorization: 'Client-ID HQkzPjQsMolCqRggHi8OftthamO7IHkzuYivhRYIZKw',
             },
         })
    return response.data.urls.regular;
 };