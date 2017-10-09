import React, { Component } from "react";
import { observer } from "mobx-react";

import "../Shared.scss";
import "./Thanks.scss";

@observer
export class Thanks extends React.Component {
    render() {
        return (
            <div className="pane">
                <div className="pane-body">
                    <div className="pane-body" onClick={this.handleDoneClick}>
                        <div className="successful"></div>
                        <h4>Thank you for sharing <br />how you feel.</h4>
                        <p>You have completed 1 of 3 ratings. Your next mood rating is <br /><span className="blue-text">Today</span> at <span className="blue-text">5:00 PM</span></p>
                        <p>See you then!</p>
                    </div>
                </div>
            </div>
        );
    }
    handleDoneClick = () => {
        store.currentPage = "landing";
    }

}