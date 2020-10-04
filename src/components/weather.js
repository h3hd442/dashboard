import axios from 'axios';


export const getWeather = async () => {
    const response = await axios.get('https://api.climacell.co/v3/weather/realtime?lat=52.2297&lon=21.0122&unit_system=si&fields=&apikey=kiPuVRqLeFB267tWLhaRjL9cHh4VGnVo', {
         })
    return response;
 };
