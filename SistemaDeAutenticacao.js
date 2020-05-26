/*
  Ser autenticavel(usuario) significa ter a método autenticar

  ducky type
*/
export class SistemaDeAutenticacao {
  static login(usuario, senha){
    if(SistemaDeAutenticacao.ehAutenticavel(usuario)){
      return usuario.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(usuario){
    return  "autenticar" in usuario && usuario.autenticar instanceof Function;
  }
}