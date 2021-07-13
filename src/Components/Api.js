import Axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let cheangeableUrl = url;

    if (country) {
        cheangeableUrl = `${url}/countries/${country}`;
    }

    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await Axios.get(cheangeableUrl);
        
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        
        return modifiedData;
    } catch(error) {
        
    }
   
}
export const fetchDailyData = async () => {
   

    try {
         const {data} = await Axios.get(`${url}/daily`)
        
       
        const modifiedData = data.map((dailyData) =>( {
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            recovered: dailyData.recovered.total,
            date: dailyData.reportDate

        }))
            
        return modifiedData
    
    } catch(error) {
        
    }
}
export const fetchCountries = async () => {
   

    try {
         const {data : {countries}} = await Axios.get(`${url}/countries`)
        
       
       
       return countries.map((country) => country.name )
   
    } catch (error) {
        
    }
}
