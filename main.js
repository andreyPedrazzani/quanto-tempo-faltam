const dateAtual = new Date ();
let dataobjetivo = prompt("Data final ANO-MES-DIA"
    Exemplo: 2024-04-10);
dataobjetivo = new Date (dataobjetivo + "T23:59:59");
let diasQueFaltam = Math.floor ((dataObjetivo - dataAtual) / 86400000);
document.querySelector("#dias_restantes").textContent = diasQueFaltam