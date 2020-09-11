import React from "react";
import PageLoading from "../components/PageLoading";

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("click");
  };

  render() {
    if (this.props.isLoading) {
      return <PageLoading />;
    }
    return (
      <div>
        {this.props.error && (
          <p className='text-danger'>{this.props.error.message}</p>
        )}
        <form onSubmit={this.props.onSubmit}>
          <div className='form-group'>
            <label>FirstName</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='firstName'
              value={this.props.formValues.firstName}
            />
          </div>

          <div className='form-group'>
            <label>LastName</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='lastName'
              value={this.props.formValues.lastName}
            />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='email'
              name='email'
              value={this.props.formValues.email}
            />
          </div>

          <div className='form-group'>
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='jobTitle'
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className='form-group'>
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='twitter'
              value={this.props.formValues.twitter}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
