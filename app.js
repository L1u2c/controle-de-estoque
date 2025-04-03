// script.js
let estoque = [];

function atualizarTabela() {
    const tabela = document.getElementById('tabela-estoque').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';
    estoque.forEach((item, index) => {
        const row = tabela.insertRow();
        row.insertCell(0).textContent = item.nome;
        row.insertCell(1).textContent = item.quantidade;

        // Coloca o botão de excluir
        const cell = row.insertCell(2);
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.classList.add('delete');
        btnExcluir.onclick = () => excluirItem(index);
        cell.appendChild(btnExcluir);
    });
}

function adicionarItem() {
    const nome = document.getElementById('item').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    if (!nome || isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }

    // Verifica se o item já existe no estoque
    const itemExistente = estoque.find(item => item.nome.toLowerCase() === nome.toLowerCase());
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        estoque.push({ nome, quantidade });
    }

    // Limpa os campos de entrada
    document.getElementById('item').value = '';
    document.getElementById('quantidade').value = '';

    atualizarTabela();
}

function excluirItem(index) {
    if (confirm("Você tem certeza que deseja excluir este item?")) {
        estoque.splice(index, 1);
        atualizarTabela();
    }
}
