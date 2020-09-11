import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import "../style/BadgeNew.css";
import API from "../api.js";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: [e.target.value],
      },
    });
  };

  handleSubmit = async (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    try {
      await API.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className='BadgeNew__hero BadgeNew__hero-image'>
          <img src={header} className='img-fluid' alt='logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || "YOUR FIRST NAME"}
                lastName={this.state.form.lastName || "YOUR LAST NAME"}
                jobTitle={this.state.form.jobTitle || "YOUR JOB TITLE"}
                avatarUrl={this.state.form.avatarUrl || ""}
                twitter={this.state.form.twitter || "YOUR_TWITTER"}
                email={this.state.form.email || "YOUR EMAIL"}
              />
            </div>
            <div className='col-6'>
              <h1>New Attendantes</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
                isLoading={this.state.loading}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
