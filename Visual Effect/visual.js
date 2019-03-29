function aparecerTexto() {
	var conteudo = document.querySelector('.conteudo-text');
	var conteudoPosicao = conteudo.getBoundingClientRect().top;
	var telaPosicao = window.innerHeight;

	if (conteudoPosicao < telaPosicao) {
		conteudo.classList.add('texto-aparecer');
	}
}

window.addEventListener('scroll', aparecerTexto);
