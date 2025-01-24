// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

const myJson = [
  {
    publishedDate: '10/02/1999',
    ImageUrl: 'https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9cb0d343-762e-4625-a3eb-1a0b5d1dd53d/as/old-ladoes.jpeg?width=400&height=400',
    title: 'Type something',
    category: ['category one', 'category two', 'category three'],
    articleReadTime: '5 min read',
    id: 1,
    articleUrl: 'https://abcd.com',
  },
  {
    publishedDate: '10/02/1999',
    ImageUrl: 'https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9cb0d343-762e-4625-a3eb-1a0b5d1dd53d/as/old-ladoes.jpeg?width=400&height=400',
    title: 'Type something',
    category: ['category one', 'category two', 'category three'],
    articleReadTime: '5 min read',
    id: 2,
    articleUrl: 'https://abcd.com',
  },
  {
    publishedDate: '10/02/1999',
    ImageUrl: 'https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9cb0d343-762e-4625-a3eb-1a0b5d1dd53d/as/old-ladoes.jpeg?width=400&height=400',
    title: 'Type something',
    category: ['category one', 'category two', 'category three'],
    articleReadTime: '5 min read',
    id: 3,
    articleUrl: 'https://abcd.com',
  },
  {
    publishedDate: '10/02/1999',
    ImageUrl: 'https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9cb0d343-762e-4625-a3eb-1a0b5d1dd53d/as/old-ladoes.jpeg?width=400&height=400',
    title: 'Type something',
    category: ['category one', 'category two', 'category three'],
    articleReadTime: '5 min read',
    id: 4,
    articleUrl: 'https://abcd.com',
  },
  {
    publishedDate: '10/02/1999',
    ImageUrl: 'https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9cb0d343-762e-4625-a3eb-1a0b5d1dd53d/as/old-ladoes.jpeg?width=400&height=400',
    title: 'Type something',
    category: ['category one', 'category two', 'category three'],
    articleReadTime: '5 min read',
    id: 5,
    articleUrl: 'https://abcd.com',
  },
  {
    publishedDate: '10/02/1999',
    ImageUrl: 'https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9cb0d343-762e-4625-a3eb-1a0b5d1dd53d/as/old-ladoes.jpeg?width=400&height=400',
    title: 'Type something',
    category: ['category one', 'category two', 'category three'],
    articleReadTime: '5 min read',
    id: 6,
    articleUrl: 'https://abcd.com',
  },
  {
    publishedDate: '10/02/1999',
    ImageUrl: 'https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9cb0d343-762e-4625-a3eb-1a0b5d1dd53d/as/old-ladoes.jpeg?width=400&height=400',
    title: 'Type something',
    category: ['category one', 'category two', 'category three'],
    articleReadTime: '5 min read',
    id: 7,
    articleUrl: 'https://abcd.com',
  },
  {
    publishedDate: '10/02/1999',
    ImageUrl: 'https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9cb0d343-762e-4625-a3eb-1a0b5d1dd53d/as/old-ladoes.jpeg?width=400&height=400',
    title: 'Type something',
    category: ['category one', 'category two', 'category three'],
    articleReadTime: '5 min read',
    id: 9,
    articleUrl: 'https://abcd.com',
  },
  {
    publishedDate: '10/02/1999',
    ImageUrl: 'https://delivery-p140377-e1434145.adobeaemcloud.com/adobe/assets/urn:aaid:aem:9cb0d343-762e-4625-a3eb-1a0b5d1dd53d/as/old-ladoes.jpeg?width=400&height=400',
    title: 'Type something',
    category: ['category one', 'category two', 'category three'],
    articleReadTime: '5 min read',
    id: 10,
    articleUrl: 'https://abcd.com',
  },
];
export default async function decorate(block) {
  const heading = block.children[0].children[0].innerText;
  const inlinewithIcon = block.children[0].children[1].innerHTML;
  const headingSpam = document.createElement('h2');
  headingSpam.classList.add('title');
  const iconwithtext = document.createElement('span');
  iconwithtext.classList.add('text-icon');
  iconwithtext.innerHTML = inlinewithIcon;
  headingSpam.append(heading);
  const headDiv = document.createElement('div');
  headDiv.classList.add('heading-div');
  headDiv.append(headingSpam, iconwithtext);
  block.innerHTML = '';
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('cards-div');
  // eslint-disable-next-line object-curly-newline
  myJson.forEach(({ ImageUrl, category, publishedDate, articleReadTime, title }) => {
    const imageURL = ImageUrl;
    const categoryList = category;
    const publishDate = publishedDate;
    const articleTime = articleReadTime;
    const titleofCard = title;
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card-div');
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    const image = document.createElement('img');
    image.src = `${imageURL}`;
    image.alt = 'thumbnail';
    const categoryPara = document.createElement('p');
    categoryPara.classList.add('category-list');
    categoryList.forEach((item) => {
      const value = item;
      const anchors = document.createElement('a');
      anchors.href = 'www.google.com';
      anchors.append(value);
      categoryPara.append(anchors);
    });
    const datetimeDiv = document.createElement('div');
    datetimeDiv.classList.add('date-div');
    const pubDate = document.createElement('p');
    pubDate.append(publishDate);
    pubDate.classList.add('date');
    const arcretime = document.createElement('p');
    arcretime.append(articleTime);
    arcretime.classList.add('read-time');
    datetimeDiv.append(pubDate, arcretime);
    const mainTitle = document.createElement('h3');
    mainTitle.classList.add('card-title');
    mainTitle.append(titleofCard);
    contentDiv.append(mainTitle, datetimeDiv, categoryPara);
    mainDiv.append(image, contentDiv);
    blockDiv.append(mainDiv);
  });
  block.append(headDiv, blockDiv);
}
