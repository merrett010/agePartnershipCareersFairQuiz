import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div class="question-block">
                <h2 class="question-title">Question 1: I saw a girl today who had 12 nipples. Sounds mad, dozen tit?</h2>
                <div class="answer-block">
                    <div class="answer-option">
                        <label for="answer-one">Yes</label>
                        <input
                            id="answer-one"
                            type="radio"
                            name="answer"
                            value="answer-one"
                        />
                    </div>
                    <div class="answer-option">
                        <label for="answer-two">Yes2</label>
                        <input
                            id="answer-two"
                            type="radio"
                            name="answer"
                            value="answer-two"

                        />
                    </div>
                    <div class="answer-option">
                        <label for="answer-three">Yes3</label>
                        <input
                            id="answer-three"
                            type="radio"
                            name="answer"
                            value="answer-three"

                        />
                    </div>
                    <div class="answer-option">
                        <label for="answer-four">No!</label>
                        <input
                            id="answer-four"
                            type="radio"
                            name="answer"
                            value="answer-four"

                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;