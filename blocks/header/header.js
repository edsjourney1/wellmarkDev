import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

const formMainNavigation = (thisBlock, navUl, navCtaEl) => {

  console.log('============thisBlock', thisBlock);
  const mobileBtnWrapperEl = document.createElement('div');
  mobileBtnWrapperEl.className = 'siteheader-mobile-wrapper';
  mobileBtnWrapperEl.innerHTML = `<button type='button'>
          <div>${navCtaEl.querySelector('p:first-child').innerHTML}</div>
          <div>${navCtaEl.querySelector('p:last-child').innerHTML}</div>
      </button>`;
  thisBlock.append(mobileBtnWrapperEl);

  const navEl = document.createElement('nav');
  navEl.append(navUl);
  thisBlock.append(navEl);
  // const loginWrapEl = thisBlock.querySelector('.siteheader-login-wrapper-cta');
  // const loginCtaEl = loginWrapEl?.querySelector('button');

  // loginCtaEl?.addEventListener('click', () => {
  //     if (loginWrapEl.classList.contains('siteheader-login-wrapper-cta-active')) {
  //         loginWrapEl.classList.remove('siteheader-login-wrapper-cta-active');
  //     } else {
  //         loginWrapEl.classList.add('siteheader-login-wrapper-cta-active');
  //     }
  // });

  // console.log("==============", thisBlock, navUl);
  // console.log('===========navUl', navUl);
  // const navArr = [];
  // const l0li = Array.from(navUl.children);
  // l0li.forEach(l0liEl => {
  //   const l0liObj = {
  //     l0: l0liEl.querySelector('a')
  //   };
  //   if (l0liEl.querySelector('ul')) {
  //     const l1li = Array.from(l0liEl.querySelector('ul').children);
  //     console.log('===========l1li', l1li);
  //   }
  //   navArr.push(l0liObj);
  // });

  // console.log('===============', navArr);
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
