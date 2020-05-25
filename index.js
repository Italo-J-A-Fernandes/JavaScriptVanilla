import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente("Alice", 88877722289);

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
contaCorrenteCliente1.depositar(500);

const contaCorrente2 = new ContaCorrente(cliente2, 102);

contaCorrenteCliente1.transferir(50, contaCorrente2);

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteCliente1);
console.log(contaCorrente2);
