function calcular() {

    //Entrada//

    let peso = document.getElementById("peso").value;

    let altura = document.getElementById("altura").value;

    //Processamento//

    let IMC = peso / (altura * altura)

    //Saída//

    document.getElementById("IMC").textContent = "Seu IMC é: " + IMC;

    const mensagemIMC = document.getElementById("mensagemIMC");

    if (IMC < 18.5)
        mensagemIMC.textContent = "Abaixo do Peso!";

    else if (IMC > 25.0)
        mensagemIMC.textContent = "Acima do Peso!";

    else (IMC > 18.5 && IMC < 25.0)
        mensagemIMC.textContent = "Peso Normal!";

}


