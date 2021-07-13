import React,{useState,useEffect} from "react";
import { fetchDailyData } from './Api'
import {Line,Bar} from 'react-chartjs-2'
import "./CSS/Chart.css";



const Chart = ({ data:{confirmed,deaths,recovered}, country })=>{
  
  
  
    const [dailyData, setDailyData] = useState([]);
  
  console.log(fetchDailyData())
  
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
  
  const barChart = (confirmed ? (<Bar
    data={{
      labels: ['Infected', 'Recovered', 'Deaths'],
      datasets: [{
        label: 'People',
        backgroundColor: [
          'rgba(0, 0, 255, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(0, 0, 0, 0.5)',
        ],
        data:[confirmed.value,recovered.value,deaths.value]
      }]
    }}
    option={{
      legend: { display: false },
      title: {display: true, text:`Current state in ${country}`}
    }}
  />):null)
        return (
          <div className="container align-self-center">
          
               <h2 className=" align-self-center text-primary"><b>Corona Chart</b></h2>
                 {country ? barChart :lineChart}
            </div>
        )
    
}
export default Chart