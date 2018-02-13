import React, { Component } from 'react';
import Question from './Question.jsx';

class Quiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="question-block">
                <Question />
            </div>
        );
    }
}

export default Quiz;