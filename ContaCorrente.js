import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  constructor(cliente, agencia){
    this._cliente = cliente;
    this.agencia = agencia;
  }
  agencia;
  
  _saldo = 0; // padrão que a galera ta seguindo enquanto a feature não é aprovado
  // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
  _cliente;

  set cliente(novoValor) {
      if(novoValor instanceof Cliente){
        this._cliente = novoValor;
      }
  }

  get cliente(){
    return this._cliente;
  }

  get saldo(){
    return this._saldo;
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