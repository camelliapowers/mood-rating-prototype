import React, { Component } from "react";
import { observer } from "mobx-react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Landing } from "./Landing";

import { Notifications } from "./member/Notifications";
import { Rating } from "./member/Rating";
import { Thanks } from "./member/Thanks";

import { UserList } from "./coach/UserList";
import { Summary } from "./coach/Summary";

import "./Main.scss";

@observer
export class Main extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.store.currentPage == "landing" && <Landing />}
        {this.props.store.currentPage == "notifications" && <Notifications />}

        <CSSTransitionGroup transitionName="mood" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
          {this.props.store.currentPage == "rating" && <Rating />}
          {this.props.store.currentPage == "thanks" && <Thanks />}
          {this.props.store.currentPage == "userList" && <UserList />}
          {this.props.store.currentPage == "summary" && <Summary />}
        </CSSTransitionGroup>
      </div>
    )
  };

}

