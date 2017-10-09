import React, { Component } from "react";
import { observer } from "mobx-react";

import "./Shared.scss";
import "./Main.scss";

@observer
export class Landing extends React.Component {
    render() {
        return (
            <div className="container-landing" >
                <div className="landing-nav">
                    <button className="button primary" onClick={this.handleUserViewClick}>Members</button>
                    <button className="button secondary" onClick={this.handleCoachViewClick}>Coaches</button>
                </div>
            </div>
        );
    }

    handleUserViewClick = () => {
        store.currentPage = "notifications";
    }

    handleCoachViewClick = () => {
        store.currentPage = "userList";
    }

}