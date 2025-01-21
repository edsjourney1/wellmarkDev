export default function decorate(block) {
  // slicing the first element of the block
  const innerleftDivs = [...block.children].slice(0, 1);
  const blockleft = document.createElement('div');
  blockleft.classList.add('block-left');
  block.prepend(blockleft);
  blockleft.append(innerleftDivs[0]);
  // slicing remaining elements of the block
  const childLength = [...block.children].length;
  const innerrightDivs = [...block.children].slice(1, childLength);
  const blockRight = document.createElement('div');
  blockRight.classList.add('block-right');
  block.append(blockRight);
  if (innerrightDivs) {
    blockRight.append(...innerrightDivs);
    // Change all the second <h2> to <h4>
    const divs = blockRight.querySelectorAll('div');
    divs.forEach((div) => {
      const h2s = div.querySelectorAll('h2');
      if (h2s.length > 1) {
        const secondH2 = h2s[1];
        const h4 = document.createElement('h4');
        h4.innerHTML = secondH2.innerHTML; // Copy the inner HTML
        secondH2.replaceWith(h4); // Replace the <h2> with <h4>
      }
    });
    // Remove empty divs
    const emptyDivs = blockRight.querySelectorAll('div:empty');
    emptyDivs.forEach((div) => div.remove());
  }
}
