import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

import LogInFormContainer from './log_in_form_container';
import SignUpFormContainer from './sign_up_form_container';


class SplashPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logInModalIsOpen: false,
      signUpModalIsOpen: false,
    };
    this.openLogInModal = this.openLogInModal.bind(this);
    this.closeLogInModal = this.closeLogInModal.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
  }

  openLogInModal() {
    this.setState({ logInModalIsOpen: true });
  }

  closeLogInModal() {
    this.setState({ logInModalIsOpen: false });
  }

  openSignUpModal() {
    this.setState({ signUpModalIsOpen: true });
  }

  closeSignUpModal() {
    this.setState({ signUpModalIsOpen: false });
  }

  componentWillMount() {
    Modal.setAppElement('#root');
  }

  render() {
    return (
      <div className="splash-page">
        <header className="nav-bar">
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
          className="splash-sign-up-modal"
          isOpen={ this.state.signUpModalIsOpen }
          onRequestClose={ this.closeSignUpModal }
          contentLabel="Modal"
          >
          <SignUpFormContainer />
        </Modal>
        <Modal
          className="splash-log-in-modal"
          isOpen={ this.state.logInModalIsOpen }
          onRequestClose={ this.closeLogInModal }
          contentLabel="Modal"
          >
          <LogInFormContainer />
        </Modal>
      </div>
    );
  }
}

export default SplashPage;
