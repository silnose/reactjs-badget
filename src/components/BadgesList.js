import React from "react";
import BadgeItem from "./BadgeItem";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton.js";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0 && !this.props.isLoading) {
      return (
        <div className='Badges__container text-center'>
          <h3>No badges were found</h3>
          <Link to='/badges/new' className='btn btn-success'>
            {" "}
            Create new Badges
          </Link>
        </div>
      );
    }

    return (
      <ul className='list-unstyled'>
        {this.props.isLoading
          ? new Array(5).fill(1).map((_, i) => {
              return <Skeleton key={i} />;
            })
          : this.props.badges.map((badge) => {
              return (
                <li key={badge.id} className='pb-1'>
                  <Link
                    to={`/badges/${badge.id}/details`}
                    className='text-reset text-decoration-none'>
                    <BadgeItem badge={badge} />
                  </Link>
                </li>
              );
            })}
      </ul>
    );
  }
}

export default BadgesList;
