function mostraNome(nome){
    const nomeInvertido = nome.split('').reverse().join('');
    document.getElementById('saida').innerHTML= `Seu nome invertido escreve: ${nomeInvertido}!!`

}