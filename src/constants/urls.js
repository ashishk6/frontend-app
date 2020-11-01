const BACKEND_ENDPOINT_TEMP = 'http://backend-app-captaintcs.redhat-hackathon-ocp-a39cdf59c11fe9ef74002319618f3999-0000.eu-gb.containers.appdomain.cloud/';
const BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT || BACKEND_ENDPOINT_TEMP;
console.log("REACT_APP_BACKEND_ENDPOINT",BACKEND_ENDPOINT)

export const BLOG_FETCH_URL = BACKEND_ENDPOINT + 'blog/getBlogDetails';
export const BLOG_ADD_URL =  BACKEND_ENDPOINT + 'blog/saveBlog';
export const BLOG_EDIT_URL =  BACKEND_ENDPOINT + 'blog/editBlog';
export const BLOG_DELETE_URL = BACKEND_ENDPOINT + 'blog/deleteBlog';
export const BLOG_LOGIN_URL = BACKEND_ENDPOINT + 'user/login';
export const BLOG_REGISTER_URL = BACKEND_ENDPOINT + 'user/registerUser';
