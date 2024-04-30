let nome = prompt(`Digite o nome do jogador: `);
let quantidadeXp = prompt("Quantos XP você tem?")
const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (quantidadeXp <= 1000){
    prompt(`O Herói de nome ${nome} está no nível de ${nivel[0]}`);
}

if (quantidadeXp >= 1001 && quantidadeXp <= 2000){
    prompt(`O Herói de nome ${nome} está no nível de ${nivel[1]}`);
}
if (quantidadeXp >= 2001 && quantidadeXp <= 5000){
    prompt(`O Herói de nome ${nome} está no nível de ${nivel[2]}`);
}

if (quantidadeXp >= 5001 && quantidadeXp <= 7000){
    prompt(`O Herói de nome ${nome} está no nível de ${nivel[3]}`);
}

if (quantidadeXp >= 7001 && quantidadeXp <= 8000){
    prompt(`O Herói de nome ${nome} está no nível de ${nivel[4]}`);
}

if (quantidadeXp >= 8001 && quantidadeXp <= 9000){
    prompt(`O Herói de nome ${nome} está no nível de ${nivel[5]}`);
}

if (quantidadeXp >= 9001 && quantidadeXp <= 10000){
    prompt(`O Herói de nome ${nome} está no nível de ${nivel[6]}`);
}
 
else{
    prompt(`O Herói de nome ${nome} está no nível de ${nivel[7]}`);
}