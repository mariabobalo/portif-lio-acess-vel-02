document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

       })

    const aumentaFonteBotao =document.getElementById('aumentar-fonte');
    const diminuiFonteBotao =document.getElementById('diminuir-fonte');

    const alternaContraste = document.getElementById('alterna-contraste')
     alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
 })

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.2;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.2;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
    
})
ScrollReveal().reveal('modal', { delay: 1500 });
