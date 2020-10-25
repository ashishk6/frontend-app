import React from 'react';
import { Formik, Form, Field } from 'formik';
import { RegisterSchema } from '../../../schemas/blog-schema';
import { TextField } from '../text-field/text-field';
import logoUrl from '../container/logo.svg';

import './registrationForm.css';

export const RegistrationForm = ({ onSubmit, title }) => (
    <section className="register-form">
        <h1>
            <img className="header-logo-image" src={logoUrl} alt="logo" />
            {title}
        </h1>
        <Formik validationSchema={RegisterSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => (
                <Form>
                      <Field
                        name="firstName"
                        render={({ field }) => (
                            <TextField
                                error={errors[field.name]}
                                touched={touched[field.name]}
                                title="First Name"
                                field={{
                                    ...field,
                                    'data-testid': 'first-name'
                                }}
                            />
                        )}
                    />
                    <Field
                        name="lastName"
                        render={({ field }) => (
                            <TextField
                                error={errors[field.name]}
                                touched={touched[field.name]}
                                title="Last Name"
                                field={{
                                    ...field,
                                    'data-testid': 'last-name'
                                }}
                            />
                        )}
                    />
                    <Field
                        name="emailId"
                        render={({ field }) => (
                            <TextField
                                error={errors[field.name]}
                                touched={touched[field.name]}
                                title="Email"
                                field={{
                                    ...field,
                                    'data-testid': 'email-input'
                                }}
                            />
                        )}
                    />
                    <Field
                        name="password"
                        render={({ field }) => (
                            <TextField
                                error={errors[field.name]}
                                touched={touched[field.name]}
                                title="Password"
                                type="password"
                                field={{
                                    ...field,
                                    'data-testid': 'password-input'
                                }}
                            />
                        )}
                    />
                    <div className="register-form-buttons">
                        <button
                            className="button-primary"
                            type="submit"
                            data-testid="submit"
                        >
                            Register
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </section>
);
