document.getElementById('calcular').addEventListener('click', function () {
    const crime = document.getElementById('crime').value;
    const penaBase = parseFloat(document.getElementById('pena').value);

    if (isNaN(penaBase) || penaBase <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira uma pena válida.";
        return;
    }

    let resultado;

    switch (crime) {
        case "1":
            resultado = penaBase + 1; // Exemplo: Furto
            break;
        case "2":
            resultado = penaBase + 3; // Exemplo: Roubo
            break;
        case "3":
            resultado = penaBase + 5; // Exemplo: Homicídio
            break;
        default:
            resultado = penaBase;
    }

    document.getElementById('resultado').innerText = `Pena final calculada: ${resultado} anos.`;
});
