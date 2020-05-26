/*
  Ser autenticavel(usuario) significa ter a método autenticar
*/
export class SistemaDeAutenticacao {
  static login(usuario, senha){
    return usuario.autenticar(senha);
  }
}