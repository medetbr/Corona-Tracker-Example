import Chart from "./Components/Chart";
import Cards from "./Components/Cards";
import Country from "./Components/Country";
import React from "react";
import {fetchData} from './Components/Api'
class App extends React.Component {
  
  state = {
    data:{},
  }

  async componentDidMount () {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData})

    
  }

  render() {
    const { data } = this.state;
    return(
    <div className="container" >
    <Chart />
    <Cards data={data} />
    <Country/>
    </div>
  );
  }
  
}

export default App;
