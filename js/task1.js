// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.
// // */
const refs = {
  statlist: document.querySelector('.statList'),
  resultButton: document.querySelector('#resultButton'),
  resultSection: document.querySelector('#resultSection'),
};

refs.statlist.addEventListener('click', onStatListClick);
refs.resultButton.addEventListener('click', onResultButtonClick);

let sum = 0;
const statist = {};

function onStatListClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const valueButton = Number(event.target.dataset.number);
  sum += valueButton;
  statist[event.target.textContent] =
    (statist[event.target.textContent] ?? 0) + 1;
}

function onResultButtonClick(event) {
  let stats = '';
  for (const key in statist) {
    stats += `${key}: ${statist[key]} times clicked<br>`;
  }

  refs.resultSection.innerHTML = `Total Sum: ${sum}<br><br>Statistics:<br>${stats}`;
}
