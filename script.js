// Parte 1: Controle de número de reservas
const maxReservas = 5;
let contador = 0;

// Seleciona o elemento HTML com o ID 'botao' e adiciona um ouvinte de evento para o evento de clique
document.getElementById("botao").addEventListener("click", function(event) {
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();
    
    // Verifica se o número máximo de reservas já foi atingido
    if (contador < maxReservas) {
        alert("Reserva efetuada! Reserva número: " + (contador + 1));
        contador++;
        
        // Desabilita o botão e exibe uma mensagem quando o número máximo de reservas for atingido
        if (contador >= maxReservas) {
            document.getElementById("botao").disabled = true;
            alert("Número máximo de reservas atingido.");
        }
    } else {
        // O bloco else pode ser removido se a lógica já estiver correta acima
        // Exibe uma mensagem quando o número máximo de reservas é atingido
        alert("Número máximo de reservas atingido.");
        document.getElementById("botao").disabled = true;
    }
});
