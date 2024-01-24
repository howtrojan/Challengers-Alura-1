function criptografar() {
    let mensagemOriginal = document.getElementById("mensagemInput").value.toLowerCase();
    let mensagemCriptografada = "";

    for (let i = 0; i < mensagemOriginal.length; i++) {
        switch (mensagemOriginal[i]) {
            case 'e':
                mensagemCriptografada += 'enter';
                break;
            case 'i':
                mensagemCriptografada += 'imes';
                break;
            case 'a':
                mensagemCriptografada += 'ai';
                break;
            case 'o':
                mensagemCriptografada += 'ober';
                break;
            case 'u':
                mensagemCriptografada += 'ufat';
                break;
            default:
                mensagemCriptografada += mensagemOriginal[i];
        }
    }

    document.getElementById("resultado").value = mensagemCriptografada;
}

function descriptografar() {
    let mensagemCriptografada = document.getElementById("mensagemInput").value.toLowerCase();
    let mensagemOriginal = "";

    for (let i = 0; i < mensagemCriptografada.length;) {
        if (mensagemCriptografada.substring(i, i + 5) === 'enter') {
            mensagemOriginal += 'e';
            i += 5;
        } else if (mensagemCriptografada.substring(i, i + 4) === 'imes') {
            mensagemOriginal += 'i';
            i += 4;
        } else if (mensagemCriptografada.substring(i, i + 2) === 'ai') {
            mensagemOriginal += 'a';
            i += 2;
        } else if (mensagemCriptografada.substring(i, i + 4) === 'ober') {
            mensagemOriginal += 'o';
            i += 4;
        } else if (mensagemCriptografada.substring(i, i + 4) === 'ufat') {
            mensagemOriginal += 'u';
            i += 4;
        } else {
            mensagemOriginal += mensagemCriptografada[i];
            i++;
        }
    }

    document.getElementById("resultado").value = mensagemOriginal;
}

function copiar() {
    let resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[áàãâäéèëêíìïîóòöõôúùüû´´´´´```````^^^^^^^^~~~~~~~~]/gi, '');
}

function validarEntrada() {
    let campoInput = document.getElementById("mensagemInput");
    campoInput.value = removerAcentos(campoInput.value.toLowerCase());
}

