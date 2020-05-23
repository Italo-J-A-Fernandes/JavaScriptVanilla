class Cliente {
  nome;
  cpf;
}
class ContaCorrent {
  agencia;
  _saldo = 0; // padrão que a galera ta seguindo enquanto a feature não é aprovado
  // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields

  sacar(valor) {
    if(this._saldo >= valor){
      this._saldo -= valor;
      return  valor;
    }
  }

  depositar(valor) {
    // tecnica early return
    if(valor <= 0) {
      return;
    }
    
    this._saldo += valor;
  }

}
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88877722289;

const contaCorrenteCliente1 = new ContaCorrent();
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.depositar(100);
const valorSacado = contaCorrenteCliente1.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteCliente1);
