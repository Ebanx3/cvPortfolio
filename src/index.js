const btnDW = document.getElementById("btnDW");
const certDW = document.getElementById("certDW");
const verCertDW = document.getElementById("verCertBtnDW");
const cerrarCertDBtnDW = document.getElementById("cerrarCertBtnDW");

const btnBE = document.getElementById("btnBE");
const certBE = document.getElementById("certBE");
const verCertBE = document.getElementById("verCertBtnBE");
const cerrarCertDBtnBE = document.getElementById("cerrarCertBtnBE");

const btnRJ = document.getElementById("btnRJ");
const certRJ = document.getElementById("certRJ");
const verCertRJ = document.getElementById("verCertBtnRJ");
const cerrarCertDBtnRJ = document.getElementById("cerrarCertBtnRJ");

const mostrarCert = (cert) => {
  cert.setAttribute("class", "certificado dBlock");
};

const cerrarCert = (cert) => {
  cert.setAttribute("class", "certificado");
};

btnDW.onclick = function (e) {
  e.preventDefault();
  mostrarCert(certDW);
};

btnBE.onclick = function (e) {
  e.preventDefault();
  mostrarCert(certBE);
};

btnRJ.onclick = function (e) {
  e.preventDefault();
  mostrarCert(certRJ);
};

cerrarCertDBtnDW.onclick = function (e) {
  e.preventDefault();
  cerrarCert(certDW);
};

cerrarCertDBtnBE.onclick = function (e) {
  e.preventDefault();
  cerrarCert(certBE);
};

cerrarCertDBtnRJ.onclick = function (e) {
  e.preventDefault();
  cerrarCert(certRJ);
};

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const msg = document.getElementById("msg").value;
  const body = { user, msg };
  fetch("https://cvportfolio.herokuapp.com/CVmessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((res) => console.log("Error", res));
  document.getElementById("user").value = "";
  document.getElementById("msg").value = "";
});
