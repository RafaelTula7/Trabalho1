// Rafael Claudio Ferreira Tula - 2018010477

// Função para apresentar inputs na tela do site 
function pedido() {
    //Definindo Variáveis
    let tipo;   
    let sabor;
    // Armazenando o valor dos inputs nas variaveis
    tipo = document.getElementById("edtTipo").value;
    sabor = document.getElementById("edtSabor").value;
    //  if para verificar se os campos estão preenchidos
    if (tipo != null && sabor != null) {
      let apresentacao = document.getElementById("areaResp"); // atribuindo a variavel apresentacao ao id da area de resposta do Html
      let textoResp = document.createElement("p");  // Criando um paragrafo que sera apresentado como resposta
      textoResp.append("O seu pedido é: " + tipo + " de " + sabor);  // Inserindo a frase de saida a variavel criada
      apresentacao.appendChild(textoResp); // Adicionando a Resposta ao HTML
  
      limparCampos();
    } 
    
  }
  
  // Função reaproveitada da aula para limpar campos de digitação
  function limparCampos() {
    document.getElementById("edtTipo").value = null;
    document.getElementById("edtSabor").value = null;
  }