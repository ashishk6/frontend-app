import { addBlog, removeBlog, editBlog, blogList } from './blog-actions';
import {  BLOG_FETCH_URL, BLOG_ADD_URL, BLOG_EDIT_URL, BLOG_DELETE_URL } from '../../constants/urls';

export function createApiActions(fetch) {
    return {
        addBlogItem(blog) {
            return async dispatch => {
                const response = await fetch(BLOG_ADD_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(blog)
                });
                if (response.status === 200) {
                    dispatch(addBlog(await response.json()));
                } else {
                    throw new Error('Failed to save the blog item');
                }
            };
        },

        removeBlogItem(blog) {
            return async dispatch => {
                const response = await fetch(BLOG_DELETE_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(blog)
                });
                if (response.status === 200) {
                    dispatch(removeBlog(blog));
                } else {
                    throw new Error('Failed to save the delete item');
                }
            };
        },

        editBlogItem(blog) {
            return async dispatch => {
                const response = await fetch(BLOG_EDIT_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(blog)
                });
                if (response.status === 200) {
                    dispatch(editBlog(await response.json()));
                }
            };
        },

        fetchBlogItems() {
            return async dispatch => {
                const response = await fetch(BLOG_FETCH_URL);
                if (response.status === 200) {
                    dispatch(blogList(await response.json()));
                }
            };
        }
    };
}
