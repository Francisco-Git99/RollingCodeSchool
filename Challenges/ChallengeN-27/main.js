let totalDaño = 0;

for (let i = 1; i <= 10; i++) {
  const golpes = Math.floor(Math.random() * 1001) + 1000;
  document.write(`Golpe ${i}: ${golpes}`);
  document.write('<br>');
  totalDaño += golpes;
}

document.write(`Daño total causado: ${totalDaño}`);
