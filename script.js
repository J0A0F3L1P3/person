const personagem = document.querySelector('#personagem');

const rangeInput = document.querySelector('#rangeInput');

rangeInput.addEventListener('input', function () {
  const novaPosicaoX = parseFloat(this.value);
  personagem.setAttribute('rotation', `0 ${novaPosicaoX} 0`);
});