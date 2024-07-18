# Calculadora de Média e Faltas

Este é um projeto de gerenciamento de notas e faltas de alunos desenvolvido em JavaScript utilizando Node.js. A aplicação permite o cadastro de alunos, matérias, notas e faltas, e calcula a média das notas para determinar se o aluno está aprovado ou reprovado com base em notas e faltas.

## Funcionalidades

- Cadastro de alunos com nome.
- Cadastro de matérias com nome, notas e faltas.
- Cálculo da média de notas para cada matéria.
- Verificação do status do aluno com base nas faltas e na média das notas.
- Exibição dos resultados de cada aluno, incluindo média, faltas e status.

## Estrutura do Projeto

- **index.js**: Arquivo principal que executa a aplicação. Contém a lógica para interagir com o usuário, coletar dados e exibir resultados.
- **aluno.js**: Define a classe `Aluno` que gerencia as informações e operações relacionadas a um aluno, incluindo a adição de matérias.
- **materia.js**: Define a classe `Materia` que gerencia as informações e operações relacionadas a uma matéria, incluindo o cálculo da média e a verificação do status.

## Instalação

1. Clone o repositório para sua máquina local:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd <NOME_DO_DIRETORIO>
    ```
3. Instale as dependências necessárias (se houver):
    ```bash
    npm install
    ```

## Uso

1. Navegue até o diretório do projeto onde está o arquivo `index.js`.
2. Execute o arquivo `index.js` utilizando Node.js:
    ```bash
    node index.js
    ```
3. Siga as instruções exibidas no terminal para cadastrar alunos, matérias, notas e faltas. A aplicação exibirá os resultados conforme as entradas fornecidas.

## Exemplo de Uso

Nome do aluno: Juliana
Nome da matéria: Matemática
Nota 1 de Matemática: 7
Nota 2 de Matemática: 5
Nota 3 de Matemática: 6
Número de faltas em Matemática: 3
Deseja adicionar outra matéria? (s/n): n

Resultado do aluno Juliana:
Matéria: Matemática
Média: 6.0
Faltas: 3
Resultado: Aprovado

## Contribuições

Sinta-se à vontade para contribuir com melhorias, correções e novos recursos. Para contribuir, faça um fork deste repositório e envie um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).