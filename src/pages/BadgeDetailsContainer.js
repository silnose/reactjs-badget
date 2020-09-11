import React from "react";
import API from "../api.js";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

class BadgeEditContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      let badgeId = this.props.match.params.badgeId;
      const data = await API.badges.read(badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  handleOnDeleteBadge = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      let badgeId = this.props.match.params.badgeId;
      await API.badges.remove(badgeId);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error.message} />;
    }
    return (
      <BadgeDetails
        badge={this.state.data}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleOnDeleteBadge}
      />
    );
  }
}

export default BadgeEditContainer;
