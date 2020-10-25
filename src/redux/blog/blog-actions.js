import {
    BLOG_UPDATE_LIST,
    BLOG_ADD_ITEM,
    BLOG_EDIT_ITEM,
    BLOG_REMOVE_ITEM,
    BLOG_LOGIN,
    BLOG_REGISTER
} from './blog-constants';
import { createApiActions } from './blog-api';

export function blogList(items) {
    return {
        type: BLOG_UPDATE_LIST,
        payload: items
    };
}

export function addBlog(blog) {
    return {
        type: BLOG_ADD_ITEM,
        payload: blog
    };
}

export function editBlog(blog) {
    return {
        type: BLOG_EDIT_ITEM,
        payload: blog
    };
}

export function removeBlog(blog) {
    return {
        type: BLOG_REMOVE_ITEM,
        payload: blog
    };
}

export function login(loginData) {
    return {
        type: BLOG_LOGIN,
        payload: loginData
    };
}

export function register(registerData) {
    return {
        type: BLOG_REGISTER,
        payload: registerData
    };
}

export const blogApiActions = createApiActions(fetch);
