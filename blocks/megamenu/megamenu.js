import { fetchPlaceholders, getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
    // load nav as fragment
    const navMeta = getMetadata('nav');
    const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
    const fragment = await loadFragment(navPath);
    const headerFragment = fragment.querySelector('.siteheader-container');

    // const nav = document.createElement('nav');
    // nav.id = 'nav';
    // while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

    // block.append(nav);
    if (headerFragment) {
        const [mobileInfo, logoInfo, searchInfo, loginInfo] = Array.from(headerFragment.querySelector('.siteheader > div').children);
        // console.log("==============mobileInfo", mobileInfo);
        // console.log("==============logoInfo", logoInfo);
        // console.log("==============searchInfo", searchInfo);
        // console.log("==============loginInfo", loginInfo);

        let headerStr = '';
        let mobileBtnStr = '';
        
        if (mobileInfo) {
            mobileBtnStr = `<nav>
                <button type='button'>
                    <div class='siteheader-mobile-toggle-icon'></div>
                    <span>${mobileInfo.children[0].innerHTML}</span>
                    <span>${mobileInfo.children[1].innerHTML}</span>
                </button>
            </nav>`;
        }

        headerStr += mobileBtnStr;

        let logoWrapperStr = '';
        if (logoInfo) {
            logoWrapperStr = `<div class='siteheader-logo-wrapper'>
                <a href='${logoInfo.querySelector('a').getAttribute('href')}'>
                    <img src='${logoInfo.querySelector('a').innerHTML}' alt='Wellmark Logo'>
                </a>
            </div>`;
        }

        let searchWrapperStr = '';
        if (searchInfo) {
            searchWrapperStr = `<div class='siteheader-search-wrapper'>
                <form action='/' id='siteheader-search-form'>
                    <div class='siteheader-search-input-wrapper'>
                        <label for='siteheader-search-input'>${searchInfo.querySelector('em:first-child').innerHTML}</label>
                        <input type='search' id='siteheader-search-input' placeholder='${searchInfo.querySelector('em').innerHTML}'/>
                        ${searchInfo.querySelector('em:last-child').innerHTML}
                    </div>
                </form>
            </div>`;
        }

        headerFragment.innerHTML = headerStr + logoWrapperStr + searchWrapperStr;

        block.append(headerFragment);
    }
}
