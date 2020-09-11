import React from "react";
import "../style/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render(props) {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Logo de la conferencia' />
        </div>

        <div className='Badge__section-name'>
          <Gravatar email={this.props.email} className='Badge__avatar' />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className='Badge__section-info'>
          <h4 className='text-center'>{this.props.jobTitle}</h4>
          <p>
            <i className='icon-twitter icon-large text-info'></i> @
            {this.props.twitter}
          </p>
        </div>

        <div className='Badge__footer'>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
