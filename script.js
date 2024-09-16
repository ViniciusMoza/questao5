document.getElementById('invertButton').addEventListener('click', inverterString);

function inverterString() {
    const inputString = document.getElementById('inputString').value;

    
    let stringInvertida = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        stringInvertida += inputString[i];
    }

   
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Palavra invertida: ${stringInvertida}</p>`;
}
