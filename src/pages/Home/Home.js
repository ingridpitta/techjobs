import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";
import { HomeContent } from "../../components/organisms";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
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

  handleFilters = async (e) => {
    const { data } = this.props;
    const value = e.target.id.toLowerCase();

    const result = await data.filter(job => {
      switch (value) {
        case "todos":
          return data.map(item => item);
          break;
        default:
        return job.position.toLowerCase().includes(value);
      }
    });

    this.setState({data: result});
  };

  handleChange = e => {
    const value = e.target.value;

    this.setState({ inputValue: value });
  };

  onClick = async () => {
    const { inputValue } = this.state;
    const { data } = this.props;

    const search = await data.filter(job => job.position.toLowerCase().includes(inputValue.toLowerCase()));

    this.setState({data: search, inputValue: ""});
  };


  render() {
    const { title, filters, inputValue, data } = this.state;
    const {getJobInfos, loggedUser, logout } = this.props;
    return (
      <GeneralTemplate loggedUser={loggedUser} logout={logout} >
        <HomeContent
          title={title}
          handleFilters={this.handleFilters}
          filters={filters}
          handleChange={this.handleChange}
          onClick={this.onClick}
          cardsInfo={data}
          getJobInfos={getJobInfos}
          value={inputValue}
        />
      </GeneralTemplate>
    );
  }
}

export default Home;
