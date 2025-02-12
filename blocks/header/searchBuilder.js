export const searchBuilder = (searchInfo, searchToggle) => {
  if (!(searchInfo && searchToggle)) {
    return '';
  }

  return `<div class='siteheader-search-wrapper'>
                <button type='button' aria-label='Toggle Search'>${
                  searchToggle.querySelector('p:first-child').innerHTML
                }
                    ${
                      searchToggle.querySelector('p:last-child').innerHTML
                    }</button>
                <div class='siteheader-search-inner'>
                    <div class='siteheader-search-content'>
                        <form action='/' id='siteheader-search-form'>
                            <label for='siteheader-search-input'>${
                              searchInfo.querySelector('p:first-child em')
                                .innerHTML
                            }</label>
                            <div class='siteheader-search-input-wrapper'>
                                <input type='search' name='header_search' id='header_search' autocorrect='off' autocomplete='off' autocapitalize='off' maxlength='2048' placeholder='${
                                  searchInfo.querySelector('p:nth-child(2) em')
                                    .innerHTML
                                }'/>
                                <button type='submit' aria-label='Search'>${
                                  searchInfo.querySelector('p:last-child em')
                                    .innerHTML
                                }</button>
                            </div>
                        </form>
                    </div>
                </div>
              </div>`;
};

export const enableAutocomplete = (searchInput) => {
  if (window.autoComplete) {
    new window.autoComplete({
      name: searchInput,
      selector: `#${searchInput}`,
      data: {
        src:  async (query) => {
          try {
            // Fetch Data from external Source
            const response = await fetch(`/header-fragments/sample-typeahead.json`);
            if (!response.ok) {
              // throw new Error(`Header Search Response status: ${response.status}`);
            }
            // Data should be an array of `Objects` or `Strings`
            const json = await response.json();
            // console.log("============json", JSON.stringify(json.data));
            
            console.log("============keys", Object.keys(json.data[0]));

            (json.data || []).forEach(item => {
              
            });
            console.log();
            
            // const data = await source.json();
            const data = ["item 1", "item 2"];
    
            return data;
          } catch (error) {
            return error;
          }
        },
      },
      resultItem: {
        highlight: true,
      },
      threshold: 0,
      debounce: 300,
    });
  }
};
