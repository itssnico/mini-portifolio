/* 
    OBJETIVO: Quando clicar na aba mostrar o conteudo da aba clicada e ocultar o conteudo da aba anterior

    -passo 1: dar u  jeito de pegar os elementos que representam as abas no HTML

    -passo 2: dar um jeito de identificar o clique no elemento da aba

    -passo 3: quando o usuario clicar, desmarcar a aba que estava selecionada

    -passo 4: marcar a aba clicada como selecionado

    -passo 5: esconder o conteudo anterior

    -passo 6: mostrar o conteudo da aba selecionada
*/

// -passo 1: dar u  jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // -passo 2: dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionada")) {
            return;
        }//o if é usado aqui para nao ficar rodando infinitamente a classe selecionada nas abas

        selecionarAba(aba);

        mostrarConteudoAba(aba);

    });
});
function selecionarAba(aba){
    // -passo 3: quando o usuario clicar, desmarcar a aba que estava selecionada
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");

    // -passo 4: marcar a aba clicada como selecionado
    aba.classList.add("selecionada");

}

function mostrarConteudoAba(aba){
    // -passo 5: esconder o conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada");

    // -passo 6: mostrar o conteudo da aba selecionada
    const idElementoInformacaoAba = `informacao-${aba.id}`
    //document.getElementById = busca um elemento pelo Id dele 
    const informacaoMostrada = document.getElementById (idElementoInformacaoAba);
    informacaoMostrada.classList.add("selecionada");
}