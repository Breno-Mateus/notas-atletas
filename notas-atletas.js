let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let soma = 0;
        for (let j = 0; j < atletas[i].notas.length; j++) {
            if(j > 0 && j < atletas[i].notas.length - 1) {
                soma += atletas[i].notas[j];
            }
        }
        let media = soma / (atletas[i].notas.length - 2);
        let notas = atletas[i].notas.join(", "); 
        console.log(`Atleta: ${atletas[i].nome} \nNotas Obtidas: ${notas} \nMédia: ${media}\n`);
    }
}

calcularMedia(atletas);