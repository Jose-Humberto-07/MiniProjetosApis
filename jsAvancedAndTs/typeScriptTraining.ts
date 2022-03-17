// class
class Pessoa {
	nome: string;
	dataNascimento: String;
}


const pessoaObjeto = new Pessoa() {
	nome: "neymar",
	dataNascimento: "45/45/1000" 
}


// interfaces
interface IAnimal {
	nome: string;
	tipo: 'terreste' | 'aquático';
	executarRugido(alturaEmDecibeis): void;
};


interface IFelino extends IAnimal {
	visaoNoturna: boolean:

};

interface ICanino extends IAnimal {
	porte: "pequeno" | "medio" | "grande";

};


const animal: IAnimal = {
	nome: "Elefante",
	tipo: "terreste",
	executarRugido: () => {
		`${alturaEmDecibeis}db`
	}
};

const felino: IFelino = {
	nome: "Leão",
	tipo: "terreste",
	visaoNoturna: true
}


// types

// vai juntar interfaces ou types

type IDomestico = IFelino | ICanino;

// agora o IDomestico vai pegar todas as tipagens de IFelino e Icanino
const animal: IDomestico = {
	domestico: true,
	nome: "cachorro",
	porte: "medio",
	tipo: "terreste"
}


type Pessoa = {
	nome: string,
	idade: number,
	cpf: int,
	endereco: {
		estado: string,
		cidade: string
	}
}

const aluno: Pessoa = {
	nome: "jurubeba",
	idade: 17,
	cpf: "8349588439554",
	endereco: {
		estado: "amazonas",
		cidade: "manaus"
	}
}

type Animal = {
    nome: string;
    idade: number;
}

let cachorro: Animal = {
    nome: 'Rex',
    idade: 3
}

// types in function

interface IUsuario {
	id: string;
	email: string;
}

interface IAdmin extends IUsuario {
	cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
	if ('cargo ' === gerente) {
		
	}


}

//==================================================
// is very similar to java
interface ICachorro {
	private nome: string;
	private idade: int;
	public parqueFavorito?: string;
	public latido(): void;
}

class ClassCachorro implements ICachorro {
	private nome;
	private  idade;
	public latido() {
		console.log("au au au");
	}

	constructor() {
	}
}

const thor = new ClassCachorro() {
	thor.idade: 17,
	thor.nome: "thor",
	thor.latido();
}

console.log(thor);