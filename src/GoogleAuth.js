import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from './actions';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1061466115757-p133st8pmes3690urjai4kbmr98rb5p7.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            let name = this.auth.currentUser.get().w3.ig;
            let id = this.auth.currentUser.get().getId();
            this.props.signIn(id,name);
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick}>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick}>
                    Sign In
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);