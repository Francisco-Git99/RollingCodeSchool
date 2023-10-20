let oroGanado = 0;
let pocionesGanadas = 0;
let cofresVacios = 0;

for (let i = 1; i <= 10; i++) {
  let cofre = Math.floor(Math.random() * 10) + 1;
  switch (cofre) {
    case 1:
      oroGanado += 10;
      alert("cofre " + i + ": oro +10");
      break;
    case 2:
      pocionesGanadas += 2;
      alert("cofre " + i + ": pociones de vida +2");
      break;
    case 3:
      cofresVacios++;
      alert("cofre " + i + ": vacio");
      break;
    case 4:
      oroGanado += 10;
      alert("cofre " + i + ": oro +10");
      break;
    case 5:
      pocionesGanadas += 2;
      alert("cofre " + i + ": pociones de vida +2");
      break;
    case 6:
      cofresVacios++;
      alert("cofre " + i + ": vacio");
      break;
    case 7:
      oroGanado += 10;
      alert("cofre " + i + ": oro +10");
      break;
    case 8:
      pocionesGanadas += 2;
      alert("cofre " + i + ": pociones de vida +2");
      break;
    case 9:
      cofresVacios++;
      alert("cofre " + i + ": vacio");
      break;
    case 10:
      cofresVacios++;
      alert("cofre " + i + ": vacio");
      break;
  }
}

document.write('Oro ganado: '+ oroGanado);
document.write('<br>');
document.write('Pociones de vidas ganados: '+ pocionesGanadas);
document.write('<br>');
document.write('cofres vacios abiertos: ' + cofresVacios);