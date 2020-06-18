import React, {Component} from "react";
import {GeneralTemplate} from "../../templates";
import { HomeContent } from "../../components/organisms";
import "./home.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      title: "TechJobs",
      filters: []
    };
  }

  handleFilters = () => {
      console.log("filtering");
  }

  render() {
    const { title, filters } = this.state;
    return (
      <GeneralTemplate>
        <HomeContent
          title={title}
          handleFilters={this.handleFilters}
          filters={filters}
        />
      </GeneralTemplate>
    );
  }
}

export default Home;