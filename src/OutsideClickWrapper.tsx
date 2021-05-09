import React, { Component } from 'react'

interface Props {
    style?: React.CSSProperties,
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    onOutsideClick: (event: MouseEvent) => void,
}
interface State {
    
}

export default class OutsideClickWrapper extends Component<Props, State> {
    state = {}

    isOnClickTriggered = false;
    outsideClickRef = React.createRef<HTMLDivElement>();

    componentDidMount = () => {
        document.addEventListener("click", (event) => this.handleClickEvent(event));
      };
    
      componentWillUnmount = () => {
        document.removeEventListener("click", (event) => this.handleClickEvent(event));
      };

      handleClickEvent = (event:MouseEvent) => {
        if (this.isOnClickTriggered) {
          // cases when state change happens on onClick and then outside Ref consider the newly rendered items as outside elements
          // do not trigger this if onClick has already been triggered
    
          this.isOnClickTriggered = false; // for next interations
          return;
        }
        if (event.target instanceof HTMLElement && !this.outsideClickRef.current?.contains(event.target)) {
          this.props.onOutsideClick(event);
        }
      };

    handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!this.isOnClickTriggered) {
          this.isOnClickTriggered = true;
        }
        if (typeof this.props.onClick === "function") {
          this.props.onClick(event);
        }
      };
    
    render() {
        return (
            <div
        ref={this.outsideClickRef}
        style={{ ...this.props.style }}
        className={this.props.className}
        onClick={(event) => this.handleOnClick(event)}
      >
        {this.props.children}
      </div>
        )
    }
}
