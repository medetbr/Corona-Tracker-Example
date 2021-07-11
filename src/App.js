import Chart from "./Components/Chart";
import Cards from "./Components/Cards";
import Country from "./Components/Country";
import React from "react";

class App extends React.Component {
  render() {
    return(
    <div className="container" >
    <Chart />
    <Cards />
    <Country/>
    </div>
  );
  }
  
}

export default App;
