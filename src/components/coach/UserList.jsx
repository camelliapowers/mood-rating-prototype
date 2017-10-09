import React, { Component } from "react";
import { observer } from "mobx-react";

import "../Shared.scss";
import "./UserList.scss";

@observer
export class UserList extends React.Component {
    render() {
        return (
            <div className="pane">
                <div className="pane-head">
                    <div className="left">My Members</div>
                </div>
                <div className="pane-body">
                    <ul>
                        <li className="user" onClick={this.handleSummaryClick}>
                            <div className="user-pic russell"><span className="badge">1</span></div>
                            <div className="user-name">
                                <p>Russell Wilson</p>
                                <p className="status">Last Seen: Today, 8 AM</p>
                            </div>
                        </li>
                        <li className="user">
                            <div className="user-pic me"></div>
                            <div className="user-name">
                                <p>Tunchanog Powers</p>
                                <p className="status">Last Seen: Last Week</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    handleSummaryClick = () => {
        store.currentPage = "summary";
    }
}