//Selecionar e obter referências aos elementos HTML
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//Função para converter as unidades
function convert() {
  //Obter os valores das unidades de entrada e saída
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  // Verificar se as unidades de entrada e saída são iguais
  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  // Converter o valor de entrada para metros
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value * 1000;
      break;
      case "hm":
      meters = inputElement.value * 100;
      break;
      case "dam":
      meters = inputElement.value * 10;
      break;
      case "dm":
      meters = inputElement.value / 10;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }

  // Converter os metros para a unidade de saída
  let result;
  switch (toValue) {
    case "m":
      result = inputElement.value;
      break;
    case "km":
      result = inputElement.value * 1000;
      break;
      case "hm":
      result = inputElement.value * 100;
      break;
      case "dam":
      result = inputElement.value * 10;
      break;
      case "dm":
      result = inputElement.value / 10;
      break;
    case "cm":
      result = inputElement.value / 100;
      break;
    case "mm":
      result = inputElement.value / 1000;
      break;
  }


  // Exibir o resultado na caixa de saída
  //output.value = result.toFixed(2);
    outputElement.value = result;

  // Exibir a mensagem de conversão
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;
  
  const message = `${inputElement.value} ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
  messageElement.textContent = message;
  return;
}

// Adicionar um ouvinte de eventos ao botão de conversão
convertButton.addEventListener("click", convert);
