/*let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

let base = 5;
let heigth = 8;

let area = base * heigth;
console.log(area);

let perimeter = base + base + heigth + heigth;
console.log(perimeter);*/

/*const nota = 59;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}*/

let candidato = "Coxinha";

switch (candidato) {
  case 'Aprovado':
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case 'Lista':
    console.log("Você está na nossa lista de espera");
    break;
  case 'Reprovado':
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log('Não se aplica');
}

