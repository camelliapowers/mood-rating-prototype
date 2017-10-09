import React, { Component } from "react";
import { observer } from "mobx-react";

import "./Notifications.scss";

@observer
export class Notifications extends React.Component {
    render() {
        return (
            <div className="notification-pane" onClick={this.handleFormClick}>
                <div className="arivale-logo"></div>
                <div className="notification-content">
                    <p>Good morning sunshine! <br />How are you feeling today?</p>
                </div>
            </div>
        );
    }

    handleFormClick = () => {
        store.currentPage = "rating";
    }

}