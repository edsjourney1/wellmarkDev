export default function decorate(block) {
  const title = block.children[0].textContent;
  const description = block.children[1].textContent;
  const div = document.createElement('div');
  const heading = document.createElement('h2');
  heading.append(title);
  heading.classList.add('title');
  const paragraph = document.createElement('p');
  paragraph.classList.add('description');
  paragraph.append(description);
  div.append(heading, paragraph);
  block.innerHTML = '';
  block.append(div);
}
