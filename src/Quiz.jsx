import React, { Component } from 'react';
import Questions from './Questions.jsx';

class Quiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="question-block">
                <Questions />
            </div>
        );
    }
}

export default Quiz;