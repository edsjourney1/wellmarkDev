import { addEvents } from './addEvents.js';
import { enableAutocomplete, searchBuilder } from './searchBuilder.js';

const generateLoginForm = (loginElArr, formCount) => {
  let str = '';
  loginElArr.forEach((el, index) => {
    str += `<div><label for='${
      index === 0 ? 'username' : 'userpassword'
    }_${formCount}'>${el.querySelector('p:first-child').innerHTML}</label>`;
    str += `<input type='${index === 0 ? 'text' : 'password'}'
        id='${index === 0 ? 'username' : 'userpassword'}_${formCount}'
        name='${index === 0 ? 'username' : 'userpassword'}'/>`;
    str += `<div class='siteheader-login-error' data-error='${
      index === 0 ? 'username' : 'userpassword'
    }_${formCount}'>
          ${el.querySelector('p:last-child').innerHTML}</div></div>`;
  });
  return str;
};

const formMainNavigation = (
  thisBlock,
  navUl,
  navCtaEl,
  megamenuInfo,
  navMaskEl,
  searchMaskEl,
  loginMaskEl,
  loginWrapperMobileStr
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

  const ulWrap2Login = document.createElement('div');
  ulWrap2Login.innerHTML = loginWrapperMobileStr;
  navEl.appendChild(ulWrap2Login);

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

  addEvents(thisBlock, navMaskEl, searchMaskEl, loginMaskEl);
};

