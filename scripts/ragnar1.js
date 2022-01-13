function primeiroNivelRagnar() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Sim, pois toda ajuda é bem vinda, ainda mais que estavam em menor número\n2. Não, pois eles não conhecem o guerreiro. Devem prosseguir os planos sem o mesmo'
      );
  
      if (question == 1) {
        window.location.href = "../caminhos/gameoverragnar1.html";
        break;
      } else if (question == 2) {
        window.location.href = "../caminhos/ragnar02.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }