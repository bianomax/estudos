let nomeJogador = prompt('Informe o nome do jogador: ');
alert('Seja bem vindo ' + nomeJogador + ' ao jogo do número secreto!!');
let numeroSecreto = 15;

numeroAposta = prompt(nomeJogador + ' Escolha um numero de 1 á 30');

//Se o numero secreto for igual ao numero aposta.
//Mostraremos a uma mensagem informando ao acerto.
if(numeroSecreto == numeroAposta){
    console.log(`${nomeJogador} você acertou o numero secreto ${numeroSecreto}`);
}else{
    //Senão mostramos uma mensagem de erro
    console.log(`${nomeJogador} você errou o numero secreto !!!`);
}