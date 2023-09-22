function hitungFibonacci() {
  const n = parseInt(document.getElementById("fibonacciInput").value);
  let a = 0,
    b = 1;
  let result = [];
  let pyramid = "";

  for (let i = 0; i < n; i++) {
    result.push(a);
    pyramid += " ".repeat(n - i - 1); // Spasi sebelum angka
    for (let j = 0; j <= i; j++) {
      pyramid += `${a} `;
      const temp = a + b;
      a = b;
      b = temp;
    }
    pyramid += "\n"; // Pindah ke baris berikutnya
  }

  document.getElementById("hasilFibonacci").textContent = result.join(", ");
  document.getElementById("segitigaPiramid").textContent = pyramid;
}
