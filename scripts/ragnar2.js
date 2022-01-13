function segundoNivelRagnar() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Não, pois o monge pode ser útil na estratégia que pretende seguir na invasão\n2. Sim, pois nunca deve confiar em outros guerreiros que não seguem os ensinamentos de Odin'
      );
  
      if (question == 1) {
        window.location.href = "../caminhos/ragnar03.html";
        break;
      } else if (question == 2) {
        window.location.href = "../caminhos/gameoverragnar2.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }