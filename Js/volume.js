function tampilkanInput() {
  var jenisBangunRuang = document.querySelector(
    'input[name="jenisBangunRuang"]:checked'
  ).value;
  var inputFields = document.getElementById("inputFields");

  // Reset input fields
  inputFields.innerHTML = "";

  if (jenisBangunRuang === "balok") {
    var labelPanjang = document.createElement("label");
    labelPanjang.textContent = "Panjang:";
    var inputPanjang = document.createElement("input");
    inputPanjang.type = "number";
    inputPanjang.id = "panjang";
    inputFields.appendChild(labelPanjang);
    inputFields.appendChild(inputPanjang);

    var labelLebar = document.createElement("label");
    labelLebar.textContent = "Lebar:";
    var inputLebar = document.createElement("input");
    inputLebar.type = "number";
    inputLebar.id = "lebar";
    inputFields.appendChild(labelLebar);
    inputFields.appendChild(inputLebar);

    var labelTinggi = document.createElement("label");
    labelTinggi.textContent = "Tinggi:";
    var inputTinggi = document.createElement("input");
    inputTinggi.type = "number";
    inputTinggi.id = "tinggi";
    inputFields.appendChild(labelTinggi);
    inputFields.appendChild(inputTinggi);
  } else if (jenisBangunRuang === "kubus") {
    var labelSisi = document.createElement("label");
    labelSisi.textContent = "Sisi:";
    var inputSisi = document.createElement("input");
    inputSisi.type = "number";
    inputSisi.id = "sisi";
    inputFields.appendChild(labelSisi);
    inputFields.appendChild(inputSisi);
  } else if (jenisBangunRuang === "bola") {
    var labelJariJari = document.createElement("label");
    labelJariJari.textContent = "Jari-Jari:";
    var inputJariJari = document.createElement("input");
    inputJariJari.type = "number";
    inputJariJari.id = "jariJari";
    inputFields.appendChild(labelJariJari);
    inputFields.appendChild(inputJariJari);
  } else if (jenisBangunRuang === "prisma") {
    var labelLuasAlas = document.createElement("label");
    labelLuasAlas.textContent = "Luas Alas:";
    var inputLuasAlas = document.createElement("input");
    inputLuasAlas.type = "number";
    inputLuasAlas.id = "luasAlas";
    inputFields.appendChild(labelLuasAlas);
    inputFields.appendChild(inputLuasAlas);

    var labelTinggiPrisma = document.createElement("label");
    labelTinggiPrisma.textContent = "Tinggi Prisma:";
    var inputTinggiPrisma = document.createElement("input");
    inputTinggiPrisma.type = "number";
    inputTinggiPrisma.id = "tinggiPrisma";
    inputFields.appendChild(labelTinggiPrisma);
    inputFields.appendChild(inputTinggiPrisma);
  }
}

function hitungVolume() {
  var jenisBangunRuang = document.querySelector(
    'input[name="jenisBangunRuang"]:checked'
  ).value;
  var hasil = 0;

  if (jenisBangunRuang === "balok") {
    var panjang = parseFloat(document.getElementById("panjang").value);
    var lebar = parseFloat(document.getElementById("lebar").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    hasil = panjang * lebar * tinggi;
  } else if (jenisBangunRuang === "kubus") {
    var sisi = parseFloat(document.getElementById("sisi").value);
    hasil = Math.pow(sisi, 3);
  } else if (jenisBangunRuang === "bola") {
    var jariJari = parseFloat(document.getElementById("jariJari").value);
    hasil = (4 / 3) * Math.PI * Math.pow(jariJari, 3);
  } else if (jenisBangunRuang === "prisma") {
    var luasAlas = parseFloat(document.getElementById("luasAlas").value);
    var tinggiPrisma = parseFloat(
      document.getElementById("tinggiPrisma").value
    );
    hasil = luasAlas * tinggiPrisma;
  }

  document.getElementById("hasil").innerHTML =
    "Volume " + jenisBangunRuang + " adalah: " + hasil.toFixed(2);
}
