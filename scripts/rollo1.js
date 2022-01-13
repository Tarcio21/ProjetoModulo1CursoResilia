function primeiroNivelRollo() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Vai adiante pra cima deles e luta desesperadamente\n2. Segura a onda e diz para eles não atacarem e irem embora'
      );
  
      if (question == 1) {
        window.location.href = "../caminhos/gameoverrollo1.html";
        break;
      } else if (question == 2) {
        window.location.href = "../caminhos/rollo02.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }
  