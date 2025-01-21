function addScript(src) {
  const script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
}
(() => {
  addScript('//899-BTB-436.mktoweb.com/js/forms2/js/forms2.min.js');
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
    }, 1000);
  });
}
