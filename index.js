import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88877722289;

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.cliente = cliente1;
contaCorrenteCliente1.depositar(500);

const contaCorrente2 = new ContaCorrente();
contaCorrente2.cliente = cliente2;
contaCorrente2.agencia = 102;

contaCorrenteCliente1.transferir(50, contaCorrente2);

console.log(contaCorrenteCliente1);
console.log(contaCorrente2);
