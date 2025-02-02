export default function decorate(block) {
    const firstChild = block.children[0];
    firstChild.classList.add('main-content');
    // get the first child
    const quotecontent = block.children[0].children[0];
    quotecontent.classList.add('quote-content');
    // create div for top-icon
    const icontopDiv = document.createElement('div');
    icontopDiv.classList.add('icon-top');
    const icontopSpan = document.createElement('span');
    icontopSpan.innerHTML = '<i class="fa-solid fa-quote-left"></i>';
    icontopDiv.appendChild(icontopSpan);
    firstChild.prepend(icontopDiv);
    // create div for bottom-icon
    const iconbtmDiv = document.createElement('div');
    iconbtmDiv.classList.add('icon-bottom');
    const iconbtmSpan = document.createElement('span');
    iconbtmSpan.innerHTML = '<i class="fa-solid fa-quote-left"></i>';
    iconbtmDiv.appendChild(iconbtmSpan);
    firstChild.appendChild(iconbtmDiv);
}