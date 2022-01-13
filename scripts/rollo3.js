function terceiroNivelRollo() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Sim, devem lançar fogo\n2. Não, precaver e ir de madrugada pelo mar'
      );
  
      if (question == 1) {
        window.location.href = "../caminhos/rollofim.html";
        break;
      } else if (question == 2) {
        window.location.href = "../caminhos/gameoverrollo3.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }
  