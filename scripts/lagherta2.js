function segundoNivelLagherta() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Caçar na selva e continuar a investigação do terreno\n2. Voltar e procurar o grupo de Rollo e Ragnar'
      );
  
      if (question == 1) {
        window.location.href = "../caminhos/gameoverlagherta2.html";
        break;
      } else if (question == 2) {
        window.location.href = "../caminhos/lagherta3.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }