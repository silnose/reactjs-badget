import React from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList.js";
import "../style/Badges.css";
import confLogo from "../images/badge-header.svg";
import Api from "../api.js";
import PageError from "../components/PageError.js";
class Badges extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      badges: [],
    },
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000); // polling
  }

  componentWillUnmount() {
    //clear timeout to avoid issues
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await Api.badges.list();
      console.log(data);
      this.setState({
        data: {
          badges: data,
        },
        loading: false,
        error: null,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return <PageError error={this.state.error.message} />;
    }

    return (
      <React.Fragment>
        <div className='Badges'>
          <div className='Badges__hero'>
            <div className='Badges__container'>
              <img className='Badges_conf-logo' src={confLogo} alt='logo' />
            </div>
          </div>
        </div>
        <div className='Badges__container'>
          <div className='Badges__buttons'>
            <Link to='/badges/new' className='btn btn-primary'>
              New Badge
            </Link>
          </div>
        </div>
        <div className='Badges__list'>
          <div className='Badges__container'>
            <BadgesList
              badges={this.state.data.badges}
              isLoading={this.state.loading}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
