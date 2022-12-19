import './App.css';

import React from 'react';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "swordfish",
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth,
    });
  }

  render() {
    let header;
    let login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );
    const contactInfo = (
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    );

    if (!this.state.authorized) {
      header = <h1>Enter the Password</h1>;
    } else {
      header = <h1>Contact</h1>;
    }
    return (
      <div id="authorization">
        <h1>{header}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );  
  }
}


export default Contact;
