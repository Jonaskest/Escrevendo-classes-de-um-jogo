class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque = "";
        if(this.tipo === "guerreiro"){
            ataque = "espada";
        } else if(this.tipo === "mago"){
            ataque = "magia";
        } else if(this.tipo === "monge"){
            ataque = "artes marciais";
        } else {
            ataque = "shuriken";
        }
        return ataque;
    }
}

let personagem = new Heroi("Naruto", "32 anos", "ninja");

console.log("O " + personagem.tipo + " atacou usando " + personagem.atacar());
