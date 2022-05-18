const inputTexto = document.querySelector(".codificador");
const textoDecod = document.querySelector(".decodificador");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    textoDecod.value = textoEncriptado
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();


    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    textoDecod.value = textoDesencriptado
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo2 = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo2.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo2[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo2[i][0], matrizCodigo2[i][1])
        }
    }
    return stringDesencriptada
}

let btn = document.querySelector('#copy');

btn.addEventListener('click', function(e) {

    let textArea = document.querySelector('.decodificador');
    textArea.select();
    document.execCommand('copy');

});