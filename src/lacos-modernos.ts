
const frutas: string[] = ["Maçã", "Banana", "Laranja"];

for (const fruta of frutas) {
  console.log(`Fruta: ${fruta}`);
}


const palavra: string = "TypeScript";
let vogais: number = 0;

for (const letra of palavra) {
  if ("aeiouAEIOU".includes(letra)) {
    vogais++;
  }
}

console.log(`"${palavra}" tem ${vogais} vogais`);


const usuario: { nome: string; email: string; idade: number } = {
  nome: "Ana",
  email: "ana@email.com",
  idade: 28
};

for (const chave in usuario) {
  const valor = usuario[chave as keyof typeof usuario];
  console.log(`${chave}: ${valor}`);
}


type Produto = {
  id: number;
  nome: string;
  preco: number;
};

const produtos: Produto[] = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 89 },
  { id: 3, nome: "Teclado", preco: 199 }
];

console.log("\n--- Lista de Produtos ---");
for (const produto of produtos) {
  console.log(`${produto.nome}: R$ ${produto.preco}`);
}