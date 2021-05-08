import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @typedef Props
 * @prop {React.CSSProperties} style
 */

/**
 * OutsideClickWrapper
 * @augments {Component<Props, State>}
 */

export default class OutsideClickWrapper extends Component {
  isOnClickTriggered = false;
  outsideClickRef;

  componentDidMount = () => {
    document.addEventListener("click", this.handleClickEvent);
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleClickEvent);
  };

  handleClickEvent = (event) => {
    if (this.isOnClickTriggered) {
      // cases when state change happens on onClick and then outside Ref consider the newly rendered items as outside elements
      // do not trigger this if onClick has already been triggered

      this.isOnClickTriggered = false; // for next interations
      return;
    }
    if (!this.outsideClickRef.contains(event.target)) {
      this.props.onOutsideClick(event);
    }
  };

  handleOnClick = (event) => {
    if (!this.isOnClickTriggered) {
      this.isOnClickTriggered = true;
    }
    if (typeof this.props.onClick === "function") {
      this.props.onClick(event);
    }
  };

  handleOutsideClickRef = (ref) => {
    this.outsideClickRef = ref;
  };

  render() {
    return (
      <div
        ref={this.handleOutsideClickRef}
        style={{ ...this.props.style }}
        className={this.props.className}
        onClick={this.handleOnClick}
      >
        {this.props.children}
      </div>
    );
  }
}

OutsideClickWrapper.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onOutsideClick: PropTypes.func.isRequired,
};

OutsideClickWrapper.defaultProps = {
  style: {},
  className: "",
};
