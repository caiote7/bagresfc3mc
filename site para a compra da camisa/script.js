function redirecionar(modelo) {
    window.location.href = `compra.html?modelo=${modelo}`;
}

function gerarMensagem() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelo = urlParams.get('modelo');
    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;
    const mensagem = `Gostaria de comprar a camisa ${modelo} com o nome ${nome} e o número ${numero}.`;
    document.getElementById('mensagem').value = mensagem;
    document.getElementById('mensagem-gerada').classList.remove('hidden');
}

function copiarMensagem() {
    const mensagem = document.getElementById('mensagem');
    mensagem.select();
    document.execCommand('copy');
    alert('Mensagem copiada!');
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modelo = urlParams.get('modelo');
    const productTitle = document.getElementById('product-title');
    if (modelo) {
        productTitle.textContent = `Camisa Modelo ${modelo.charAt(0).toUpperCase() + modelo.slice(1)}`;
    }
    
function redirecionar(modelo) {
        window.location.href = `compra.html?modelo=${modelo}`;
    }
});