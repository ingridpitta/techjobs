import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { GeneralTemplate } from "../../templates";
import { JobDetailsContent } from "../../components/organisms";
import "./jobDetails.css";

class JobDetails extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render(){
    const {data, loggedUser, logout} = this.props;
    return (
      <GeneralTemplate loggedUser={loggedUser} logout={logout}>
        <JobDetailsContent data={data}/>
      </GeneralTemplate>
    );
  }
}

export default withRouter(JobDetails);
