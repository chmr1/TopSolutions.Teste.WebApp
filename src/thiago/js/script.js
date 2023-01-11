function onPress() {
  var mensagem = document.getElementById("inputId").value;
  if (!mensagem) mensagem = "Você não escreveu nada";
  alert(mensagem);
}
