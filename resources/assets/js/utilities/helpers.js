import axios from 'axios';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="jwt-token"]');

if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://jwt.io/ OR https://laracasts.com/discuss/channels/lumen/csrf-token-in-lumen-54');
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios;