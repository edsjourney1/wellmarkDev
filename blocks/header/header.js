import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';
import { addEvents } from './addEvents.js';

const formMainNavigation = (
  thisBlock,
  navUl,
  navCtaEl,
  megamenuInfo,
  navMaskEl,
  searchMaskEl
) => {
  const mobileBtnWrapperEl = document.createElement('div');
  mobileBtnWrapperEl.className = 'siteheader-mobile-wrapper';
  mobileBtnWrapperEl.innerHTML = `<button type='button'>
          <div>${navCtaEl.querySelector('p:first-child').innerHTML}</div>
          <div>${navCtaEl.querySelector('p:last-child').innerHTML}</div>
      </button>`;
  thisBlock.append(mobileBtnWrapperEl);

  const navEl = document.createElement('nav');
  navEl.append(navUl);

  const l0Ul = navEl.children[0];
  const l0Li = Array.from(l0Ul.children);
  l0Li.forEach((l0El) => {
    const l1Ul = l0El.querySelector('ul');
    if (l1Ul) {
      const l0ElSpan = document.createElement('span');
      l0ElSpan.className = 'icon icon-solid--chevron-down';
      l0ElSpan.innerHTML =
        '<i class="fa-solid fa-chevron-down" data-icon-name="solid--chevron-down"></i>';

      const l0Anchor = l0El.querySelector('a');
      const currentMegamenuInfo = megamenuInfo.find((infoEl) =>
        infoEl.classList.contains(
          `megamenu-${l0Anchor.innerHTML.split(' ').join('-').toLowerCase()}`
        )
      );

      l0Anchor.classList.add('siteheader-has-subnav');
      l0Anchor.append(l0ElSpan);
      const ulWrap = document.createElement('div');
      ulWrap.className = 'siteheader-subnav';
      l1Ul.parentNode.insertBefore(ulWrap, l1Ul);

      if (currentMegamenuInfo) {
        const megamenuLi = document.createElement('li');
        megamenuLi.className = 'siteheader-subnav-info';
        megamenuLi.append(currentMegamenuInfo.querySelector('h3'));
        currentMegamenuInfo.children[1].classList.add('siteheader-subnav-grid');
        megamenuLi.append(currentMegamenuInfo.children[1]);
        l1Ul.append(megamenuLi);
      }

      const ulWrap2 = document.createElement('div');
      ulWrap.appendChild(ulWrap2);

      const l2Li = Array.from(l1Ul.children);
      l2Li.forEach((l2LiEl) => {
        if (!l2LiEl.classList.contains('siteheader-subnav-info')) {
          const h3El = document.createElement('h3');
          const strongEl = Array.from(l2LiEl.children)[0];
          strongEl.parentNode.insertBefore(h3El, strongEl);
          h3El.append(strongEl);
        }
      });

      ulWrap2.appendChild(l1Ul);
    }
  });

  mobileBtnWrapperEl.append(navEl);

  addEvents(thisBlock, navMaskEl, searchMaskEl);
};

