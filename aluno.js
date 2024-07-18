const Materia = require('./materia'); // Importa a classe Materia

class Aluno {
    constructor(nome) {
        this.nome = nome; // Inicializa o nome do aluno
        this.materias = []; // Inicializa um array vazio para armazenar as matérias do aluno
    }

    adicionarMateria(nomeMateria, notas, faltas) {
        const materia = new Materia(nomeMateria, notas, faltas); // Cria um novo objeto Materia
        this.materias.push(materia); // Adiciona a matéria ao array de matérias do aluno
    }
}

module.exports = Aluno; // Exporta a classe Aluno para ser utilizada em outros arquivos