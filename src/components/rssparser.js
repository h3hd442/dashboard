import axios from 'axios';


export const getRss = async () => {

    const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftvn24.pl%2Fnajnowsze.xml')
    return response.data
    
 };