import React from "react";
import { connect } from "react-redux";
import PropType from "prop-types";

const TodoList = (props) => (
  <ul>
    {props.todo.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
TodoList.propTypes = {
  todo: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      text: PropType.string,
    })
  ).isRequired,
};
const mapStateToProps = (state) => ({
  todo: state.todos,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps)(TodoList);
