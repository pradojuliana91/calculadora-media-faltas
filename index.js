const readline = require('readline');
const Aluno = require('./aluno'); // Importa a classe aluno

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const alunos = []; // Array para armazenar os alunos cadastrados

function fazerPergunta(pergunta) {
    return new Promise(resolve => r1.question(pergunta, resolve));        
}

function validarNota(nota) {
    return !isNaN(nota) && nota >= 0 && nota <= 10; // Valida se a nota é um número entre 0 e 10
}

function validarFaltas(faltas) {
    return !isNaN(faltas) && faltas >= 0; // Valida se o número de faltas não é negativo
}

async function main() {
    let adicionarMaisAlunos = true;

    while(adicionarMaisAlunos) {
        const nome = await fazerPergunta('Nome do aluno: ');
        const aluno = new Aluno(nome); // Cria um novo objeto Aluno com o nome informado

        let adicionarMaisMaterias = true;
        while(adicionarMaisMaterias) {
            const nomeMateria = await fazerPergunta('Nome da matéria: ');
            const notas = [];
            for (let i = 1; i <=3; i++) {
                let nota;
                do {
                    nota = parseFloat(await fazerPergunta(`Nota ${i} de ${nomeMateria}: `));
                    if(!validarNota(nota)) {
                        console.log('Nota inválida! Digite uma nota entre 0 e 10.');
                    }
                } while(!validarNota(nota));
                notas.push(nota); // Adiciona a nota ao array de notas
            }

            let faltas;
            do {
                faltas = parseInt(await fazerPergunta(`Número de faltas em ${nomeMateria}: `));
                if(!validarFaltas(faltas)) {
                    console.log('Número de faltas inválido! Digite um número positivo.');
                }
            }while(!validarFaltas(faltas));

            aluno.adicionarMateria(nomeMateria, notas, faltas); // Adiciona a matéria ao aluno

            const maisMaterias = await fazerPergunta('Deseja adicionar outra materia? (s/n): ');
            adicionarMaisMaterias = maisMaterias.toLowerCase() ==='s'; // Continua se resposta for 's'
        }
        
        alunos.push(aluno); // Adiciona o aluno ao array de alunos

        const maisAlunos = await fazerPergunta('Deseja adicionar outro aluno? (s/n): ');
        adicionarMaisAlunos = maisAlunos.toLowerCase() ==='s'; // Continua se resposta for 's'
    }

    
    // Mostrar resultados
    alunos.forEach(aluno => {
        console.log(`\nResultado do aluno ${aluno.nome}:`);
        aluno.materias.forEach(materia => {
            console.log(`\nMatéria: ${materia.nome}`);
            console.log(`Média: ${materia.calcularMedia().toFixed(1)}`); // Exibe a média com uma casa decimal         
            console.log(`Faltas: ${materia.faltas}`);      
            console.log(`Resultado: ${materia.obterStatus()}`);      
        });
    });

    r1.close(); // Fecha a interface de leitura de entrada
}

main(); // Inicia a execução do programa


