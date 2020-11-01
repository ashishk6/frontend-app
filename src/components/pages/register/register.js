import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { RegistrationForm } from '../../elements/registration-form/registrationForm';
import { blogApiActions } from '../../../redux/blog/blog-actions';

class RegisterBase extends React.Component {
    componentDidUpdate() {
        if(this.props.isRegisterSuccess) {
            this.props.history.push('/');
        }
    }

    register = async values => {
        try {
            await this.props.registerBlog(values);
        } catch (err) {
            console.log(err);
        }
       
    };
    render() {
        return (
            <div className="container">
                <main className="content">
                    {' '}
                    <RegistrationForm onSubmit={this.register} title="Register" />
                </main>
            </div>
        );
    }
}

export const Register = withRouter(
    connect(
        state => ({
            isRegisterSuccess: state.blog.isRegisterSuccess
        }),
        {
            registerBlog: blogApiActions.register
        }
    )(RegisterBase)
);

