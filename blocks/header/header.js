import { fetchPlaceholders, getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
    
    const thisBlock = block;
    const siteHeaderMeta = getMetadata('/header-fragments/siteheader-fragment');
    const siteHeaderPath = siteHeaderMeta ? new URL(siteHeaderMeta, window.location).pathname : '/header-fragments/siteheader-fragment';

    const fragment = await loadFragment(siteHeaderPath);
    const headerFragment = fragment.querySelector('.siteheader-container');

    if (headerFragment) {
        const [logoInfo, searchInfo, searchToggle, loginInfo, logoutInfo, mobileInfo] = Array.from(headerFragment.querySelector('.siteheader > div').children);

        const navMaskEl = document.createElement('div');
        navMaskEl.className = 'siteheader-nav-mask';

        let logoWrapperStr = '';
        if (logoInfo) {
            logoWrapperStr = `<div class='siteheader-logo-wrapper'>
                <a href='${logoInfo.querySelector('a').getAttribute('href')}'>
                    <img src='${logoInfo.querySelector('a').innerHTML}' alt='Wellmark Logo'>
                </a>
            </div>`;
        }

        const searchSectionStartStr = `<div class='siteheader-right-section'>`;
        const searchSectionEndStr = `</div>`;

        let searchWrapperStr = '';
        if (searchInfo && searchToggle) {
            searchWrapperStr = `<div class='siteheader-search-wrapper'>
            <button type='button' aria-label='Toggle Search'>${searchToggle.querySelector('p').innerHTML}</button>
            <div class='siteheader-search-content'>
                    <form action='/' id='siteheader-search-form'>
                        <div class='siteheader-search-input-wrapper'>
                            <label for='siteheader-search-input'>${searchInfo.querySelector('p:first-child em').innerHTML}</label>
                            <input type='search' id='siteheader-search-input' placeholder='${searchInfo.querySelector('p:nth-child(2) em').innerHTML}'/>
                            <button type='submit' aria-label='Search'>${searchInfo.querySelector('p:last-child em').innerHTML}</button>
                        </div>
                    </form>
                </div>
            </div>`;
        }
        
        let loginWrapperStr = '';
        if (loginInfo) {
            loginWrapperStr = `<div class='siteheader-login-wrapper'>
                <div class='siteheader-login-wrapper-cta'>
                    <button type='button'>
                        <span>${loginInfo.querySelector('p').innerHTML}</span>
                    </button>
                </div>
            </div>`;
        }

        let logoutWrapperStr = '';
        if (logoutInfo) {
            logoutWrapperStr = `<div class='siteheader-logout-wrapper siteheader-logout-wrapper-hidden'>
                <button type='button'>
                    <span>${logoutInfo.querySelector('p').innerHTML}</span>
                </button>
            </div>`;
        }

        let mobileBtnStr = '';
        if (mobileInfo) {
            mobileBtnStr = `<div class='siteheader-mobile-wrapper'>
                <button type='button'>
                    <div class='siteheader-mobile-toggle-icon'></div>
                    <span>${mobileInfo.children[0].innerHTML}</span>
                    <span>${mobileInfo.children[1].innerHTML}</span>
                </button>
            </div>`;
        }

        headerFragment.innerHTML = logoWrapperStr
            + searchSectionStartStr
            + searchWrapperStr
            + loginWrapperStr
            + logoutWrapperStr
            + searchSectionEndStr
            + mobileBtnStr;
        
        thisBlock.append(headerFragment);
        thisBlock.closest('.header-wrapper').append(navMaskEl);

        const loginWrapEl = thisBlock.querySelector('.siteheader-login-wrapper-cta');
        const loginCtaEl = loginWrapEl?.querySelector('button');

        loginCtaEl?.addEventListener('click', () => {
            if (loginWrapEl.classList.contains('siteheader-login-wrapper-cta-active')) {
                loginWrapEl.classList.remove('siteheader-login-wrapper-cta-active');
            } else {
                loginWrapEl.classList.add('siteheader-login-wrapper-cta-active');
            }
        });
    }
}
