const form = document.getElementById('form-atividade');
const imgaprovado =  `<img src= "aprovado.png" alt="emoji celebrando" />`;
const imgreprovado =  `<img src= "reprovado.png" alt="emoji decepecionado" />`;
const atividades = [];
const notas = [];
const spanaprovado = `<span class= "resultado aprovado">aprovado</span>`;
const spanreprovado = `<span class= "resultado reprovado">reprovado</span>`;
const notaminima = parseFloat(prompt("digite a nota mínima:")); 

let linhas = '';


form.addEventListener('submit',function(e) {
e.preventDefault();

adicionalinha();
atualizatabela();
atualizamediafinal();
    
});

function adicionalinha() {
    const inputnomeatividade = document.getElementById('nome-atividade');
    const inputnotaatividade = document.getElementById('nota-atividade');

    if (atividades.includes (inputnomeatividade.value)) {
        alert (`a Atividade: ${inputnomeatividade.value} já foi inserida`);
    }
    else {
        atividades.push(inputnomeatividade.value);
        notas.push(parseFloat(inputnotaatividade.value));
        
        let linha = '<tr>';
        linha += `<td>${inputnomeatividade.value}</td>`;
        linha += `<td>${inputnotaatividade.value}</td>`;
        linha += `<td>${inputnotaatividade.value >= notaminima ? imgaprovado : imgreprovado}</td>`;
        linha += `</tr>`;
        
        linhas += linha; 
    }

    
    
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
    
    inputnomeatividade.value = '';
    inputnotaatividade.value = '';
}

function atualizatabela() {
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
}

function atualizamediafinal() {
  const mediafinal = calculamediafinal();

   document.getElementById('media-final-valor').innerHTML = mediafinal;
   document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaminima ? 'spanaprovado' : 'spanreprovado';

}

function calculamediafinal() {
    let somadasnotas = 0;

    for (let i = 0; i  < notas.length; i++) {
        somadasnotas += notas [i];
    }

    return somadasnotas / notas.length;
    
}