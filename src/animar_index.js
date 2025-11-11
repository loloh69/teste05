function criarPinto() {
  const container = document.querySelector('#chuva');
  const pinto = document.createElement('img');
  pinto.src = 'src/icon.png';
  pinto.classList.add('pintos');


  // Posição horizontal aleatória
  pinto.style.left = Math.random() * window.innerWidth + 'px';


  // Duração aleatória (opcional)
  const duracao = 2 + Math.random() * 3;
  pinto.style.animationDuration = duracao + 's';

  container.appendChild(pinto);

  // Remover após a animação
  setTimeout(() => {
    container.removeChild(pinto);
  }, duracao * 1000);
}

// Criar corações continuamente
setInterval(criarPinto, 500);