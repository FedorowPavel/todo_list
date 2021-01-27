const listRoutePattern = /^\/list\/\d+$/;
import renderList from './render/render-list.js';
import renderLists from './render/render-lists.js';
import renderRegistration from './render/render-registration.js';
import renderLogIn from './render/render-login.js';

const INDEX_URLS = ['/', 'iundex.html'];
const REGISTRATION_URL = '/registration';
const LOGIN_URL = '/login';

export function renderPage() {
    const { pathname: currentUrl } = window.location;



    if (INDEX_URLS.includes(currentUrl)) {
        renderLists()
        return;
    }


    if (listRoutePattern.test(currentUrl)) {
        renderList();
        return;
    }

    if (currentUrl === REGISTRATION_URL) {
        renderRegistration();
    }

    if (currentUrl === LOGIN_URL) {
        renderLogIn();
    }

}

export function navigateToUrl(url) {
    window.history.pushState(
        {},
        url,
        window.location.origin + url
    );

    renderPage();
}