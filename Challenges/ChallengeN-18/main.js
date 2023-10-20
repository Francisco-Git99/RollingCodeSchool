let randomNumber = Math.floor(Math.random() * 5000) + 1;

if (randomNumber < 1000) {
    document.write(`${randomNumber} RPM, debe bajar las rpm`);
} else if (randomNumber >= 1000 && randomNumber <=3000) {
    document.write(`${randomNumber} RPM, debe mantenerse`);
}else{
    document.write(`${randomNumber} RPM, debe subir las rpm`);
}

