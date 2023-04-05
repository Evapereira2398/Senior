const adiantamentoCheckbox = document.getElementById("adiantamento");
const valorAdiantamentoDiv = document.getElementById("valor-adiantamento");

const usoVeiculoCheckbox = document.getElementById("uso-veiculo");
const modelosCarrosDiv = document.getElementById("modelos-carros");

adiantamentoCheckbox.addEventListener("change", function() {
  if (this.checked) {
    valorAdiantamentoDiv.style.display = "block";
  } else {
    valorAdiantamentoDiv.style.display = "none";
  }
});

usoVeiculoCheckbox.addEventListener("change", function() {
  if (this.checked) {
    modelosCarrosDiv.style.display = "block";
  } else {
    modelosCarrosDiv.style.display = "none";
  }
});

function validarFormulario() {
    var inputs = document.getElementsByTagName("input");
    var camposVazios = [];
  
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "text" || inputs[i].type === "date"){
        if (inputs[i].value === "") {
          camposVazios.push(inputs[i].name);
        }
      }
    }
  
    if (camposVazios.length > 0) {
        alert("Por favor, preencha todos os campos!");
    } else {
        enviarFormulario();
    }
  }
  
  function enviarFormulario() {
    // Função para enviar o formulário
  
    var inputs = document.getElementsByTagName("input");
    var camposVazios = [];
  
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "text" || inputs[i].type === "date") {
        if (inputs[i].value === "") {
            camposVazios.push(inputs[i].name);
        }
      }
    } 
    
    if (camposVazios.length === 0) {
        document.getElementById("mensagem-envio").style.display = "block";
    }
  }
  
