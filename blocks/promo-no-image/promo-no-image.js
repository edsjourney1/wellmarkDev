export default function decorate(block) {
  /* change to ul, li */
  const imageWrapperDiv = block.parentElement;
  const title = block.children[0].textContent;
  const mainHeading = document.createElement('h3');
  mainHeading.classList.add('promo-no-image-heading');
  mainHeading.textContent = `${title}`;
  imageWrapperDiv.prepend(mainHeading);
  if (mainHeading.textContent.trim() === '') {
    const headingCheck = document.querySelector('.promo-no-image-heading');
    headingCheck.remove();
  }
  const ul = document.createElement('ul');
  const promoClass = `promo-no-image-${block.children.length - 1}-column`;
  ul.classList.add(promoClass);
  [...block.children].forEach((row, index) => {
    if (index > 0) {
      const li = document.createElement('li');
      while (row.firstElementChild) li.append(row.firstElementChild);
      [...li.children].forEach((div) => {
        if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
        else div.className = 'cards-card-body';
      });
      ul.append(li);
    }
  });
  block.innerHTML = '';
  block.append(ul);
}
