let nomeJogador = prompt('Informe o nome do jogador: ');
alert('Seja bem vindo ' + nomeJogador + ' ao jogo do número secreto!!');
let numeroSecreto = 3;
let numeroAposta; 
let tentativas = 1;

//enquanto
while(numeroAposta != numeroSecreto){
    numeroAposta = prompt(nomeJogador + ' Escolha um numero de 1 á 30');

    //Se o numero secreto for igual ao numero aposta.
    //Mostraremos a uma mensagem informando ao acerto.
    if(numeroSecreto == numeroAposta){
        break;
    }else{
        //Senão mostramos uma mensagem de erro
        //console.log(`${nomeJogador} você errou o numero secreto !!!`);
        if(numeroSecreto > numeroAposta){
            alert(`O numero secreto é maior que ${numeroAposta}`);
        }else{
            alert(`O numero secreto é menor que ${numeroAposta}`);
        }

        tentativas++;
    }
}

if(tentativas > 1){
    alert(`${nomeJogador} você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentivas`);
}else{
    alert(`${nomeJogador} você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentiva`);
}
