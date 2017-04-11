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
    this.setState({ logInModalIsShown: false });
    setTimeout(() => this.setState({ logInModalIsOpen: false }), 800);
  }

  openSignUpModal() {
    this.setState({ signUpModalIsOpen: true });
    setTimeout(() => this.setState({ signUpModalIsShown: true }), 0);
  }

  closeSignUpModal() {
    this.setState({ signUpModalIsShown: false });
    setTimeout(() => this.setState({ signUpModalIsOpen: false }), 800);
  }

  componentWillMount() {
    Modal.setAppElement('#root');
  }

  render() {
    return (
      <div className="splash-page">
        <header className="splash-nav-bar">
          <h1 className="splash-logo"><img id="splash-page-logo-image" src="https://s3-us-west-1.amazonaws.com/listentothis-dev/white_headphones.png" />Listen to This!</h1>
          <section className="splash-buttons">
            <button className="splash-auth-button" onClick={ this.openSignUpModal }>Sign Up</button>
            <button className="splash-auth-button" onClick={ this.openLogInModal }>Log In</button>
          </section>
        </header>
        <section className="splash-tag-line">
          <h1 id="tag-line">Love to Explore Music <br /> Love to Share Music</h1>
          <Link id="splash-get-started" onClick={ this.openSignUpModal }>Get Started</Link>
        </section>
        <Modal
          overlayClassName={ this.state.signUpModalIsShown ? "splash-sign-up-overlay-show" : "splash-sign-up-overlay-hide" }
          className={ this.state.signUpModalIsShown ? "splash-sign-up-modal-show" : "splash-sign-up-modal-hide" }
          isOpen={ this.state.signUpModalIsOpen }
          onRequestClose={ this.closeSignUpModal }
          contentLabel="Modal"
          >
          <SignUpFormContainer />
        </Modal>
        <Modal
          overlayClassName={ this.state.logInModalIsShown? "splash-log-in-overlay-show" : "splash-log-in-overlay-hide" }
          className={this.state.logInModalIsShown ? "splash-log-in-modal-show" : "splash-log-in-modal-hide" }
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
