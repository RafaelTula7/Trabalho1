function pedido() {
    let tipo;
    let sabor;
  
    tipo = document.getElementById("edtTipo").value;
    sabor = document.getElementById("edtSabor").value;
  
    if (tipo != null && sabor != null) {
      let apresentacao = document.getElementById("areaRespCalculo");
      let textoResp = document.createElement("p");
      textoResp.append("O seu pedido é: " + tipo + " de " + sabor);
      apresentacao.appendChild(textoResp);
  
      limparCampos();
    } 
    
  }
  
  function limparCampos() {
    document.getElementById("edtTipo").value = null;
    document.getElementById("edtSabor").value = null;
  }