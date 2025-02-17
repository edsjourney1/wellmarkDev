export const searchBuilder = (searchInfo, searchToggle) => {
  if (!(searchInfo && searchToggle)) {
    return '';
  }

  return `<div class='siteheader-search-wrapper'>
    <button type='button' aria-label='Toggle Search'>
      ${searchToggle.querySelector('p:first-child').innerHTML}
      ${searchToggle.querySelector('p:last-child').innerHTML}
    </button>
    <div class='siteheader-search-inner'>
      <div class='siteheader-search-content'>
        <form action='/' id='siteheader-search-form'>
          <label for='siteheader-search-input'>
            ${searchInfo.querySelector('p:first-child em').innerHTML}
          </label>
          <div class='siteheader-search-input-wrapper'>
            <input type='search' name='header_search' id='header_search'
              autocorrect='off' autocomplete='off' autocapitalize='off' maxlength='2048' placeholder='
              ${searchInfo.querySelector('p:nth-child(2) em').innerHTML}'/>
            <button type='submit' aria-label='Search'>
              ${searchInfo.querySelector('p:last-child em').innerHTML}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>`;
};

export const enableAutocomplete = (searchInput) => {
  if (window.autoComplete) {
    let itemArr = [];
    let itemArr2 = [];
    let receivedCategories;
    let thisEl;
    // eslint-disable-next-line no-new new-cap
    new window.autoComplete({
      name: searchInput,
      selector: `#${searchInput}`,
      data: {
        src: async () => { // query
          try {
            // Fetch Data from external Source
            const response = await fetch('/content-fragments/sample-typeahead.json');
            if (!response.ok) {
              // throw new Error(`Header Search Response status: ${response.status}`);
            }
            const json = await response.json();

            const keysArr = [...new Set((json.data || []).map((item) => item.category))];
            const valueArr = [];

            receivedCategories = keysArr;

            keysArr.forEach((key) => {
              (json.data || []).forEach((el) => {
                if (el.category === key) {
                  valueArr.push(`a---${el.name}---${el.url}---${key}`);
                }
              });
            });

            return valueArr;
          } catch (error) {
            return error;
          }
        },
      },
      resultsList: {
        tag: 'div',
        maxResults: 100,
        class: 'siteheader-autocomplete',
        element: (list) => { // data
          (receivedCategories || []).forEach((cat) => {
            thisEl = list.querySelector(`[data-category='${cat}']`);
            const titleH4 = document.createElement('h4');
            if (thisEl) {
              titleH4.innerHTML = cat;
              list.insertBefore(titleH4, thisEl);
            }
            thisEl = null;
          });
        },
      },
      cache: false,
      tabSelect: true,
      resultItem: {
        tag: 'div',
        highlight: true,
        element: (item, data) => {
          itemArr = data.value.split('---');
          itemArr2 = data.match.split('---');
          // eslint-disable-next-line prefer-destructuring
          if (itemArr[0] === 'a') {
            item.innerHTML = itemArr2[1];
            item.setAttribute('data-href', itemArr[2]);
            item.setAttribute('data-category', itemArr[3]);
            item.classList.add('siteheader-autocomplete-item');
          }
        },
      },
      threshold: 3,
      debounce: 250,
    });

    document.querySelector(`#${searchInput}`).addEventListener('selection', (event) => {
      const link = ((event.detail?.selection?.value || '').split('---') || [])[2];
      if (link) {
        alert(`TO BE IMPLEMENTED: Must go to ${link}`);
      }
    });
  }
};