const formMainHeader = (thisBlock, fragment) => {
  const headerWrapper = thisBlock.closest('.header-wrapper');
  const headerFragment = fragment.querySelector('.siteheader-container');

  if (headerFragment) {
    const [logoInfo, searchInfo, searchToggle, loginInfo, logoutInfo] =
      Array.from(
        headerFragment.querySelector('.siteheader.default > div:first-child')
          ?.children
      );

    const [loginHeader, loginBody, loginCta] = Array.from(
      headerFragment.querySelector('.siteheader.megamenu-loginnav')?.children
    );
    const [registerHeader, registerBody] = Array.from(
      headerFragment.querySelector('.siteheader.megamenu-registernav')?.children
    );

    const megamenuInfo = Array.from(
      headerFragment.querySelectorAll('[class^="siteheader megamenu-"]')
    );

    const [navCtaEl] = Array.from(
      headerFragment.querySelector('.siteheader.default > div:nth-child(2)')
        .children
    );
    const [navUlEl] = Array.from(
      headerFragment.querySelector('.siteheader.default > div:nth-child(3)')
        .children
    );
    const navUl = navUlEl?.querySelector('ul');

    const navMaskEl = document.createElement('div');
    navMaskEl.className = 'siteheader-nav-mask';

    const searchMaskEl = document.createElement('div');
    searchMaskEl.className = 'siteheader-search-mask';

    const paddingEl = document.createElement('div');
    paddingEl.className = 'header-padding';

    let logoWrapperStr = '';
    if (logoInfo) {
      logoWrapperStr = `<div class='siteheader-logo-wrapper'>
                <a href='${logoInfo.querySelector('a').getAttribute('href')}'>
                    <img src='${
                      logoInfo.querySelector('a').innerHTML
                    }' alt='Wellmark Logo'>
                </a>
            </div>`;
    }

    const searchSectionStartStr = `<div class='siteheader-right-section'>`;
    const searchSectionEndStr = `</div>`;

    let searchWrapperStr = '';
    if (searchInfo && searchToggle) {
      searchWrapperStr = `<div class='siteheader-search-wrapper'>
            <button type='button' aria-label='Toggle Search'>${
              searchToggle.querySelector('p:first-child').innerHTML
            }
                ${searchToggle.querySelector('p:last-child').innerHTML}</button>
            <div class='siteheader-search-inner'>
                <div class='siteheader-search-content'>
                    <form action='/' id='siteheader-search-form'>
                        <label for='siteheader-search-input'>${
                            searchInfo.querySelector('p:first-child em')
                              .innerHTML
                          }</label>
                        <div class='siteheader-search-input-wrapper'>
                            <input type='search' id='siteheader-search-input' placeholder='${
                              searchInfo.querySelector('p:nth-child(2) em')
                                .innerHTML
                            }'/>
                            <button type='submit' aria-label='Search'>${
                              searchInfo.querySelector('p:last-child em')
                                .innerHTML
                            }</button>
                        </div>
                    </form>
                </div>
            </div>
          </div>`;
    }

    let loginWrapperStr = '';
    let loginFieldsStr = '<form><div>';

    Array.from(loginBody?.children).forEach((el, index) => {
      loginFieldsStr += `<div><label>${el.querySelector('p').innerHTML}</label>`;
      loginFieldsStr += `<input type='${index === 0 ? 'text' : 'password'}'/></div>`;
    });

    loginFieldsStr += `</div><div><button type="submit">${loginCta.children[0].querySelector('p').innerHTML}</button>
      ${loginCta.children[1].querySelector('p').innerHTML}</div></form>`;

    if (loginInfo) {
      loginWrapperStr = `<div class='siteheader-login-wrapper'>
                <div class='siteheader-login-wrapper-cta'>
                    <button type='button'>
                        <span>${loginInfo.querySelector('p').innerHTML}</span>
                    </button>
                </div>
                <div class='siteheader-login-wrapper-outer'>
                  <div class='siteheader-login-wrapper-inner'>
                    <div class='siteheader-login-wrapper-grid'>
                      <div>
                        ${loginHeader.innerHTML}
                        <div class='siteheader-login-fields'>
                          ${loginFieldsStr}
                        </div>
                      </div>
                      <div>
                        ${registerHeader.innerHTML}
                      </div>
                    </div>
                  </div>
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

    headerFragment.innerHTML =
      '<div class="siteheader-outer"><div class="siteheader-inner">' +
      logoWrapperStr +
      searchSectionStartStr +
      searchWrapperStr +
      loginWrapperStr +
      logoutWrapperStr +
      searchSectionEndStr +
      '</div></div>';

    thisBlock.append(headerFragment);

    if (headerWrapper) {
      headerWrapper.parentNode.insertBefore(navMaskEl, headerWrapper);
      headerWrapper.parentNode.insertBefore(searchMaskEl, headerWrapper);
      headerWrapper.parentNode.insertBefore(paddingEl, headerWrapper);
    }

    if (navUl && navCtaEl) {
      formMainNavigation(thisBlock, navUl, navCtaEl, megamenuInfo, navMaskEl, searchMaskEl);
    }
  }
};

export default async function decorate(block) {
  const thisBlock = block;
  const siteHeaderMeta = getMetadata('/header-fragments/siteheader-fragment');
  const siteHeaderPath = siteHeaderMeta
    ? new URL(siteHeaderMeta, window.location).pathname
    : '/header-fragments/siteheader-fragment';

  const thisFragment = await loadFragment(siteHeaderPath);
  formMainHeader(thisBlock, thisFragment);
}
