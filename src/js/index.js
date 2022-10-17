const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionada")) {
            return;
        }
        selecionarAba(aba);

        mostrarConteudoAba(aba);

    });
});
function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");

    aba.classList.add("selecionada");

}

function mostrarConteudoAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada");

    const idElementoInformacaoAba = `informacao-${aba.id}`

    const informacaoMostrada = document.getElementById (idElementoInformacaoAba);
    informacaoMostrada.classList.add("selecionada");
}