let amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector("input").value;

    if (nome != ""){
        amigos.push(nome);
        limparcampo() //Chama a função limpacampo para limpar o input
        atualizarlistamigos()// chama a função para atualizar a lista na tela
    }else{
        alert("Por favor, insira um nome.")
    }
}

function limparcampo(){
    nome = document.querySelector("input");
    nome.value = "";
}

function atualizarlistamigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa a lista antes de adicionar os itens

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);// adiciona o item na lista
    }
}

function sortearAmigo(){

    if (amigos.length === 0){
        alert("Lista vazia, por favor adicone os nomes.")
        return;
    }else{
        let sorteador = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[sorteador];
        document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`}//atualiza o HTML para mostrar o nome sorteado
}

