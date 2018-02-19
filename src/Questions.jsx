import React, { Component } from 'react';
import io from 'socket.io-client';
let socket = io();


class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    "answer": null,
                    "validate": null
                },
                {
                    "answer": null,
                    "validate": null
                },
                {
                    "answer": null,
                    "validate": null
                },
                {
                    "answer": null,
                    "validate": null
                }
            ],
            correctAnswers: 0,
            currentQuestion: 0,
            userEmail: '',
            userName: '',
            consent: false
        };
    }


    update(handle) {
        this.setState({[handle.target.name]: handle.target.value})
    }

    updateCon() {
        var con = this.state.consent;
        var toggle = !con;
        this.setState({consent: toggle})
    }

    handleComplete() {
    event.preventDefault();
    socket.emit('formComplete', this.state);
    this.setState({correctAnswers: 0,
                  currentQuestion: 0,
                  userEmail: '',
                  userName: '',
                  consent: false})
    }

    updateAnswer(update) {
        const questions = this.state.questions;
        const qArray = this.state.currentQuestion - 1;
        questions[qArray].answer = update.target.value;
        this.setState({questions});
    }

    render() {
        return (
            <div>
                { this.state.currentQuestion === 0
                    ? <Landing
                        userEmail = {this.state.userEmail}
                        userName = {this.state.userName}
                        consent = {this.state.consent}
                        update = {name => this.update(name)}
                        updateCon = {() => this.updateCon()}
                        />
                    : null
                }
                { this.state.currentQuestion === 1
                    ? <Question1 updateAnswer = {update => this.updateAnswer(update)} />
                    : null
                }
                { this.state.currentQuestion === 2
                    ? <Question2 updateAnswer = {update => this.updateAnswer(update)} />
                    : null
                }
                { this.state.currentQuestion === 3
                    ? <Question3 updateAnswer = {update => this.updateAnswer(update)} />
                    : null
                }
                { this.state.currentQuestion === 4
                    ? <div>
                          <Question4 updateAnswer = {update => this.updateAnswer(update)} />
                          <div className="button-row">
                              <button className="back-button" type="button" onClick = {() => this.setState({currentQuestion: this.state.currentQuestion - 1})}>Back <i className="fa fa-chevron-left"></i></button>
                              <button className="next-q-button" type="button" onClick = {() => this.handleComplete()}>Finish <i className="fa fa-chevron-right"></i></button>
                          </div>
                      </div>
                    : <div>
                          <div className="button-row">
                              {this.state.currentQuestion !== 0
                                  ? <button className="back-button" type="button" onClick = {() => this.setState({currentQuestion: this.state.currentQuestion - 1})}>Back <i className="fa fa-chevron-left"></i></button>
                                  : null
                              }
                              <button className="next-q-button" type="button" onClick = {() => this.setState({currentQuestion: this.state.currentQuestion + 1})}>Next Question <i className="fa fa-chevron-right"></i></button>
                          </div>
                      </div>
                }
            </div>
        );
    }
}

function Landing(props) {
    return (
        <div>
            <h2 className="central-block gutter-bottom-30">Please fill out the form to get started! </h2>
            <div className="central-block">
                <div className="gutter-bottom-10">
                    <label className="font16" htmlFor="nameInput">Name: </label>
                    <input className="font16" id="nameInput" type="text" name="userName" onChange={props.update} value={props.userName}/>
                </div>
                <div className="gutter-bottom-10">
                    <label className="font16" htmlFor="emailInput">Email: </label>
                    <input className="font16" id="emailInput" type="email" name="userEmail" onChange={props.update} value={props.userEmail}/>
                </div>
                <div className="gutter-bottom-10">
                    <label className="font16" htmlFor="consent">Are you happy for us to use your details and answers to contact you about opportunities at Age Partnership? </label>
                    <input className="font16" id="consent" type="checkbox" name="consent" onClick={props.updateCon} value={props.consent}/>
                </div>
            </div>
        </div>
    );
}

function Question1(props) {
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
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-two">Maybe</label>
                    <input
                        id="answer-two"
                        type="radio"
                        name="answer"
                        value="2"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-three">Yes3</label>
                    <input
                        id="answer-three"
                        type="radio"
                        name="answer"
                        value="3"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-four">No!</label>
                    <input
                        id="answer-four"
                        type="radio"
                        name="answer"
                        value="4"
                        onChange={props.updateAnswer}
                    />
                </div>
            </div>
        </div>
    );
}

function Question2(props) {
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
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-two">Maybe</label>
                    <input
                        id="answer-two"
                        type="radio"
                        name="answer"
                        value="2"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-three">Yes3</label>
                    <input
                        id="answer-three"
                        type="radio"
                        name="answer"
                        value="3"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-four">No!</label>
                    <input
                        id="answer-four"
                        type="radio"
                        name="answer"
                        value="4"
                        onChange={props.updateAnswer}
                    />
                </div>
            </div>
        </div>
    );
}

function Question3(props) {
    return (
        <div>
            <h2 className="question-title">Question 3: DONT QUESTION THE QUESTION </h2>
            <div className="answer-block">
                <div className="answer-option">
                    <label htmlFor="answer-one">gtfo</label>
                    <input
                        id="answer-one"
                        type="radio"
                        name="answer"
                        value="1"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-two">Maybe</label>
                    <input
                        id="answer-two"
                        type="radio"
                        name="answer"
                        value="2"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-three">1</label>
                    <input
                        id="answer-three"
                        type="radio"
                        name="answer"
                        value="3"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-four">No!</label>
                    <input
                        id="answer-four"
                        type="radio"
                        name="answer"
                        value="4"
                        onChange={props.updateAnswer}
                    />
                </div>
            </div>
        </div>
    );
}

function Question4(props) {
    return (
        <div>
            <h2 className="question-title">Bonus Question! Pills and stuff </h2>
            <div className="answer-block">
                <div className="answer-option">
                    <label htmlFor="answer-one">Please outline your answer in the following box:</label>
                    <textarea
                        id="answer-one"
                        className="answer-textbox"
                        cols="40"
                        rows="6"
                        type="text"
                        name="answer"
                        onChange={props.updateAnswer}
                    />
                </div>
            </div>
        </div>
    );
}

export default Questions;












