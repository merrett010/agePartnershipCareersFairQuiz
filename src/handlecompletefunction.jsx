
handleComplete() {
event.preventDefault();
socket.emit('formComplete', this.state.questions);
this.setState({correctAnswers: 0,
              currentQuestion: 0,
              userEmail: '',
              userName: '',
              consent: false})
}