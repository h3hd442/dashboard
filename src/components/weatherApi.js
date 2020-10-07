import axios from 'axios';


export const getWeather = async () => {

    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=2b66e599cd966e6ef3f87187ad4fa994&units=metric')
    return response.data
    
 };