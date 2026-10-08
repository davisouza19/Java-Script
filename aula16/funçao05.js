// RECURSIVIDADE / função RECURSIVA => quando uma função é chamada dentro dela própria

function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n - 1) //chamando a função dentro dela própria
    }
}

console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n * (n-1)!
1! = 1
*/

/*
- Basicamente, a function funciona como um while onde a chamada final da function acontece antes.

- O IF bloqueia um loop infinito, definindo valor minimo como 1 ja que nao precisamos 
multiplicar o valor final por 1.

- Como ele sempre tenta efetuar o fatorial e o proprio codigo manda ele voltar com -1
ele guarda a operacao para quando o codigo parar de loopar e faz os fatorial anteriores primeiro
EXEMPLO:
N = 5 * fatorial(N-1)    isso executa o primeiro loop 
N = 4 * fatorial(N-1)    como o java script espera um return sempre que uma função é chamada, ela entra em fila.
N = 3 * fatorial(N-1)    o loop continua até que o codigo pare.
N = 2 * fatorial(N-1)
N = 1 * fatorial(N-1)    fatorial de 1 tem resultado 1, ou seja, para no IF e retorna 1

Depois de todo esse processamento a function comeca as contagens de pela ordem inversa
ja que conseguiu as informacoes que queria:

n = 1 ativa o if e retorna o numero 1 como resposta de n = 2 * fatorial(n-1)
substituindo o chamado da funcao pelo numero do return.
n = 2 * 1 = 2, assim ele consegue a resposta da informacao que faltava em N = 3 * fatorial(N-1)
e substitui novamente da mesma forma sucessivamente ate completar todas as operacoes em espera
n = 3 * 2 = 6
n = 4 * 6 = 24
n = 5 * 24 = 120

Fim das operacoes que ficaram em espera.

*/