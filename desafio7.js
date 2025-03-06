/*declarando variaveis para calculo */
let numero1;
let numero2;
let opcao;
let opc;

do {

    opcao = parseInt(prompt("Calculadora 7 Days Of Code - JS JavaScript\nEscolha uma operação matemática:\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair"));
    // numero1 = parseInt(prompt("Informe o primeiro número para a operação escolhida:"));
    //numero2 = parseInt(prompt("Informe o segundo número para a operação escolhida:"));
    switch (opcao) {

        case 1:
            {
                lerNumeros();
                adicao(numero1, numero2);
                break;
            }
        case 2:
            {
                lerNumeros();
                subtracao(numero1, numero2);
                break;
            }
        case 3:
            {
                lerNumeros();
                multiplicacao(numero1, numero2);
                break;
            }
        case 4:
            {
                lerNumeros();
                divisao(numero1, numero2);
                break;
            }
        case 5:
            {
                break;
            }
        default:
            {
                alert("Opção inválida!");
            }

    }

} while (opcao != 5);

alert("Até a próxima!");


/* funcões */
function adicao(n1, n2) {
    alert(`A adição dos números ${n1} + ${n2} = ` + (n1 + n2));
}

function subtracao(n1, n2) {
    alert(`A subtração dos números ${n1} - ${n2} = ` + (n1 - n2));
}

function multiplicacao(n1, n2) {
    alert(`A multiplicação dos números ${n1} x ${n2} = ` + (n1 * n2));
}

function divisao(n1, n2) {
    alert(`A divisão dos números ${n1} : ${n2} = ` + (n1 / n2));
}

function lerNumeros() {
    numero1 = parseInt(prompt("Informe o primeiro número para a operação escolhida:"));
    numero2 = parseInt(prompt("Informe o segundo número para a operação escolhida:"));
}