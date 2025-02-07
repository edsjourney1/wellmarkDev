import { fetchPlaceholders, getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {

    const thisBlock = block;
    const siteHeaderMeta = getMetadata('siteheader');
    const siteHeaderPath = siteHeaderMeta ? new URL(siteHeaderMeta, window.location).pathname : '/siteheader';
    const fragment = await loadFragment(siteHeaderPath);
    const headerFragment = fragment.querySelector('.siteheader-container');

    console.log("----------siteHeaderPath 2", siteHeaderPath);

    if (headerFragment) {
        const [logoInfo, searchInfo, loginInfo, logoutInfo, mobileInfo] = Array.from(headerFragment.querySelector('.siteheader > div').children);

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

        let searchWrapperStr = '';
        // if (searchInfo) {
        //     searchWrapperStr = `<div class='siteheader-search-wrapper'>
        //         <form action='/' id='siteheader-search-form'>
        //             <div class='siteheader-search-input-wrapper'>
        //                 <label for='siteheader-search-input'>${searchInfo.querySelector('em:first-child').innerHTML}</label>
        //                 <input type='search' id='siteheader-search-input' placeholder='${searchInfo.querySelector('em').innerHTML}'/>
        //                 ${searchInfo.querySelector('em:last-child').innerHTML}
        //             </div>
        //         </form>
        //     </div>`;
        // }
        
        let loginWrapperStr = '';
        if (loginInfo) {
            loginWrapperStr = `<div class='siteheader-login-wrapper'>
                <button type='button'>
                    <div class='siteheader-login-toggle-icon'></div>
                    <span>${loginInfo.querySelector('p').innerHTML}</span>
                </button>
            </div>`;
        }

        let logoutWrapperStr = '';
        if (logoutInfo) {
            logoutWrapperStr = `<div class='siteheader-login-wrapper'>
                <button type='button'>
                    <div class='siteheader-login-toggle-icon'></div>
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

        headerFragment.innerHTML = logoWrapperStr + searchWrapperStr + loginWrapperStr + logoutWrapperStr + mobileBtnStr;
        
        thisBlock.append(headerFragment);
        thisBlock.closest('.siteheader-wrapper').append(navMaskEl);
    }
}