export const formMainHeader = (thisBlock, fragment, alertFragment) => {
  const headerWrapper = thisBlock.closest('.header-wrapper');
  const headerFragment = fragment.querySelector('.siteheader.siteheader-default')?.closest('.siteheader-container');

  let blogFragment;

  const urlArr = (new URL(window.location.href).pathname || '').split('/');
  if (urlArr.indexOf('blue') !== -1 ) {
    blogFragment = fragment.querySelector('.siteheader.siteheader-blog-blue')?.closest('.siteheader-container');
  } else if (urlArr.indexOf('blue-at-work') !== -1) {
    blogFragment = fragment.querySelector('.siteheader.siteheader-blog-blue-at-work')?.closest('.siteheader-container');
  }
  // else if (urlArr.indexOf('blueink') !== -1) {}

  console.log("================blogFragment", blogFragment);

  if (headerFragment) {
    const [logoInfo, searchInfo, searchToggle, loginInfo, logoutInfo] =
      Array.from(
        headerFragment.querySelector('.siteheader.siteheader-default > div:first-child')
          ?.children
      );

    const [loginHeader, loginError, loginBody, loginCta, loginMessage] = Array.from(
      headerFragment.querySelector('.siteheader.megamenu-loginnav')?.children
    );
    const [registerHeader, registerBody] = Array.from(
      headerFragment.querySelector('.siteheader.megamenu-registernav')?.children
    );

    const megamenuInfo = Array.from(
      headerFragment.querySelectorAll('[class^="siteheader megamenu-"]')
    );

    const [navCtaEl] = Array.from(
      headerFragment.querySelector('.siteheader.siteheader-default > div:nth-child(2)')
        .children
    );
    const [navUlEl] = Array.from(
      headerFragment.querySelector('.siteheader.siteheader-default > div:nth-child(3)')
        .children
    );

    const navUl = navUlEl?.querySelector('ul');

    const navMaskEl = document.createElement('div');
    navMaskEl.className = 'siteheader-nav-mask';

    const searchMaskEl = document.createElement('div');
    searchMaskEl.className = 'siteheader-search-mask';

    const loginMaskEl = document.createElement('div');
    loginMaskEl.className = 'siteheader-login-mask';

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


    let searchWrapperStr = searchBuilder(searchInfo, searchToggle);

    let loginWrapperDesktopStr = '';
    let loginWrapperMobileStr = '';
    let loginFieldsDesktopStr = '<form><div>';
    let loginFieldsMobileStr = '<form><div>';

    const loginformDesktop = generateLoginForm(
      Array.from(loginBody?.children),
      0
    );
    const loginformMobile = generateLoginForm(
      Array.from(loginBody?.children),
      1
    );

    loginFieldsDesktopStr += `${loginformDesktop}</div><div><button type='submit'>${
      loginCta.children[0].querySelector('p').innerHTML
    }</button>
        ${loginCta.children[1].querySelector('p').innerHTML}</div></form>`;
    loginFieldsMobileStr += `${loginformMobile}</div><div><button type='submit'>${
      loginCta.children[0].querySelector('p').innerHTML
    }</button>
      ${loginCta.children[1].querySelector('p').innerHTML}</div></form>`;

    let loginMsgEl;
    const loginMsgSelector = loginMessage?.children[0]?.querySelector('p');
    let loginMsgStr = '';
    if (loginMsgSelector) {
      loginMsgEl = alertFragment
        ?.querySelector(`.${loginMsgSelector.innerHTML}`)
        ?.closest('.alert-wrapper');
      const loginMsgParent = loginMsgEl?.querySelector('.icon').closest('div');
      Array.from(loginMsgParent.children).forEach((el, index) => {
        if (index !== 0) {
          el.remove();
        }
      });
      loginMsgParent.append(loginMessage?.children[1]);
      loginMsgStr = loginMsgParent.closest('.alert-container').innerHTML;
    }
    let tempElem = '';
    if (loginError) {
      tempElem = document.createElement('div');
      loginError.classList.add('siteheader-login-error');
      tempElem.append(loginError);
    }
    if (loginInfo) {
      loginWrapperMobileStr = `<div class='siteheader-login-wrapper'>
                  <div class='siteheader-login-wrapper-grid'>
                        <div>
                          ${loginMsgStr}
                          ${loginHeader.innerHTML}
                          ${tempElem.innerHTML}
                          <div class='siteheader-login-fields'>
                            ${loginFieldsMobileStr}
                          </div>
                        </div>
                        <div>
                          ${registerHeader.innerHTML}
                          ${registerBody.innerHTML}
                        </div>
                      </div>
              </div>`;
      loginWrapperDesktopStr = `<div class='siteheader-login-wrapper'>
                  <div class='siteheader-login-wrapper-cta'>
                      <button type='button'>
                          <span>${loginInfo.querySelector('p').innerHTML}</span>
                      </button>
                  </div>
                  <div class='siteheader-login-wrapper-outer'>
                    <div class='siteheader-login-wrapper-inner'>
                      <div class='siteheader-login-wrapper-grid'>
                        <div>
                          ${loginMsgStr}
                          ${loginHeader.innerHTML}
                          ${tempElem.innerHTML}
                          <div class='siteheader-login-fields'>
                            ${loginFieldsDesktopStr}
                          </div>
                        </div>
                        <div>
                          ${registerHeader.innerHTML}
                          ${registerBody.innerHTML}
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
      loginWrapperDesktopStr +
      logoutWrapperStr +
      searchSectionEndStr +
      '</div></div>';

    thisBlock.append(headerFragment);

    if (headerWrapper) {
      headerWrapper.parentNode.insertBefore(navMaskEl, headerWrapper);
      headerWrapper.parentNode.insertBefore(searchMaskEl, headerWrapper);
      headerWrapper.parentNode.insertBefore(loginMaskEl, headerWrapper);
      headerWrapper.parentNode.insertBefore(paddingEl, headerWrapper);
    }

    const searchInput = thisBlock.querySelector('#header_search');
    if (searchInput) {
      enableAutocomplete('header_search');
    }

    if (navUl && navCtaEl) {
      formMainNavigation(
        thisBlock,
        navUl,
        navCtaEl,
        megamenuInfo,
        navMaskEl,
        searchMaskEl,
        loginMaskEl,
        loginWrapperMobileStr
      );
    }
  }
};
