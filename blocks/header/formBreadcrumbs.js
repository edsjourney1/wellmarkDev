const buildCrumbs = () => {
  const crumbsArr = [];
  const currentUrl = new URL(window.location.href);
  const urlPath = currentUrl.pathname;
  const urlArr = urlPath.split('/').filter((pathItem) => pathItem.length > 0);
  const isBlog = urlArr.indexOf('blue') > -1 || urlPath.indexOf('blue-at-work') > -1;
  let navParent;

  if (urlArr.length > 1 && isBlog) {
    navParent = document.querySelector('.siteheader-blog .siteheader-blog-menu > ul');
    crumbsArr.push({
      current: false,
      title: urlArr.indexOf('blue') > -1 ? 'Blue' : 'Blue@Work',
      link: document.querySelector('.siteheader-blog-logo-img > a')?.href,
    });
  } else if (urlArr.length > 0 && !isBlog) {
    navParent = document.querySelector('.siteheader-mobile-wrapper nav > ul');
    crumbsArr.push({
      current: false,
      link: '/',
      title: 'Home',
    });
  }

  if (navParent) {
    const allLinks = Array.from(navParent.querySelectorAll('a'));
    const thisLink = allLinks.find((item) => item.href === window.location.href);
    if (thisLink) {
      thisLink.classList.add('siteheader-active-nav');
      const closestParent = isBlog
        ? thisLink.closest('.siteheader-blog .siteheader-blog-menu > ul > li')
        : thisLink.closest('.siteheader-mobile-wrapper nav > ul > li');
      if (closestParent) {
        const closestParentLink = closestParent.querySelector(':scope > a');
        if (thisLink.href !== closestParentLink?.href) {
          closestParentLink.classList.add('siteheader-active-nav');
          crumbsArr.push({
            current: false,
            link: closestParentLink.href,
            title: closestParentLink.innerText || closestParentLink.textContent,
          });
        }
      }
      crumbsArr.push({
        current: true,
        link: thisLink.href,
        title: thisLink.innerText || thisLink.textContent,
      });
    }
  }

  return crumbsArr;
};

const formBreadcrumbs = () => {
  const breadcrumbs = document.createElement('nav');
  breadcrumbs.className = 'breadcrumbs';
  breadcrumbs.setAttribute('aria-label', 'Breadcrumb');
  const crumbs = buildCrumbs();

  const ol = document.createElement('ol');
  crumbs.forEach((item, index) => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = item.title;
    anchor.href = item.link;
    if (item.current) {
      anchor.setAttribute('aria-current', 'page');
    }

    let arrowTag;
    arrowTag = document.createElement('span');
    arrowTag.innerHTML = '<i class="fa-regular fa-chevron-left"></i>';
    arrowTag.className = 'breadcrumbs-prev';
    if (index === crumbs.length - 2) {
      li.className = 'breacrumbs-mobile';
    }
    li.appendChild(arrowTag);
    li.appendChild(anchor);
    if (index < crumbs.length - 1) {
      arrowTag = document.createElement('span');
      arrowTag.innerHTML = '<i class="fa-regular fa-chevron-right"></i>';
      arrowTag.className = 'breadcrumbs-next';
      li.appendChild(arrowTag);
    }

    ol.append(li);
  });

  breadcrumbs.append(ol);
  const currentMainEl = document.querySelector('main');
  if (currentMainEl.querySelector('.siteheader-blog')) {
    currentMainEl.insertBefore(breadcrumbs, currentMainEl.firstChild.nextSibling);
  } else {
    currentMainEl.insertBefore(breadcrumbs, currentMainEl.firstChild);
  }
};

export default formBreadcrumbs;
