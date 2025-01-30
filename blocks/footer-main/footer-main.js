export default function decorate(block) {
  block.children[1].classList.add('contact-div');
  block.children[2].classList.add('adobe-div');
  block.children[3].classList.add('language-div');
  block.children[4].classList.add('language-div');
  block.children[5].classList.add('attention-div');
  block.children[6].classList.add('copyright-div');
  const logoImg = document.createElement('img');
  logoImg.src = '../../images/global/WellmarkLogo.png';
  logoImg.alt = 'wellmark-logo';
  logoImg.title = 'logo';
  logoImg.className = 'logo-img';
  const logoDiv = block.children[0];
  const imgDiv = document.createElement('div');
  imgDiv.append(logoImg);
  logoDiv.prepend(imgDiv);
  logoDiv.classList.add('logo-social-div');
  const socialDiv = block.children[0].children[1];
  socialDiv.classList.add('social-div');
  const socialDiv2 = socialDiv.cloneNode(true);
  const attentionDiv = block.children[5];
  attentionDiv.append(socialDiv2);

  const icon = block.children[6].querySelector("em");
  if (icon) {
    const iconParent = icon.parentNode;
    const iconEl = document.createElement("span");
    iconEl.className = `fa-solid fa-${icon.innerHTML.substr(1)}`;
    iconParent.insertBefore(iconEl, icon);
    icon.remove();
  }
  // <i class="fa-solid fa-arrow-up-right-from-square"></i>

  const languageList = block.children[4].querySelector('ul');
  if (languageList) {
    languageList.classList.add('language-list');
    const languageDescDiv = document.createElement('div');
    languageDescDiv.classList.add('language-desc-div');
    block.children[4].append(languageDescDiv)

    const langLinks = languageList.querySelectorAll('a');
    langLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        langLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
        languageDescDiv.innerHTML = link.parentNode.querySelector("em")?.innerHTML;
      });
    });
  }
}
