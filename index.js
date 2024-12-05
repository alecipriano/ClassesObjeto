class heroi{
	constructor(nome, idade, tipo){
  		this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
  	
  	atacar(){
      let ataque = "";
      switch (this.tipo) {
      case "mago":
           ataque = "magia"
          break;
      case "guerreiro":
          ataque = "espada"
          break;
      case "monge":
          ataque = "artes marciais"
          break;
      case "ninja":
          ataque = "shuriken"
          break;
      default:
          ataque = "dialogo convincente(negociação para um tratado de paz)"
          break;
      }
    
      console.log(`O heroi ${this.nome} tem ${this.idade} anos de idade é do tipo ${this.tipo.toUpperCase()} e atacou usando ${ataque}.`)
    }
}


let mago = new heroi("Harry", 45, "mago")
let monge = new heroi("Estranho", 42, "monge")
let guerreiro  = new heroi("Lucas", 42, "guerreiro")
let ninja  = new heroi("Lee", 42, "ninja")


mago.atacar()
monge.atacar()
guerreiro.atacar()
ninja.atacar()