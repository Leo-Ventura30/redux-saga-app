import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoriteActions from "../../store/actions/favorites";

export class Main extends Component {
  static propTypes = {
    addFavoritesRequest: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      })
    ).isRequired,
  };

  state = {
    repositoryInput: "",
  };

  handleAddRepository = (e) => {
    e.preventDefault();
    this.props.addFavoritesRequest(this.state.repositoryInput);
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="Repository"
            value={this.state.repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          {this.props.favorites.map((favorite) => (
            <li key={favorite.id}>
              <p>
                <strong key={favorite.name}>{favorite.name}</strong>(
                {favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
