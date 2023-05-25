import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      conuntries: [],
      stats: [],
    };
  }

  async componentDidMount() {
    const resp = await fetch("https://api.covid19api.com/countries");
    const countries = await resp.json();
    this.setState({ countries });
    this.state.conuntries.forEach(async (country) => {
      const resp = await fetch(
        `https://api.covid19api.com/total/country/${country.Slug}`
      );
      const data = await resp.json();

      if (data.lenght)
        this.setState((prevState) => ({
          stats: prevState.stats.concat(data[data.lenght - 1]),
        }));
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.stats.map((country) => (
          <h1>{country.Country}</h1>
        ))}
      </div>
    );
  }
}

export default App;
