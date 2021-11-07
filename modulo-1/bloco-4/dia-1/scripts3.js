let a = 1;
let b = 2;

let soma = a + b;
let subtracao = a - b;
let divisao = a / b;
let multiplicacao = a * b;
let modulo = a % b;

const numeroUm = 8;
const numeroDois = 19;

if (numeroUm > numeroDois) {
    console.log("O número " + numeroUm + " é maior");
} else if (numeroDois > numeroUm) {
    console.log("O número " + numeroDois + " é maior");
} else {
    console.log("Os números são iguais");
}

const numeroTres = 8;
const numeroQuatro = 19;
const numeroCinco = 35;

if (numeroTres > numeroQuatro && numeroTres > numeroCinco) {
    console.log("O número " + numeroTres + " é maior");
} else if (numeroQuatro > numeroTres && numeroQuatro > numeroCinco) {
    console.log("O número " + numeroQuatro + " é maior");
} else if (numeroCinco > numeroTres && numeroCinco > numeroQuatro) {
    console.log("O número " + numeroCinco + " é maior");
} else {
    console.log("Os números são iguais");
}

const valor = -5;

if (valor >= 0) {
    console.log("É um valor positivo");
} else {
    console.log("É um valor negativo");
}

const angulo1 = 30;
const angulo2 = 50;
const angulo3 = 80;

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else if (angulo1 + angulo2 + angulo3 > 0 && angulo1 + angulo2 + angulo3 != 180) {
    console.log(false);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("Erro. Angulo(s) invalido(s)")
}

let peca = "BISpo";
let nome = peca.toLowerCase();
console.log(nome);

if (nome == "rei" || nome == "rainha") {
    console.log("Horizontal, vertical e diagonal)");
} else if (nome == "bispo") {
    console.log("Diagonal");
} else if (nome == "cavalo") {
    console.log("Em L");
} else if (nome == "torre") {
    console.log("Vertical ou horizontal");
} else if (nome == "peão") {
    console.log("Para frente");
} else {
    console.log("Essa não é uma peça do xadrez");
}

let nota = 98;

if (nota >= 90) {
    console.log("Nota A");
} else if (nota < 90 && nota >= 80) {
    console.log("Nota B");
} else if (nota < 80 && nota >= 70) {
    console.log("Nota C");
} else if (nota < 70 && nota >= 60) {
    console.log("Nota D");
} else if (nota < 60 && nota >= 50) {
    console.log("Nota E");
} else if (nota < 50 && nota >= 0) {
    console.log("Nota F");
} else {
    console.log("Erro");
}

const numeroUmSegundo = 9;
const numeroDoisSegundo = 3;
const numeroTresSegundo = 27;

if (numeroUmSegundo % 2 == 0 || numeroDoisSegundo % 2 == 0 || numeroTresSegundo % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

const numeroUmTerceiro = 9;
const numeroDoisTerceiro = 3;
const numeroTresTerceiro = 27;

if (numeroUmTerceiro % 2 == 1 || numeroDoisTerceiro % 2 == 1 || numeroTresTerceiro % 2 == 1) {
    console.log(true);
} else {
    console.log(false);
}

const custo = 5;
const valorVenda = 8;
const valorPosImposto = custo * 1.2;
const lucro = (valorVenda * 1000) - (valorPosImposto * 1000);

console.log(lucro);

const salarioBruto = 3000;
let IR;
let INSS;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    INSS = salarioBruto * 0.09
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11
} else {
    INSS = 570.88
}

const salarioPosINSS = salarioBruto - INSS;

if (salarioPosINSS <= 1903.98) {
    IR = 0;
} else if (salarioPosINSS > 1903.98 && salarioPosINSS <= 2826.65) {
    IR = ((salarioPosINSS * 0.075) - 142.80)
} else if (salarioPosINSS > 2826.65 && salarioPosINSS <= 3751.05) {
    IR = ((salarioPosINSS * 0.15) - 354.80)
} else if (salarioPosINSS > 3751.05 && salarioPosINSS <= 4664.68) {
    IR = ((salarioPosINSS * 0.225) - 636.13)
} else (
    IR = ((salarioPosINSS * 0.275) - 869.36)
)

const liquidoReceber = salarioPosINSS - IR;

console.log(liquidoReceber);