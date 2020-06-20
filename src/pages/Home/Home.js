import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";
import { HomeContent } from "../../components/organisms";
import "./home.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      title: "TechJobs",
      filters: [
        "Todos",
        "Front",
        "Back",
        "Design",
        "Junior",
        "Pleno",
        "Senior"
      ],
      inputValue: ""
    };
  }

  handleFilters = () => {
    console.log("filtering");
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  onClick = () => {
    console.log("clicked");
  };


  render() {
    const { title, filters, inputValue } = this.state;
    const {data, getJobInfos} = this.props;
    console.log({ inputValue });
    return (
      <GeneralTemplate>
        <HomeContent
          title={title}
          handleFilters={this.handleFilters}
          filters={filters}
          handleChange={this.handleChange}
          onClick={this.onClick}
          cardsInfo={data}
          getJobInfos={getJobInfos}
        />
      </GeneralTemplate>
    );
  }
}

export default Home;
