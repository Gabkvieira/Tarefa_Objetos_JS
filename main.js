function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Object.freeze(Pessoa);

function Funcionario(nome, idade, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome, idade);
}

function Estagiario(nome, idade) {
    Funcionario.call(this, nome, idade, "Estagiário", 2000);
}

function Gerente(nome, idade) {
    Funcionario.call(this, nome, idade, "Gerente", 10000);
}

const funcionario1 = new Funcionario("Gabriel", 24, "dev front-end", 5000);
const funcionario2 = new Estagiario("Lucas", 19);
const funcionario3 = new Gerente("Laura", 35);

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);
