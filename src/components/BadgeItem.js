import React from "react";
import "../style/Badge.css";
import Gravatar from "./Gravatar";

class BadgeItem extends React.Component {
  render() {
    return (
      <div className='card text-left shadow p-1 mb-1 bg-gray rounded'>
        <div className='card-body p-1'>
          <div className='container'>
            <div className='row'>
              <div className='col-2 p-0 m-0'>
                <Gravatar
                  email={this.props.badge.email}
                  className='Badge__avatar-small'
                />
              </div>
              <div className='col-9 ml-1'>
                <h6 className='card-title font-weight-bolder mb-1'>
                  {`${this.props.badge.firstName} ${this.props.badge.lastName}`}
                </h6>
                <span>
                  <i className='icon-twitter icon-large text-info'></i>
                  <small>@{this.props.badge.twitter}</small>
                </span>
                <p className='card-text small text-break mt-2'>
                  {this.props.badge.jobTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeItem;
