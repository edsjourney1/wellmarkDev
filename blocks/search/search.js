import sampleData from './sample-data.js';

const searchParent = document.querySelector('.search-container');
const allSearchItems = Array.from(document.querySelectorAll('.search-wrapper'));
const allSearchBlocks = [];
let searchGrid;
let searchLeftCol;
let searchRightCol;

const buildSearchGrid = () => {
  if (searchGrid && searchLeftCol && searchRightCol) {
    const searchList = document.createElement('ul');
    let str = '';
    (sampleData.data || []).forEach((item) => {
      str += `<li>
        <a href='${item.link}'><h3>${item.title}</h3></a>
      </li>`;
    });
    searchRightCol.innerHTML = str;
    searchRightCol.append(searchList);
  }
};

const buildSearchBanner = (bannerBlock) => { // bannerBlock, bannerEl, searchGrid
  const searchFormParent = document.createElement('div');
  const searchLabelWrapper = bannerBlock.querySelector(':scope > div:last-child');
  if (searchLabelWrapper) {
    const [searchLabel, ctaLabel] = searchLabelWrapper.children;
    searchFormParent.innerHTML = `<form><div class='search-form-grid'>
      <div class='search-form-col'>
        <label for='search_term'>${searchLabel.querySelector('p').innerHTML}</label>
        <input id='search_term' placeholder='${searchLabel.querySelector('p').innerHTML}' type='search'/>
      </div>
      <div class='search-form-col'>
        <button type='submit'>${ctaLabel.querySelector('p').innerHTML}</button>
      </div>
    </div></form>`;
    bannerBlock.append(searchFormParent);
  }
};

const initSearch = () => {
  const searchWrap = document.createElement('section');
  searchGrid = document.createElement('div');
  searchLeftCol = document.createElement('div');
  searchRightCol = document.createElement('div');
  searchWrap.classList.add('search-grid-wrapper');
  searchGrid.classList.add('search-grid');

  buildSearchBanner(allSearchBlocks[0], searchGrid);

  searchGrid.append(searchLeftCol);
  searchGrid.append(searchRightCol);
  searchWrap.append(searchGrid);
  searchParent.parentElement.append(searchWrap);

  buildSearchGrid();
};

export default async function decorate(block) {
  const thisBlock = block;
  if (!thisBlock.classList.contains('search-banner')) {
    thisBlock.classList.add('search-hidden');
    thisBlock.setAttribute('aria-hidden', true);
  } else {
    thisBlock.querySelector(':scope > div:last-child')?.classList.add('search-hidden');
    thisBlock.querySelector(':scope > div:last-child')?.setAttribute('aria-hidden', true);
  }
  allSearchBlocks.push(thisBlock);

  if (allSearchItems.length === allSearchBlocks.length) {
    initSearch();
  }
}
