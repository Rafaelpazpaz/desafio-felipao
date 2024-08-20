// Variáveis para armazenar o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = "Tião";
let experiencia = 9007; // Exemplo de XP, pode ser alterado

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para classificar o herói baseado na experiência
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1000 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem com o nome do herói e o nível alcançado
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
