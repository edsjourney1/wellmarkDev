import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const backgroundImage = block.children[0].innerText;
  const title = block.children[1].innerText;
  const ul = document.createElement('ul');
  const imageWrapperDiv = block.parentElement;
  imageWrapperDiv.style.backgroundImage = `url(${backgroundImage}) , linear-gradient(
      181deg,
      rgba(75, 76, 77, 1) 0%,
      rgba(93, 93, 93, 0.65) 29%,
      rgba(115, 115, 115, 0.2) 100%
    )`;
  imageWrapperDiv.style.backgroundSize = 'cover';
  imageWrapperDiv.style.backgroundPosition = 'center';
  imageWrapperDiv.style.backgroundRepeat = 'no-repeat';
  imageWrapperDiv.style.position = 'relative';
  const mainHeading = document.createElement('h2');
  mainHeading.classList.add('promo-image-heading');
  mainHeading.textContent = `${title}`;
  imageWrapperDiv.prepend(mainHeading);
  const promoClass = `promo-${block.children.length - 2}-column`;
  ul.classList.add(promoClass);
  [...block.children].forEach((row, index) => {
    if (index > 1) {
      const li = document.createElement('li');
      while (row.firstElementChild) li.append(row.firstElementChild);
      [...li.children].forEach((div) => {
        if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
        else div.className = 'cards-card-body';
      });
      ul.append(li);
    }
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
