// main.js

// Função para adicionar um novo contato
function adicionarContato() {

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    // Verificar se ambos os campos estão preenchidos
    if (nome !== "" && telefone !== "") {
        
        var tabela = document.getElementById("contatosBody");
        var novaLinha = tabela.insertRow();
        var celulaNome = novaLinha.insertCell(0);
        var celulaTelefone = novaLinha.insertCell(1);
        celulaNome.innerHTML = nome;
        celulaTelefone.innerHTML = telefone;

        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
}

const botaoAdicionarContato = document.getElementById("adicionarContato");
botaoAdicionarContato.onclick = adicionarContato;
