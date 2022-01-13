function segundoNivelRollo() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Vai com os soldados ao amanhecer\n2. Tenta procurar Ragnar ou Lagherta para montarem um plano mais estratégico'
      );
  
      if (question == 1) {
        window.location.href = "../caminhos/gameoverrollo2.html";
        break;
      } else if (question == 2) {
        window.location.href = "../caminhos/rollo03.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }
  