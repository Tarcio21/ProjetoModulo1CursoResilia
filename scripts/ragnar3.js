function terceiroNivelRagnar() {
    while (question != 1 || question != 2) {
      var question = prompt(
        '1. Seguir Rollo e atacar Paris pelo mar\n2. Seguir a ideia vinda a partir das extrações de informações pelo monge, já que Ragnar as conseguiu de maneira inteligente.'
      );
  
      if (question == 1) {
        window.location.href = "../caminhos/gameoverragnar3.html";
        break;
      } else if (question == 2) {
        window.location.href = "../caminhos/ragnarfim.html";
        break;
      } else {
        alert("Digite 1 ou 2");
      }
    }
  }