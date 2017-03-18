import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

import LogInFormContainer from './log_in_form_container';
import SignUpFormContainer from './sign_up_form_container';

const fadeStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0)'
  }
};

class SplashPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logInModalIsOpen: false,
      signUpModalIsOpen: false,
      logInModalIsShown: false,
      signUpModalIsShown: false
    };
    this.openLogInModal = this.openLogInModal.bind(this);
    this.closeLogInModal = this.closeLogInModal.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
  }

  openLogInModal() {
    this.setState({ logInModalIsOpen: true });
    setTimeout(() => this.setState({ logInModalIsShown: true }), 0);
  }

  closeLogInModal() {
    this.setState({ logInModalIsOpen: false });
    this.setState({ logInModalIsShown: false });
  }

  openSignUpModal() {
    this.setState({ signUpModalIsOpen: true });
    setTimeout(() => this.setState({ signUpModalIsShown: true }), 0);
  }

  closeSignUpModal() {
    this.setState({ signUpModalIsOpen: false });
    this.setState({ signUpModalIsShown: false });
  }

  componentWillMount() {
    Modal.setAppElement('#root');
  }

  render() {
    return (
      <div className="splash-page">
        <header className="splash-nav-bar">
          <h1 className="splash-logo">Listen to This!</h1>
          <section className="splash-buttons">
            <button className="splash-auth-button" onClick={ this.openSignUpModal }>Sign Up</button>
            <button className="splash-auth-button" onClick={ this.openLogInModal }>Log In</button>
          </section>
        </header>
        <section className="splash-tag-line">
          <h1 id="tag-line">Love to Explore. Love to Share</h1>
          <Link id="splash-get-started" onClick={ this.openSignUpModal }>Get Started</Link>
        </section>
        <Modal
          className={ this.state.signUpModalIsShown ? "splash-sign-up-modal-show" : "splash-sign-up-modal-hide" }
          isOpen={ this.state.signUpModalIsOpen }
          onRequestClose={ this.closeSignUpModal }
          contentLabel="Modal"
          style={ fadeStyles }
          >
          <SignUpFormContainer />
        </Modal>
        <Modal
          className={this.state.logInModalIsShown ? "splash-log-in-modal-show" : "splash-log-in-modal-hide" }
          isOpen={ this.state.logInModalIsOpen }
          onRequestClose={ this.closeLogInModal }
          contentLabel="Modal"
          style={ fadeStyles }
          >
          <LogInFormContainer />
        </Modal>
      </div>
    );
  }
}

export default SplashPage;
