import Axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    
    try {
        const {data:{confirmed,recoverd,deaths,lastUpdate}} = await Axios.get(url);
        
        const modifiedData = {
            confirmed,
            recoverd,
            deaths,
            lastUpdate
        }
   
        return modifiedData;
    } catch(error) {
        
    }
   
}

