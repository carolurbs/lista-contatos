const form = document.getElementById('lista-telefone');
var linhas = " ";

form.addEventListener('submit', function(e)
{
e.preventDefault();
const inputNomeContato = document.getElementById('nome-contato');
const inputTelefone = document.getElementById("telefone");
var linha = '<tr>';
linha +=`<td> ${inputNomeContato.value} </td>`;
linha +=`<td> ${inputTelefone.value} </td>`;
linha +='<tr>';

linhas += linha;

const corpoTabela=document.querySelector('tbody');
corpoTabela.innerHTML=linhas;

inputNomeContato.value = " ";
inputTelefone.value = " ";
})