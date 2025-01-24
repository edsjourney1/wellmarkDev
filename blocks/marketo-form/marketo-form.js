// function addScript(src) {
//   const script = document.createElement('script');
//   script.src = src;
//   document.head.appendChild(script);
// }
// (() => {
//   // addScript('//899-BTB-436.mktoweb.com/js/forms2/js/forms2.min.js');
//   addScript('//pages.wellmark.com/js/forms2/js/forms2.min.js');
// })();

function addScript(src, id) {
  const script = document.createElement('script');
  script.src = src;
  if (id) {
    script.id = id;
  }
  document.head.appendChild(script);
}

(() => {
  addScript('//899-BTB-436.mktoweb.com/js/forms2/js/forms2.min.js');
  //  new line
  addScript('//pages.wellmark.com/js/forms2/js/forms2.min.js');
  addScript('https://899-BTB-436.mktoweb.com/rs/899-BTB-436/images/teknkl-formsplus-core-1.0.8.js?version=0', 'teknkl-FormsPlus-Core-1.x');
  addScript('https://899-BTB-436.mktoweb.com/rs/899-BTB-436/images/teknkl-simpledto-2.0.4.js?version=0', 'teknkl-SimpleDTO-2.x');
})();

// creation of block for marketo form
export default function decorate(block) {
  [...block.children].forEach((row) => {
    const section = row.querySelector('p');
    const divId = section.innerHTML;
    const idstringValue = divId.split('_')[1];
    const cForm = document.createElement('form');
    cForm.classList.add('eds-mkto-form');
    cForm.setAttribute('id', divId);
    section.insertAdjacentElement('afterend', cForm);
    setTimeout(() => {
      const formId = parseInt(idstringValue, 10);
      window.MktoForms2.loadForm('//899-BTB-436.mktoweb.com', '899-BTB-436', formId);
      //  new line
      window.MktoForms2.loadForm('//pages.wellmark.com', '464-UUV-172', formId);
    }, 1000);
  });
}
