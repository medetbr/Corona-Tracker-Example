import Chart from "./Components/Chart";
import Cards from "./Components/Cards";
import Country from "./Components/Country";
import React from "react";
import { fetchData } from './Components/Api'
import './index.css'
class App extends React.Component {
  
  state = {
    data: {},
    country: ''
  }

  async componentDidMount () {
    const data = await fetchData();

    this.setState({data})
}
    
  
handleCountryChange = async (country) => {
  const data = await fetchData(country);
  console.log(data)
  this.setState({ data, country: country });
}

 
  
 render() {
    const { data, country } = this.state;
 
   return (
 <>
     
  
     < div className = "container" >
    
    <Cards data={data}  />
       <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
       
       </div>
     </>
   );
   
  }
  
}

export default App;
