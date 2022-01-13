function primeiroNivelLagherta() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Luta prontamente contra eles, pois ela é uma das maiores guerreiras da região.\n2. Finge uma rendição entregando sua espada no primeiro momento para despistá-los e poder fugir'
      );
  
      if (question == 1) {
        window.location.href = "../caminhos/lagherta2.html";
        break;
      } else if (question == 2) {
        window.location.href = "../caminhos/gameoverlagherta1.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }