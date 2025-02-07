import myJson from '../../scripts/constants.js';

export default async function decorate(block) {
  const mainPageURL = block.textContent;
  const postArticle = myJson.find((item) => {
    if (item.url === mainPageURL) {
      console.log(item);
    }
    return item;
  });
  console.log(postArticle);
  const blogHero = document.createElement('div');
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('image-div');
  const imageURL = document.createElement('img');
  imageURL.src = postArticle.image;
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-div');
  const button = document.createElement('p');
  button.classList.add('button-container');
  const buttonanchor = document.createElement('a');
  buttonanchor.classList.add('button', 'primary');
  buttonanchor.setAttribute('href', `${mainPageURL}`);
  buttonanchor.innerText = 'Read more';
  button.append(buttonanchor);
  const categoryDateDiv = document.createElement('div');
  categoryDateDiv.classList.add('date-div');
  const descriptionDiv = document.createElement('div');
  const descriptionPara = document.createElement('p');
  const heading = document.createElement('h2');
  heading.append(postArticle.title);
  descriptionPara.append(postArticle.description);
  descriptionDiv.append(descriptionPara);
  descriptionDiv.classList.add('description');
  // const dateandtime = document.createElement('p');
  // if (datafromArticleInformation.querySelector('.date') !== undefined &&
  // datafromArticleInformation.querySelector('.date') !== null) {
  //   const publishedDate = datafromArticleInformation.querySelector('.date');
  //   const publishDate = String(publishedDate.children[0].textContent).split(':')[1];
  //   const span = document.createElement('span');
  //   span.append(publishDate);
  //   const articletime = document.createElement('span');
  //   articletime.append(articlereadtime);
  //   // lastUpdatedpara.append(span, articlereadtime);
  //   dateandtime.append(span, articletime);
  // }
  // categoryDateDiv.append(dateandtime, articleAnchors);
  contentDiv.append(heading, categoryDateDiv, descriptionDiv, button);
  blogHero.append(imgDiv, contentDiv);
  block.innerHTML = '';
  block.append(blogHero);
}
