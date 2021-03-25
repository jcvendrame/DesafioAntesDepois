window.addEventListener('load', iniciar);
function iniciar() {
    document.getElementById('btn01').addEventListener('click', function() {
        var num = parseInt(prompt('Digite um número inteiro'));
        var ant = num - 1;
        var suc = (num + 1);
        alert(`antes de ${num} temos número ${ant} e depois temos o número ${suc}`)
    })
}