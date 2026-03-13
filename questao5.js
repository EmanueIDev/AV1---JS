class Pessoa {
constructor(nome, idade) {
this.nome = nome;
this.idade = idade;
}

apresentar() {
console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
}
}
let p1 = new Pessoa("Ana", 21);
let pessoa2 = new Pessoa("João", 25);
p1.apresentar();
pessoa2.apresentar();
