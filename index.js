import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente("Alice", 88877722289);

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(150);
contaSalario.sacar(50);

console.log(contaSalario);
