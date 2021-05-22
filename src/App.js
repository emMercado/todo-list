import React from 'react'
import { Route , Switch } from 'react-router-dom';

//vistas
import { ToDoList } from './views/ToDoList.jsx'
import Jobs from './views/Jobs';
import Companies from './views/Companies';
import Cities from './views/Cities';
import Countries from './views/Countries';

//components
import Navbar from './components/Navbar';
/* import NotFoundView from './views/NotFoundView';  */


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      paises: [],
      cities: [],
      jobs: [],
      companies: [],
    };
  }

  addCountries = (pais) => {
    this.setState({
      paises : [...this.state.paises, {
        country: pais,
      }
      ]
    })
  }
  addCities = (cities,c) => {
    this.setState({
      cities : [...this.state.cities, {
        city: cities, 
        country: this.state.paises[c].country
      }]
    })
  }
  addJobs = (jobs,i) => {
    this.setState({
      jobs : [...this.state.jobs, {
        job: jobs, 
        company: this.state.companies[i].company
      }]
    })
  }

  addCompanies = (companies,c) => {
    this.setState({
      companies : [...this.state.companies, {
        company: companies, 
        city: this.state.cities[c].city
      }]
    })
  }

  render() {
    return (
      <div className="App">
        
        <Navbar/> 
        <Switch>
            <Route path="/" exact component={ToDoList}></Route>
            <Route path="/jobs" exact render={()=> <Jobs  jobs={this.state.jobs} agregarJobs={this.addJobs} companies={this.state.companies} />} ></Route>
            <Route path="/companies" exact render={()=> <Companies companies={this.state.companies} agregarCompanies={this.addCompanies} cities={this.state.cities} />} ></Route>
            <Route path="/cities" exact render={()=> <Cities cities={this.state.cities} agregarCities={this.addCities} countries={this.state.paises} />} ></Route>
            <Route path="/countries" exact render={()=> <Countries countries={this.state.paises} agregarPais={this.addCountries} />} ></Route>
            {/*  <Route component={NotFoundView}></Route> */}
        </Switch>
      </div>
    );
  }
}

