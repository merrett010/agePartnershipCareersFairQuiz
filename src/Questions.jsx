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
                    "correct": false
                },
                {
                    "answer": null,
                    "correct": false
                },
                {
                    "answer": null,
                    "correct": false
                },
                {
                    "answer": null
                }
            ],
            correctAnswers: 0,
            currentQuestion: 0,
            userEmail: '',
            userName: '',
            consent: true
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

    calculateScore() {
        let score = 0;
        if(this.state.questions[0].answer == '2') {
            score+=1;
            var qState = this.state.questions;
            qState[0].correct = true;
            this.setState({qState});
        }
        if(this.state.questions[1].answer == '4') {
            score+=1;
            var qState = this.state.questions;
            qState[1].correct = true;
            this.setState({qState});
        }
        if(this.state.questions[2].answer === '4') {
            score+=1;
            var qState = this.state.questions;
            qState[2].correct = true;
            this.setState({qState});
        }
        this.setState({correctAnswers: score, currentQuestion: this.state.currentQuestion + 1}, function() {
            socket.emit('formComplete', this.state);
        });
    }

    handleComplete() {
        var resetState = {
            questions: [
                {
                    "answer": null,
                    "correct": false
                },
                {
                    "answer": null,
                    "correct": false
                },
                {
                    "answer": null,
                    "correct": false
                },
                {
                    "answer": null
                }
            ],
            correctAnswers: 0,
            currentQuestion: 0,
            userEmail: '',
            userName: '',
            consent: false
        };
        this.setState(resetState);
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
                         ? <Question4 updateAnswer = {update => this.updateAnswer(update)} />
                         : null
                }
                { this.state.currentQuestion === 5
                     ? <div>
                         <Question5 />
                         <div>
                             {this.state.correctAnswers}
                         </div>
                         <div className="button-row">
                           <button className="next-q-button" type="button" onClick = {() => this.handleComplete()}>Restart <i className="fa fa-chevron-right"></i></button>
                         </div>
                     </div>
                     : <div>
                           <div className="button-row">
                               {this.state.currentQuestion !== 0
                                   ? <button className="back-button" type="button" onClick = {() => this.setState({currentQuestion: this.state.currentQuestion - 1})}><i className="fa fa-chevron-left"></i> Back</button>
                                   : null
                               }
                               { this.state.currentQuestion !== 4
                                ? <button className="next-q-button" type="button" onClick = {() => this.setState({currentQuestion: this.state.currentQuestion + 1})}>Next Question <i className="fa fa-chevron-right"></i></button>
                                : <button className="next-q-button" type="button" onClick = {() => this.calculateScore()}>Finish <i className="fa fa-chevron-right"></i></button>
                               }
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
                    <input className="font16" id="consent" type="checkbox" name="consent" onChange={props.updateCon} value={props.consent} checked={props.consent}/>
                </div>
            </div>
        </div>
    );
}

function Question1(props) {
    return (
        <div>
            <h3 className="question-title"><span className="bold">Q1:</span> Sally likes fizzy drinks very much. At the local supermarket, for every 5 empty bottles she returns, she gets a full bottle. <br/><br/>As part of a recycling initiative, she finds 77 empty bottles. How many bottles full of fizzy drink will she be able to get in total?</h3>
                <div className="answer-block">
                <div className="answer-option">
                    <label htmlFor="answer-one">15</label>
                    <input
                        id="answer-one"
                        type="radio"
                        name="answer"
                        value="1"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-two">19</label>
                    <input
                        id="answer-two"
                        type="radio"
                        name="answer"
                        value="2"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-three">18</label>
                    <input
                        id="answer-three"
                        type="radio"
                        name="answer"
                        value="3"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-four">17</label>
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
            <h3 className="question-title"><span className="bold">Q2:</span>  A number of children are standing in a circle. They are evenly spaced and the 7th child is directly opposite the 18th child. How many children are there altogether?</h3>
            <div className="answer-block">
                <div className="answer-option">
                    <label htmlFor="answer-one">23</label>
                    <input
                        id="answer-one"
                        type="radio"
                        name="answer"
                        value="1"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-two">25</label>
                    <input
                        id="answer-two"
                        type="radio"
                        name="answer"
                        value="2"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-three">24</label>
                    <input
                        id="answer-three"
                        type="radio"
                        name="answer"
                        value="3"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-four">22</label>
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
            <h3 className="question-title"><span className="bold">Q3:</span>  Whilst filling an empty barrel with water, which happens first? </h3>
            <div className="answer-block">
                <div className="answer-option">
                    <label htmlFor="answer-one">2/3 full</label>
                    <input
                        id="answer-one"
                        type="radio"
                        name="answer"
                        value="1"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-two">1/4 empty</label>
                    <input
                        id="answer-two"
                        type="radio"
                        name="answer"
                        value="2"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-three">1/2 full</label>
                    <input
                        id="answer-three"
                        type="radio"
                        name="answer"
                        value="3"
                        onChange={props.updateAnswer}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-four">3/4 empty</label>
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
            <h3 className="question-title"><span className="bold">Bonus Question:</span>  There are 10 identical bottles of identical pills. 9 of the bottles contain pills that weigh 10mg each but, due to a manufacturing error, 1 bottle contains pills that weigh 11mg each. <br/><br/>Given a weighing scale that you can only use to measure once, how would you find the bottle with the heavier pills? </h3>
            <div className="answer-block">
                <div className="answer-option">
                    <label htmlFor="answer-one">Please outline your answer in the following box:</label>
                    <textarea
                        id="answer-one"
                        className="answer-textbox font16"
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

function Question5(props) {
  return (
    <div>
        <h3 className="question-title">You Scored:</h3>
    </div>
  );
}

export default Questions;
