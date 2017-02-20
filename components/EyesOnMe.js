const React = require('react');

class EyesOnMe extends React.Component {
  constructor (props) {
    super ()
    this.handlerFocus = this.handlerFocus.bind(this);
    this.handlerBlur = this.handlerBlur.bind(this);
  }

  handlerBlur() {
    console.log('Hey! Eyes on me!');
  }

  handlerFocus() {
    console.log('Good!');
  }

  render () {
    return (
      <button onFocus={this.handlerFocus} onBlur={this.handlerBlur}></button>
    );
  }
}

module.exports = EyesOnMe;
