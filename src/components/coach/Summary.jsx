import React, { Component } from "react";
import { observer } from "mobx-react";
import { LineChart, Line, XAxis } from 'recharts';

import "../Shared.scss";
import "./Summary.scss";

const data = [
    { name: 'Start the day', mood: "0", stress: "0", energy: 0 },
    { name: '8 am', mood: 4500, stress: 1398, energy: 5000 },
    { name: '5 pm', mood: 1700, stress: 9800, energy: 2290 },
    { name: '9 pm', mood: 4500, stress: 1000, energy: 2000 },
];

@observer
export class Summary extends React.Component {
    render() {
        return (
            <div className="pane">
                <div className="pane-head" onClick={this.handleBackClick}>
                    <div className="nav list"></div>
                    <div className="nav member"></div>
                    <div className="nav calender"></div>
                </div>
                <div className="pane-body">
                    <div className="time">
                        <div className="previous"></div>
                        <div className="today">Today</div>
                        <div className="next"></div>
                    </div>
                    <p>Russell Wilson's Mood</p>
                    <div className="graph">
                        <LineChart width={305} height={200} data={data}>
                            <XAxis dataKey="name" />
                            <Line type='monotone' dataKey='mood' stroke='#9bd4e7' strokeWidth={2} />
                            <Line type='monotone' dataKey='stress' stroke='#deb388' strokeWidth={2} />
                            <Line type='monotone' dataKey='energy' stroke='#a0c77a' strokeWidth={2} />
                        </LineChart>
                        <div className="legend left">
                            <div className="note mood"><span>Mood</span></div>
                            <div className="note stress"><span>Stress</span></div>
                            <div className="notes energy"><span>Energy</span></div>
                        </div>
                    </div>
                    <button className="button primary" onClick={this.handleBackClick}>Add Notes</button>
                </div>
            </div>
        );
    }
    handleBackClick = () => {
        store.currentPage = "landing";
    }
}