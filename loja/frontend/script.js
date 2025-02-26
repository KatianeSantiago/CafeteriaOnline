let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let listaCarrinho = document.getElementById("lista-carrinho");
    let totalSpan = document.getElementById("total");

    listaCarrinho.innerHTML = "";
    carrinho.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        
        let btnRemover = document.createElement("button");
        btnRemover.textContent = "X";
        btnRemover.onclick = () => removerDoCarrinho(index);
        
        li.appendChild(btnRemover);
        listaCarrinho.appendChild(li);
    });

    totalSpan.textContent = total.toFixed(2);
}

function removerDoCarrinho(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}