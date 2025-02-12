const hideOnMobile = (bottomSections) => {
  bottomSections.forEach(sec => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      sec.removeAttribute('style');
      if (sec.clientHeight > 450) {
        sec.parentNode.classList.add('panels-item-closed');
      }
    } else {
      sec.parentNode.classList.remove('panels-item-closed');
    }
  });
};

const setEqualHeights = (elements) => {
  const maxHeight = Math.max(...elements.map((el) => el.clientHeight));
  elements.forEach((el) => {
    el.style.height = `${maxHeight}px`;
  });
};

const scrollToCol = (col) => {
  setTimeout(() => {
    const boxTop = col.getBoundingClientRect().top;
    window.scrollTo({
      behavior: 'smooth',
      top: boxTop + window.scrollY - 80,
    });
  }, 250);
};

export default async function decorate(block) {
  const children = Array.from(block.children);
  children.forEach((col) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('panels-col');
    col.classList.add('panels-item');
    col.parentNode.insertBefore(wrapper, col);
    wrapper.appendChild(col);

    const [topSection, bottomSection, labelSection, collapsibleSection] = col.children;
    topSection?.classList.add('panels-top-section');
    bottomSection?.classList.add('panels-bottom-section');
    collapsibleSection?.classList.add('panels-toggle-section');

    if (labelSection?.children.length) {
      col.classList.add('panels-item-has-label');
      labelSection.classList.add('panels-label-section');
    }
    if (collapsibleSection?.children.length) {
      collapsibleSection.classList.add('panels-toggle-section-auto');
      const [toggleOpenEl, toggleCloseEl] = collapsibleSection.children;
      const toggleOpenBtn = document.createElement('button');
      const toggleCloseBtn = document.createElement('button');
      toggleOpenBtn.className = 'panels-toggle-section-open';
      toggleCloseBtn.className = 'panels-toggle-section-close';
      toggleOpenBtn.innerHTML = toggleOpenEl.innerHTML;
      toggleCloseBtn.innerHTML = toggleCloseEl.innerHTML;
      toggleOpenEl.remove();
      toggleCloseEl.remove();
      collapsibleSection.append(toggleOpenBtn);
      collapsibleSection.append(toggleCloseBtn);
      toggleOpenBtn.addEventListener('click', () => {
        col.classList.remove('panels-item-closed');
        scrollToCol(col);
      });
      toggleCloseBtn.addEventListener('click', () => {
        col.classList.add('panels-item-closed');
        scrollToCol(col);
      });
    }
  });
  const topSections = Array.from(block.querySelectorAll('.panels-top-section'));
  const bottomSections = Array.from(block.querySelectorAll('.panels-bottom-section'));
  [...topSections, ...bottomSections].forEach((el) => {
    el.removeAttribute('style');
  });
  setTimeout(() => {
    setEqualHeights(topSections);
    setEqualHeights(bottomSections);
    hideOnMobile(bottomSections);
  }, 1);
  window.addEventListener('resize', () => {
    [...topSections, ...bottomSections].forEach((el) => {
      el.removeAttribute('style');
    });
    setTimeout(() => {
      setEqualHeights(topSections);
      setEqualHeights(bottomSections);
      hideOnMobile(bottomSections);
    }, 1);
  });
}
