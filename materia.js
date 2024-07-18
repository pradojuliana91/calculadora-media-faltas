class Materia {
    constructor(nome, notas, faltas) {
        this.nome = nome; // Inicializa o nome da matéria
        this.notas = notas; // Inicializa um array com as notas da matéria
        this.faltas = faltas; // Inicializa o número de faltas da matéria
    }

    calcularMedia() {
        const total = this.notas.reduce((soma, nota) => soma + nota, 0); // Soma todas as notas
        return total / this.notas.length; // Divide a soma pelo número de notas para obter a média
    }

    obterStatus() {
        const media = this.calcularMedia(); // Calcula a média das notas da matéria
        if(this.faltas > 5) {
            return 'Reprovado por faltas'; // Retorna 'Reprovado por faltas' se o número de faltas for maior que 5
        } else if(media >= 6) {
            return 'Aprovado'; // Retorna 'Aprovado' se a média for maior ou igual a 6
        } else {
            return 'Reprovado por notas'; // Retorna 'Reprovado por notas' se a média for menor que 6
        }
    }
}

module.exports = Materia; // Exporta a classe Materia para ser utilizada em outros arquivos