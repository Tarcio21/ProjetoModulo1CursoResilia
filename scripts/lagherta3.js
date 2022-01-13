function terceiroNivelLagherta() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Seguir a ideia de Lagherta, pois intuição de mulher não falha\n2. Não dar ouvidos a ela e procurarem ajuda para somar com outro exército.'
      );
  
      if (question == 1) {
        window.location.href = "../caminhos/laghertafim.html";
        break;
      } else if (question == 2) {
        window.location.href = "../caminhos/gameoverlagherta3.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }