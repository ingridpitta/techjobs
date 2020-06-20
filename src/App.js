import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import {withRouter} from "react-router-dom";
import data from "./data.json";
import { Home, Login, SignUp, JobDetails } from "./pages";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.staate={
      filteredData: []
    }
  }

   getJobInfos = async (e) => {
    const id = (e.target.id).split("--")[1];
    const filteredData = data.filter(job => job.id == id);

    await this.setState({filteredData:filteredData[0]});

    if (this.state.filteredData) {
      this.props.history.push("/job-details");
    }
  }

  render(){
    return (
    <Switch>
      <Route exact path="/" render={props => <Home data={data} getJobInfos={this.getJobInfos} />} />
      <Route exact path="/login" render={props => <Login/>}/>
      <Route exact path="/signup" render={props => <SignUp/>}/>
      <Route exact path="/job-details" render={props => <JobDetails {...props} data={this.state.filteredData}/>}/>
    </Switch>
  );
  }
}

export default withRouter(App);

