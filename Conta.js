export class Conta {
  constructor(sladoInicial, cliente, agencia){
    this._saldo = sladoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

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

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}