function soma(n1, n2) {
    return n1 * n2;
};


console.log(soma(100, 100));

setTimeout(() => {
    console.log("depois de 2 segundos");
}, 2000);


const lista = ["neymar", "messi", "cristiano ronaldo", "di maria", "modric", "pogba", "sergio ramos", "mbappe", "papadopoulos"];


//console.log(lista);

function teste(...lista) {
    lista.forEach((nome) => {
        console.log(nome);
    });
}

//teste(lista);

console.log(
    lista.filter((nome) => {
        nome.indexOf(5);
    })
)

console.log(lista.length);

lista.push("gabriel jesus");
//console.log(lista);

lista.pop();
//console.log(lista);

const jogador = lista.pop();
console.log(jogador);

lista.push("giggs");
lista.push("kaka");
lista.push("luizito suarez");
lista.push("marcelo");
lista.push("antonny");

//lista.forEach((nome) => {
//    console.log(nome);
//})


console.log();
const jogadorShift = lista.shift();
console.log(jogadorShift);

console.log(lista.unshift("neymar da silva santos junior"));
console.log(lista[12]);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

//const myChildren = myGirls.concat(myBoys);
//const myChildren = myGirls.join(myBoys);
//console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

console.log(lista.toString());