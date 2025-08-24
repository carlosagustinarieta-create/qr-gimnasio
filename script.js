// Generar cada QR con el link a la rutina
new QRCode(document.getElementById("qr-pecho"), {
    text: "https://carlosagustinarieta-create.github.io/qr-gimnasio/pecho.html",
    width: 150,
    height: 150
  });
  
  new QRCode(document.getElementById("qr-espalda"), {
    text: "rutinas/espalda.html",
    width: 150,
    height: 150
  });
  
  new QRCode(document.getElementById("qr-piernas"), {
    text: "rutinas/piernas.html",
    width: 150,
    height: 150
  });
  
  new QRCode(document.getElementById("qr-biceps"), {
    text: "rutinas/biceps.html",
    width: 150,
    height: 150
  });

  
