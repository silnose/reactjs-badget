import React from "react";
import BadgeItem from "./BadgeItem";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton.js";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);
  debugger;
  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);
  return { query, setQuery, filteredBadges };
}

const BadgesList = (props) => {
  const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);
  debugger;
  if (filteredBadges.length === 0 && !props.isLoading) {
    return (
      <div className='Badges__container text-center'>
        <div className='form-group'>
          <label>Filter Badges</label>
          <input
            type='text'
            className='form-control'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link to='/badges/new' className='btn btn-success'>
          Create new Badges
        </Link>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className='form-group'>
        <label>Filter Badges</label>
        <input
          type='text'
          value={query}
          className='form-control'
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className='list-unstyled'>
        {props.isLoading
          ? new Array(5).fill(1).map((_, i) => {
              return <Skeleton key={i} />;
            })
          : filteredBadges.map((badge) => {
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
    </React.Fragment>
  );
};

export default BadgesList;
