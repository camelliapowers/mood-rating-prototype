import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import Slider, { Range } from 'rc-slider';

import "../Shared.scss";
import "./Rating.scss";
import "./Slider.scss";

@observer
export class Rating extends React.Component {
    render() {
        return (
            <div className="pane">
                <div className="pane-head">
                    <div className="nav"></div>
                    <div className="nav member"></div>
                    <div className="nav"></div>
                </div>
                <div className="pane-body">
                    <div className="pane-body">
                        <h4>How are you feeling?</h4>
                        <div className="rate">
                            <div className="rate-title mood">Your Mood</div>
                            <div className="slide-label">{this.moodText}</div>
                            <Slider min={0} max={100} onChange={this.handleChangeMood} value={this.moodValue} />
                            <div className="slice-title">
                                <span className="left">Bad Mood</span>
                                <span className="right">Good Mood</span>
                            </div>
                        </div>
                        <div className="rate">
                            <div className="rate-title stress">Your Stress</div>
                            <div className="slide-label">{this.stressText}</div>
                            <Slider min={0} max={100} onChange={this.handleChangeStress} value={this.stressValue} />
                            <div className="slice-title">
                                <span className="left">High Stress</span>
                                <span className="right">Low Stress</span>
                            </div>
                        </div>
                        <div className="rate">
                            <div className="rate-title energy">Your Energy</div>
                            <div className="slide-label">{this.energyText}</div>
                            <Slider min={0} max={100} onChange={this.handleChangeEnergy} value={this.energyValue} />
                            <div className="slice-title">
                                <span className="left">Low Energy</span>
                                <span className="right">High Energy</span>
                            </div>
                        </div>
                        <button className="button primary" onClick={this.handleUserSubmitClick}>Done</button>
                    </div>
                </div>
            </div>
        );
    }

    handleUserSubmitClick = () => {
        store.currentPage = "thanks";
    }

    handleChangeMood = (value) => {
        this.moodValue = value;
    }
    @observable moodValue = 50;
    get moodText() {
        if (this.moodValue <= 20) {
            return "Bad";
        } else if (this.moodValue <= 40) {
            return "Not So Great";
        } else if (this.moodValue <= 60) {
            return "Ok";
        } else if (this.moodValue <= 80) {
            return "Good";
        } else if (this.moodValue <= 100) {
            return "Great!";
        }
    }

    handleChangeStress = (value) => {
        this.stressValue = value;
    }
    @observable stressValue = 80;
    get stressText() {
        if (this.stressValue <= 20) {
            return "Call 911!";
        } else if (this.stressValue <= 40) {
            return "Very Stressed";
        } else if (this.stressValue <= 60) {
            return "Somewhat Stressed";
        } else if (this.stressValue <= 80) {
            return "A Little Stressed";
        } else if (this.stressValue <= 100) {
            return "Super Relaxed";
        }
    }

    handleChangeEnergy = (value) => {
        this.energyValue = value;
    }
    @observable energyValue = 60;
    get energyText() {
        if (this.energyValue <= 20) {
            return "Exhausted";
        } else if (this.energyValue <= 40) {
            return "A Little Tired";
        } else if (this.energyValue <= 60) {
            return "Medium Energy";
        } else if (this.energyValue <= 80) {
            return "Energetic";
        } else if (this.energyValue <= 100) {
            return "5 Cups of Coffee!";
        }
    }

}