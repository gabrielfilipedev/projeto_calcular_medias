const form = document.getElementById('form-atividade');
form.addEventListener('submit',function(e) {
e.preventDefault();

const inputnomeatividade = document.getElementById('nome-atividade');
const inputnotaatividade = document.getElementById('nota-atividade');

alert('Atividade: ${inputnomeatividade} - nota: ${inputnotaatividade.value}');
    
});