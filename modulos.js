const getButton = document.getElementById("btnGenerate");
const getButtonDescargarQr = document.querySelector("#btnDescargarQr");
const getCanva = document.getElementById("qrCodeCanvas");
// Generar el código QR con una URL fija (por ejemplo, google.com)
function generateQRCode(url) {
  const qr = new QRious({
    element: document.getElementById("qrCodeCanvas"),
    value: url,
    size: 200, // Tamaño del QR en píxeles
  });
}

// Descargar el código QR generado como imagen
function downloadQRCode() {
  const canvas = document.getElementById("qrCodeCanvas");
  const qrURL = canvas.toDataURL("image/png");

  // Crear un enlace para descargar el QR
  const link = document.createElement("a");
  link.href = qrURL;
  link.download = "qr_google.png"; // Nombre de archivo
  link.click();
}

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  //Obtener el valor del input
  let getInput = document.getElementById("valueInput").value;

  //Comprobar que el dato en el input sea una url valida.
  const isUrl = (url) => {
    const regex =
      /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    return regex.test(url);
  };

  if (getButton.innerText.toLowerCase() === "generar qr") {
    if (isUrl(getInput)) {
      //   Generar el QR al cargar la página
      generateQRCode(getInput);
      getButtonDescargarQr.style.display = "block";
      getCanva.style.display = "block";
      getButton.innerText = "Limpiar";
    } else {
      alert("Ingrese una url valida en el campo");
    }
  } else {
    getButtonDescargarQr.style.display = "none";
    getCanva.style.display = "none";
    getButton.innerText = "Generar QR";
    document.getElementById("valueInput").value = "";
  }
});
