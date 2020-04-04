import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import AboutPage from '../AboutPage/AboutPage'
import ContactPage from '../ContactPage/ContactPage'
import ResourcePage from '../ResourcePage/ResourcePage'
import Homepage from '../Homepage/Homepage'
import Footer from '../../components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  state = {
    foodBanks: [],
    address: []
  }

  componentDidMount =   async () => {
    const data = await fetch('https://data.mo.gov/resource/eb3y-vtsa.json').then(res => res.json())
    const address = data.map(e => e.location.human_address)
      this.setState({
        foodBanks: data,
        address: address
      })
  }
  render() {
    return (
      <div className="App-layer">
        <div className="App-outer-container">
          <Navbar/>
          <div className="App-inner-container">
            <Switch>
            <Route
                exact
                path="/"
                render={props => <Homepage />}
              />
              <Route
                exact
                path="/resources"
                render={props => <ResourcePage 
                foodBanks={this.state.foodBanks} 
                address={this.state.address} />}
              />
              <Route
                exact
                path="/about"
                render={props => <AboutPage />}
              />
              <Route
                exact
                path="/contact"
                render={props => <ContactPage />}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
