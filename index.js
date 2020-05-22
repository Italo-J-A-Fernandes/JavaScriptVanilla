class Cliente {
  nome;
  cpf;
}
class ContaCorrent {
  agencia;
  saldo;

  sacar(valor) {
    if(this.saldo >= valor){
      this.saldo -= valor;
    }
  }
}
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88877722289;

const contaCorrenteCliente1 = new ContaCorrent();
contaCorrenteCliente1.saldo = 0;
contaCorrenteCliente1.agencia = 1001;
console.log(contaCorrenteCliente1);
contaCorrenteCliente1.saldo = 100;
console.log(contaCorrenteCliente1);
contaCorrenteCliente1.sacar(50);
console.log(contaCorrenteCliente1);

console.log(cliente1);
console.log(cliente2);
