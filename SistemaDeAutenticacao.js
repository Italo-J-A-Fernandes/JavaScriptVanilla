export class SistemaDeAutenticacao {
  static login(usuario, senha){
    return usuario.senha == senha;
  }
}