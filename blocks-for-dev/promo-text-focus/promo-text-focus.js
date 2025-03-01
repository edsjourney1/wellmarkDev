export default function decorate(block) {
  const { parentElement } = block.parentElement;
  parentElement.classList.add('blue-550');
  // Banner append
  const backgroundbanner = block.children[0].innerText;
  const focusbanner = block.parentElement;
  focusbanner.style.backgroundImage = `url(${backgroundbanner})`;
  focusbanner.style.backgroundSize = 'cover';
  focusbanner.style.backgroundRepeat = 'no-repeat';
  // focusbanner.classList.add('banner-focus');

  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
  // Division append
  const promotextfocus = document.querySelector('.promo-text-focus');
  const innerdiv = promotextfocus.children[1];
  const promotextdiv = document.createElement('div');
  promotextdiv.className = 'promo-focus-block';
  promotextdiv.append(innerdiv);
  promotextfocus.textContent = '';
  promotextfocus.append(promotextdiv);
}
