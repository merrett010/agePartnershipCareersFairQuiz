import React, { Component } from 'react';
import Quiz from './Quiz.jsx';

class App extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <h1 className="banner-text">You shall not pass! ... this quiz</h1>
                <Quiz />
            </div>
        );
    }
}

export default App;