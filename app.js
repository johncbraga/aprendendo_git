// Breve introdução de iniciante.
alert('Bem vindo ao jogo do número secreto!');

// Definição da variável onde o valor máximo utilizado no jogo será atribuido
let valorMaximo = 10;

// Cria a variável do número secreto e gera um número aleatório
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);

// Pede para o usuárioe introduzir qual número ele acredita que seja o número secreto. Assim como a variável de quantas vezes o usuário tentou acertar.
let escolhaUser;
let tentativas = 1;

// Adiciona ao console (enquanto ferramenta do desenvolvedor) qual seria o número secreto.
console.log(`O número secreto é ${numeroSecreto}`);

// Verifica, a partir de um looping, se o número inserido pelo usuário é, ou não, igual ao número secreto.
while (escolhaUser != numeroSecreto) {
    // debugger; -> Comando bem interessante, pausa a execução
    escolhaUser = Number(prompt(`Digite um número entre 1 e ${valorMaximo}: `));
    // Caso o usuário tenha acertado o número, um comando BREAK será chamado para finalizar o loop.
    if (escolhaUser === numeroSecreto) {
        break;
    } else {
        // Dicas para o usuário se aproximar do número secreto. Assim como contagem de tentativas
        alert(`O número secreto é ${escolhaUser > numeroSecreto ? 'menor' : 'maior'} que ${escolhaUser}.`);
        tentativas++; // Igual o += do python, se o valor for 1
        // console.log(`Tentativa ${tentativas} | Número Secreto -> ${numeroSecreto}`)
    }
}

// Define se a palavra utilizada será 'tentativa' ou 'tentativas'. 
// Se lê: tentativas é maior que 1? Se for, será 'tentativas', senão, 'tentativa'.
let numeroTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Print do recurso final
alert(`Parabéns, você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${numeroTentativa}.`);
