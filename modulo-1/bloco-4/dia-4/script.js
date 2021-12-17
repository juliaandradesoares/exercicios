// para fixar - objetos

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3
    },
} 

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora Marta Silva foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes')

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')

// para fixar - for/in

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
};

for (let chaves in names) {
    console.log('Olá ' + names[chaves]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let chaves in car) {
    console.log(chaves + ': ' + car[chaves]);
}

// exercicios do dia, 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);

info['recorrente'] = 'sim';

console.log(info)

for (let chaves in info) {
    console.log(chaves);
}

for (let chaves in info) {
    console.log(info[chaves]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Pato DChristmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
};

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log('Ambos recorrentes');

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

const novoLivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
}

leitor.livrosFavoritos.push(novoLivro);

console.log(leitor)

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

//

function verificaPalindrome(palavra) {
    let reverso = '';

    for (let letras of palavra) {
        reverso = letras + reverso;
    }

    if (reverso === palavra) {
        console.log(true);
    } else {
        console.log(false);
    }
}

verificaPalindrome('arara');

verificaPalindrome('desenvolvimento');

function retornaIndiceDoMaior(arr) {
    let maiorNumero = arr[0];
    
    for (let numero of arr) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        } else {
            maiorNumero = maiorNumero;
        }
    }

    console.log(arr.indexOf(maiorNumero));
}

let arrTeste = [2, 3, 6, 7, 10, 1];

retornaIndiceDoMaior(arrTeste);

function retornaIndiceDoMenor(arr) {
    let menorNumero = arr[0];
    
    for (let numero of arr) {
        if (numero < menorNumero) {
            menorNumero = numero;
        } else {
            menorNumero = menorNumero;
        }
    }

    console.log(arr.indexOf(menorNumero));
}

let arrTeste2 = [2, 4, 6, 7, 10, 0, -3];

retornaIndiceDoMenor(arrTeste2);

function nomeMaior(arr) {
    let maiorNome = arr[0];

    for (let nomes of arr) {
        if (nomes.length > maiorNome.length) {
            maiorNome = nomes;
        } else {
            maiorNome = maiorNome;
        }
    }

    console.log(maiorNome);
}

let arrTeste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

nomeMaior(arrTeste3);

function maisRepetido(arr) {
    let objeto = {};

    for (let index = 0; index < arr.length; index += 1) {
        let repeticoes = 0;

        for (let indexComparacao = 0; indexComparacao < arr.length; indexComparacao += 1) {
            if(arr[index] === arr[indexComparacao]) {
                repeticoes += 1;
            }
        }

        objeto[arr[index]] = repeticoes;
    }

    let quantidadeRepeticoes = 0;
    let numeroMaisRespetido = 0;

    for (let chave in objeto) {
        if(objeto[chave] > quantidadeRepeticoes) {
            quantidadeRepeticoes = objeto[chave];
            numeroMaisRespetido = parseInt(chave);
        }
    }

    console.log(numeroMaisRespetido);
}

let arrTeste4 = [2, 3, 2, 5, 8, 2, 3];

maisRepetido(arrTeste4);

function soma(numero) {
    let soma = 0;

    for (let inicio = 0; inicio <= numero; inicio += 1) {
        soma += inicio;
    }

    console.log(soma);
}

soma(5);

function verificaString(word, ending) {
    let caracteresFinais = ending.length;

    let finalWord = word.slice(word.length - caracteresFinais);

    if (ending === finalWord) {
        console.log(true);
    } else {
        console.log(false);
    }
}

verificaString('trybe', 'be');

verificaString('joaofernando', 'fernan');