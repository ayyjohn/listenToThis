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
        <div className="splash-page-container">
          <nav className="splash-nav-bar">
            <section className="splash-logo">
              <img id="splash-page-logo-image" src="https://s3-us-west-1.amazonaws.com/listentothis-dev/white_headphones.png" />
              <h1 className="splash-logo-name">ListenToThis<sup style={{'fontSize':'12px'}}>&copy;</sup></h1>
            </section>
            <section className="splash-buttons">
              <button className="splash-auth-button" id="splash-sign-up" onClick={ this.openSignUpModal }>SIGN UP AND START EXPLORING</button>
              <button className="splash-auth-button" id="splash-log-in" onClick={ this.openLogInModal }>LOG IN</button>
            </section>
            <p className="splash-terms-of-use">By signing up you agree to <span className="guidelines">have an open mind</span> and <span className="guidelines">interact responsibly with others</span></p>
            <div id="horizontal-bar" ></div>
            <p className="splash-try-demo" onClick={ this.openSignUpModal }>Don't want to sign up yet? Try the demo here</p>
          </nav>
          <main className="splash-page-main">
            <section className="splash-tag-line">
              <h1 id="tag-line">Share your music, <br /> find new music</h1>
              <h2 id="sub-tag-line">Listen to unlimited music for free</h2>
              <ul id="what-can-you-do">
                <li><i className="fa fa-check" aria-hidden="true"></i>Upload your favorite tracks for others to find</li>
                <li><i className="fa fa-check" aria-hidden="true"></i>Browse recommendations based on your taste</li>
                <li><i className="fa fa-check" aria-hidden="true"></i>Participate a community dedicated to music</li>
              </ul>
              <button className="splash-auth-button" id="splash-get-started" onClick={ this.openSignUpModal }>GET STARTED</button>
            </section>
          </main>
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
      </div>
    );
  }
}

export default SplashPage;
