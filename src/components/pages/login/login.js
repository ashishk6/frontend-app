import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LoginForm } from '../../elements/login-form/login-form';
import { blogApiActions } from '../../../redux/blog/blog-actions';

class LoginBase extends React.Component {
    componentDidUpdate() {
        if(this.props.isLoginSuccess) {
            this.props.history.push('/blogs');
        }
    }

    login = async values => {
        try {
            await this.props.loginBlog(values);
        } catch (err) {
            console.log(err);
        }
       
    };
    render() {
        const {isLoginSuccess,isFreshLogin} = this.props;
        return (
            <div className="container">
                <main className="content">
                    {' '}
                    <LoginForm onSubmit={this.login} isLoginSuccess = {isLoginSuccess} isFreshLogin={isFreshLogin} title="Login" />
                </main>
                <footer className="footer">
                    Copyright &copy; 2020 rights reserved
                </footer>
            </div>
        );
    }
}


export const Login = withRouter(
    connect(
        state => ({
            isLoginSuccess: state.blog.isLoginSuccess,
            isFreshLogin: state.blog.isFreshLogin
        }),
        {
            loginBlog: blogApiActions.login
        }
    )(LoginBase)
);
