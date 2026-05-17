function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-minimo').value)
    const max = Math.floor(document.querySelector('.input-maximo').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const resultEl = document.getElementById('result');
    if (resultEl) resultEl.textContent = `O número sorteado foi: ${result}`;
}

