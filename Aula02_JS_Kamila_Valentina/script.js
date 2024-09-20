var area = document.getElementById('area');


function entrar() {
    // alert("Clicou");
    var nome = prompt('Digite seu nome');
    // console.log(nome);
    area.innerHTML = 'Bem vindo ' + nome + " ";

    //criando um botão dentro do html a partir do js
    let botaoSair = document.createElement('button');
    botaoSair.innerHTML = "Sair da conta";
    botaoSair.onclick = sair;

    area.appendChild(botaoSair);
}

function sair() {
    alert('Até mais');
    area.innerHTML = 'voce saiu';

}