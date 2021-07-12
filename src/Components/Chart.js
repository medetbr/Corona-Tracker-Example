import React,{useState,useEffect} from "react";
import { fetchDailyData } from './Api'
import {Line, Bar} from 'react-chartjs-2'
import "./CSS/Chart.css";
const Chart = ({ data: { confirmed, recovered, deaths }, country })=>{
    
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        

        fetchAPI();
    }, [])
    
   
    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },  {
                data: dailyData.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );
        return (
            <div className="container align-self-center">
               <h2 className=" align-self-center text-primary"><b>Corona Chart</b></h2>
                {lineChart}
            </div>
        )
    
}
export default Chart