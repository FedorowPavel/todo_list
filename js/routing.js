const listRoutePattern = /^\/list\/\d+$/;
import renderList from './render/render-list.js';
import renderLists from './render/render-lists.js';

const INDEX_URLS = ['/', 'iundex.html'];

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
}

export function navigateToUrl(url) {
    window.history.pushState(
        {},
        url,
        window.location.origin + url
    );

    renderPage();
}