import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

const navClicks = (liObj, navArr) => {
  if (liObj.isActive) {
    liObj.isActive = false;
    navArr.forEach(item => {
      item.link.classList.remove('siteheader-nav-active');
      item.subnav.classList.remove('siteheader-nav-active');
    });
  } else {
    navArr.forEach(item => {
      if (item.index === liObj.index) {
        liObj.isActive = true;
        item.link.classList.add('siteheader-nav-active');
        item.subnav.classList.add('siteheader-nav-active');
      } else {
        item.isActive = false;
        item.link.classList.remove('siteheader-nav-active');
        item.subnav.classList.remove('siteheader-nav-active');
      }
    });
  }
};

const addEvents = (thisBlock) => {
  const loginWrapEl = thisBlock.querySelector('.siteheader-login-wrapper-cta');
  const loginCtaEl = loginWrapEl?.querySelector('button');

  loginCtaEl?.addEventListener('click', () => {
      if (loginWrapEl.classList.contains('siteheader-login-wrapper-cta-active')) {
          loginWrapEl.classList.remove('siteheader-login-wrapper-cta-active');
      } else {
          loginWrapEl.classList.add('siteheader-login-wrapper-cta-active');
      }
  });

  const navArr = [];
  const l0Links = Array.from(thisBlock.querySelectorAll('.siteheader-has-subnav'));
  l0Links.forEach((link, index) => {
    navArr.push({
      index,
      isActive: false,
      link,
      subnav: link.nextElementSibling,
    })
  });
  navArr.forEach(liObj => {
    liObj.link.addEventListener('click', (event) => {
      event.preventDefault();
      navClicks(liObj, navArr);
    });
  });
};

const formMainNavigation = (thisBlock, navUl, navCtaEl) => {
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
  l0Li.forEach(l0El => {
    const l1Ul = l0El.querySelector('ul');
    if (l1Ul) {
      const l0ElSpan = document.createElement('span');
      l0ElSpan.className = 'icon icon-solid--chevron-down';
      l0ElSpan.innerHTML = '<i class="fa-solid fa-chevron-down" data-icon-name="solid--chevron-down"></i>';
      
      const l0Anchor = l0El.querySelector('a');
      l0Anchor.classList.add('siteheader-has-subnav');
      l0Anchor.append(l0ElSpan);
      const ulWrap = document.createElement('div');
      l1Ul.parentNode.insertBefore(ulWrap, l1Ul);
      ulWrap.appendChild(l1Ul);
    }
  });

  mobileBtnWrapperEl.append(navEl);

  addEvents(thisBlock);
};

const formMainHeader = (thisBlock, headerFragment) => {
  const headerWrapper = thisBlock.closest('.header-wrapper');

  if (headerFragment) {
    const [
      logoInfo,
      searchInfo,
      searchToggle,
      loginInfo,
      logoutInfo,
    ] = Array.from(headerFragment.querySelector('.siteheader > div:first-child').children);

    const [navCtaEl] = Array.from(headerFragment.querySelector('.siteheader > div:nth-child(2)').children);

    const [navUlEl] = Array.from(headerFragment.querySelector('.siteheader > div:last-child').children);
    const navUl = navUlEl?.querySelector('ul');

    const navMaskEl = document.createElement('div');
    navMaskEl.className = 'siteheader-mask';

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
            <div class='siteheader-search-content'>
                    <form action='/' id='siteheader-search-form'>
                        <div class='siteheader-search-input-wrapper'>
                            <label for='siteheader-search-input'>${
                              searchInfo.querySelector('p:first-child em')
                                .innerHTML
                            }</label>
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
      headerWrapper.parentNode.insertBefore(paddingEl, headerWrapper);
    }

    if (navUl && navCtaEl) {
      formMainNavigation(thisBlock, navUl, navCtaEl);
    }
  }
};

export default async function decorate(block) {
  const thisBlock = block;
  const siteHeaderMeta = getMetadata('/header-fragments/siteheader-fragment');
  const siteHeaderPath = siteHeaderMeta
    ? new URL(siteHeaderMeta, window.location).pathname
    : '/header-fragments/siteheader-fragment';

  const fragment = await loadFragment(siteHeaderPath);

  const headerFragment = fragment.querySelector('.siteheader-container');

  if (headerFragment) {
    formMainHeader(thisBlock, headerFragment);
  }
}
