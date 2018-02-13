import React, { Component } from 'react';


class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qOneAnswer: 0,
            qTwoAnswer: 0,
            qThreeAnswer: 0,
            qFourAnswer: 0,
            correctAnswers: 0,
            currentQuestion: 1
        };
    }

    updateAnswer1(update) {
        this.setState({qOneAnswer: update.target.value});
    }

    updateAnswer2(update) {
        this.setState({qTwoAnswer: update.target.value});
    }

    render() {
        return (
            <div>
                <Question1
                    currentQuestion = {this.state.currentQuestion}
                    updateAnswer1 = {update => this.updateAnswer1(update)}
                />
                <Question2
                    currentQuestion = {this.state.currentQuestion}
                    updateAnswer2 = {update => this.updateAnswer2(update)}
                />
                <div className="button-row">
                    <button className="next-q-button" type="button" onClick = {() => this.setState({currentQuestion: this.state.currentQuestion + 1})}>Next Question <i className="fa fa-chevron-right"></i></button>
                </div>
            </div>
        );
    }
}

function Question1(props) {
    if (props.currentQuestion == 1){
        return (
            <div>
                <h2 className="question-title">Question 1: THIS IS QUESTION ONE</h2>
                    <div className="answer-block">
                    <div className="answer-option">
                        <label htmlFor="answer-one">Yes</label>
                        <input
                            id="answer-one"
                            type="radio"
                            name="answer"
                            value="1"
                            onChange={props.updateAnswer1}
                        />
                    </div>
                    <div className="answer-option">
                        <label htmlFor="answer-two">Maybe</label>
                        <input
                            id="answer-two"
                            type="radio"
                            name="answer"
                            value="2"
                            onChange={props.updateAnswer1}
                        />
                    </div>
                    <div className="answer-option">
                        <label htmlFor="answer-three">Yes3</label>
                        <input
                            id="answer-three"
                            type="radio"
                            name="answer"
                            value="3"
                            onChange={props.updateAnswer1}
                        />
                    </div>
                    <div className="answer-option">
                        <label htmlFor="answer-four">No!</label>
                        <input
                            id="answer-four"
                            type="radio"
                            name="answer"
                            value="4"
                            onChange={props.updateAnswer1}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

function Question2(props) {
    if (props.currentQuestion == 2){
        return (
            <div>
                <h2 className="question-title">Question 2: Test Q2 </h2>
                <div className="answer-block">
                    <div className="answer-option">
                        <label htmlFor="answer-one">Yes</label>
                        <input
                            id="answer-one"
                            type="radio"
                            name="answer"
                            value="1"
                            onChange={props.updateAnswer2}
                        />
                    </div>
                    <div className="answer-option">
                        <label htmlFor="answer-two">Maybe</label>
                        <input
                            id="answer-two"
                            type="radio"
                            name="answer"
                            value="2"
                            onChange={props.updateAnswer2}
                        />
                    </div>
                    <div className="answer-option">
                        <label htmlFor="answer-three">Yes3</label>
                        <input
                            id="answer-three"
                            type="radio"
                            name="answer"
                            value="3"
                            onChange={props.updateAnswer2}
                        />
                    </div>
                    <div className="answer-option">
                        <label htmlFor="answer-four">No!</label>
                        <input
                            id="answer-four"
                            type="radio"
                            name="answer"
                            value="4"
                            onChange={props.updateAnswer2}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default Questions;












