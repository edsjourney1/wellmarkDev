export default function decorate(block) {
  block.children[1].classList.add('contact-div');
  block.children[2].classList.add('adobe-div');
  block.children[3].classList.add('language-div');
  block.children[4].classList.add('language-div');
  block.children[5].classList.add('attention-div');
  block.children[6].classList.add('copyright-div');
  block.children[7].classList.add('page-id-div');

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

  const languageList = block.children[4].querySelector('ul');
  if (languageList) {
    languageList.classList.add('language-list');
    const languageDescDiv = document.createElement('div');
    languageDescDiv.classList.add('language-desc-div');
    block.children[4].append(languageDescDiv);

    const langLinks = languageList.querySelectorAll('a');
    langLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        langLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
        languageDescDiv.innerHTML = link.parentNode.querySelector('em')?.innerHTML;
      });
    });
  }

  // block.children[7]
  let publishedDate = document.querySelector('meta[name="publish-date"]')?.content || '';

  if (publishedDate.length === 0) {
    const tempDate = new Date();
    publishedDate = `${(tempDate.getMonth() > 8)
      ? (tempDate.getMonth() + 1)
      : (`0${(tempDate.getMonth() + 1)}`)}/${(tempDate.getDate() > 9)
      ? tempDate.getDate()
      : (`0${tempDate.getDate()}`)}/${tempDate.getFullYear()}`;
  }
  const pageId = document.querySelector('meta[name="page-id"]')?.content || '';
  const pEl = block.children[7].querySelector('p');
  pEl.innerHTML = `${pEl.innerHTML}: ${publishedDate} <span></span> ${pageId}`;
}
