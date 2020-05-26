import { Cliente } from './Cliente.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';
import { Diretor } from './Funcionario/Diretor.js';
import { Gerente } from './Funcionario/Gerente.js';
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

// const cliente1 = new Cliente("Ricardo",11122233309);
// const cliente2 = new Cliente("Alice", 88877722289);

// const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
// contaCorrenteCliente1.depositar(500);
// contaCorrenteCliente1.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(150);
// contaSalario.sacar(50);

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("José", 5000, 12378945685);

const estaLogado = SistemaDeAutenticacao.login(diretor, "123456");

console.log(estaLogado);