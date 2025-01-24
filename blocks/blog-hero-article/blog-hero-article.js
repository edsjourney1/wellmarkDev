// import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const mainPageURL = block.textContent;
  const blogHeroPath = new URL(block.children[0].innerText).pathname;
  const fragment = await loadFragment(blogHeroPath);
  const mainHeading = fragment.children[0].textContent;
  const datafromArticleInformation = fragment.children[1].children[0];
  const datafromImageContent = fragment.children[1].children[1];
  const articleAnchors = datafromArticleInformation.querySelector('.article-link').children[1];
  const articlereadtime = datafromArticleInformation.querySelector('.article-link').children[0].textContent;
  const imageSrc = datafromImageContent.querySelector('.columns-img-col picture').innerHTML;
  const description = datafromImageContent.querySelector('.image-text').children[0].children[0].textContent;
  const blogHero = document.createElement('div');
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('image-div');
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-div');
  const button = document.createElement('p');
  button.classList.add('button-container');
  const buttonanchor = document.createElement('a');
  buttonanchor.classList.add('button', 'primary');
  buttonanchor.setAttribute('href', `${mainPageURL}`);
  buttonanchor.innerText = 'Read more';
  button.append(buttonanchor);
  imgDiv.innerHTML = imageSrc;
  const categoryDateDiv = document.createElement('div');
  categoryDateDiv.classList.add('date-div');
  const descriptionDiv = document.createElement('div');
  const descriptionPara = document.createElement('p');
  const heading = document.createElement('h2');
  heading.append(mainHeading);
  descriptionPara.append(description);
  descriptionDiv.append(descriptionPara);
  descriptionDiv.classList.add('description');
  const dateandtime = document.createElement('p');
  if (datafromArticleInformation.querySelector('.date') !== undefined && datafromArticleInformation.querySelector('.date') !== null) {
    const publishedDate = datafromArticleInformation.querySelector('.date');
    const publishDate = String(publishedDate.children[0].textContent).split(':')[1];
    const span = document.createElement('span');
    span.append(publishDate);
    const articletime = document.createElement('span');
    articletime.append(articlereadtime);
    // lastUpdatedpara.append(span, articlereadtime);
    dateandtime.append(span, articletime);
  }
  categoryDateDiv.append(dateandtime, articleAnchors);
  contentDiv.append(heading, categoryDateDiv, descriptionDiv, button);
  blogHero.append(imgDiv, contentDiv);
  block.innerHTML = '';
  block.append(blogHero);
}
