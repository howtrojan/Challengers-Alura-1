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
      switch (mensagemCriptografada.substring(i, i + 5)) {
        case 'enter':
          mensagemOriginal += 'e';
          i += 5;
          break;
        case 'imes':
          mensagemOriginal += 'i';
          i += 4;
          break;
        case 'ai':
          mensagemOriginal += 'a';
          i += 2;
          break;
        case 'ober':
          mensagemOriginal += 'o';
          i += 4;
          break;
        case 'ufat':
          mensagemOriginal += 'u';
          i += 4;
          break;
        default:
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