import React from "react";
import { useState, useEffect } from "react";
import { fetchCountries } from "./Api";


const Country = ({ handleCountryChange }) => {
  

  
  const [fetchedCountry, setFetchedCountries] = useState([]);

  useEffect(() => {
          const fetchAPI = async () => {
         setFetchedCountries(await fetchCountries())
            }
            fetchAPI();
  },[setFetchedCountries])
    
    
    
    return (
      <div className="mt-5 align-self-center">
        
      <select className="form-select" aria-label="Default select example"  defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
       
                {
                   fetchedCountry.map((country,i) =><option key={i} value={country}>{country}</option>)
                }
        
        
      </select>
    </div>
  );
};
export default Country;
