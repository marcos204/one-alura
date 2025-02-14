let listaDeNomes = [];

function adicionarNome() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaDeNomes.push(nome);
    nomeInput.value = "";

    atualizarLista();
}

function atualizarLista() {
    const listaNomes = document.getElementById('listaNomes');
    listaNomes.innerHTML = "";

    listaDeNomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
    });

    const sortearBtn = document.getElementById('sortearBtn');
    if (listaDeNomes.length > 1) {
        sortearBtn.removeAttribute('disabled');
    } else {
        sortearBtn.setAttribute('disabled', true);
    }
}

function sortearAmigo() {
    if (listaDeNomes.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
    const nomeSorteado = listaDeNomes[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto é: ${nomeSorteado}`;
    responsiveVoice.speak(`O amigo secreto é: ${nomeSorteado}`, 'Brazilian Portuguese Female', { rate: 1.2 });
}






