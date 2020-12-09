import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoriteActions from "../../store/actions/favorites";
import { increment, decrement } from "../../store/actions/count";
export class Main extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    addFavoritesRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
        })
      ),
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };

  state = {
    repositoryInput: "",
  };

  handleAddRepository = (e) => {
    e.preventDefault();
    this.props.favorites.error = "";
    this.props.addFavoritesRequest(this.state.repositoryInput);
    this.setState({ repositoryInput: "" });
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
          {this.props.favorites.loading && <span>Carregando...</span>}
          {this.props.favorites.error && (
            <span>{this.props.favorites.error}</span>
          )}
        </form>
        <ul>
          {this.props.favorites.data.map((favorite) => (
            <li key={favorite.id}>
              <p>
                <strong key={favorite.name}>{favorite.name}</strong>(
                {favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => this.props.increment()}>+</button>
          <h1>{this.props.count}</h1>
          <button onClick={() => this.props.decrement()}>-</button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  count: state.count,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...FavoriteActions, increment, decrement }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
