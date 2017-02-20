const React = require('react');

class Keypad extends React.Component {
  constructor (props) {
    super ()
    this.screenText = this.handlePassword.bind(this);
  }

handlePassword () {
  console.log('Entering password...');
}

render () {
  return (
    <input type='password' onKeyUp={this.screenText} />
  )
}

}

module.exports = Keypad;
