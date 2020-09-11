import React from "react";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal.js";
import { Link } from "react-router-dom";
import confLogo from "../images/platziconf-logo.svg";
import "../style/BadgeDetails.css";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

const BadgeDetails = (props) => {
  const [count, setCount] = useIncreaseCount(4);
  const badge = props.badge;
  return (
    <React.Fragment>
      <div className='BadgeDetails__hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={confLogo} className='img-fluid' alt='logo' />
            </div>
            <div className='col-6 BadgeDetails__hero-attendant-name'>
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className='col'>
            <h2>Actions</h2>
            <div>
              <div>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className='btn btn-primary'>
                  Increase Count {count}
                </button>
              </div>
              <div>
                <Link
                  to={`/badges/${badge.id}/edit`}
                  className='btn btn-warning mb-2 '>
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className='btn btn-danger'>
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BadgeDetails;
