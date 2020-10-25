import * as yup from 'yup';

export const blogSchema = yup.object().shape({
    header: yup
        .string()
        .min(3, 'Heading has to be longer than 3 characters!')
        .required('Heading is required!'),
    body: yup
        .string()
        .min(3, 'Body has to be longer than 3 characters!')
        .required('Body is required!')
});

export const loginSchema = yup.object().shape({
    emailId: yup
        .string()
        .email('Email is Invalid')
        .required('Email is required!'),
    password: yup.string().required('Password is required!')
});

export const RegisterSchema = yup.object().shape({
    emailId: yup
        .string()
        .email('Email is Invalid')
        .required('Email is required!'),
    password: yup.string().required('Password is required!'),
    firstName: yup
    .string()
    .required('First Name is required!'),
    password: yup.string().required('Password is required!'),
    lastName: yup
    .string()
    .required('Last Name is required!')
});