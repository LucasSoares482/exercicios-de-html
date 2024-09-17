function compararDoisNumeros() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = '';

    if (num1 > num2) {
        resultado = 'O número 1 é maior que o número 2.';
    } else if (num1 < num2) {
        resultado = 'O número 2 é maior que o número 1.';
    } else {
        resultado = 'Os dois números são iguais.';
    }

    document.getElementById('resultadoDois').innerText = resultado;
}

function compararTresNumeros() {
    var num1 = parseFloat(document.getElementById('num3').value);
    var num2 = parseFloat(document.getElementById('num4').value);
    var num3 = parseFloat(document.getElementById('num5').value);
    var resultado = '';

    if (num1 === num2 && num1 === num3) {
        resultado = 'Todos os números são iguais.';
    } else if (num1 >= num2 && num1 >= num3) {
        resultado = 'O número 1 é o maior.';
    } else if (num2 >= num1 && num2 >= num3) {
        resultado = 'O número 2 é o maior.';
    } else {
        resultado = 'O número 3 é o maior.';
    }

    document.getElementById('resultadoTres').innerText = resultado;
}

alert("oi mundo - Pagina Carregada");
function mensagem(){
    alert("Oi mundo - Usando Função");
}
function cor(cor){
    if(cor=='verde'){
        alert("VERDE");
    }else{
        alert("AZUL");
    }
}