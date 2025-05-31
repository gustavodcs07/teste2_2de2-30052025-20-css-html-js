function mostrarIdade(ano,idade){
    ano = new Date().getFullYear();
console.log(ano);
var nome = document.getElementById('nome').value;
 var idade = document.getElementById('idade').value;
 document.getElementById('mensagem').textContent = `Olá ${nome}! Você
 tem ${ano - idade} anos`;
}




