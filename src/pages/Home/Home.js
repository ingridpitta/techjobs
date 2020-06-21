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

  handleFilters = () => {
    console.log("filtering");
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  arrToLowerCase = (arr) => {
    for (let i = 0 ; i < arr.length; i++){
    for (let key in arr[i]){
        if (key === undefined || arr[i][key] === undefined) {
            continue;
        }
          const item = arr[i][key];
          if(!Array.isArray(item)){
            arr[i][key] = arr[i][key].toString().toLowerCase();
          }
        };
    };
  }

  onClick = async () => {
    const { inputValue } = this.state;
    const {data} = this.props;

    const mutatedData = Object.assign(data);

    await this.arrToLowerCase(mutatedData);

    const search = await mutatedData.filter(job => job.position.includes(inputValue.toLowerCase()));
    
    this.setState({data: search});
  };


  render() {
    const { title, filters, inputValue, data } = this.state;
    const {getJobInfos, loggedUser, logout } = this.props;
    console.log({ inputValue });
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
        />
      </GeneralTemplate>
    );
  }
}

export default Home;
