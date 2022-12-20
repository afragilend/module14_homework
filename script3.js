const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  const value1 = +document.getElementById('num1').value;

  let s = document.getElementById('j-result');
  s.textContent = '';
  if (!(value1 >= 1 && value1 <= 10)) {
    s.textContent = 'число вне диапазона от 1 до 10';
    return;
  }
  fetch(`https://picsum.photos/${value1}`)
    .then((response) => {
      document.getElementById('result').src = response.url;
    });

});