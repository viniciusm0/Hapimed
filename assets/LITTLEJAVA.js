window.onload=function() {
    const button = document.querySelector('#btn-processar');
    button.addEventListener("click", transicao)
}


function transicao() {
    document.querySelector('#area1').classList.add('fade1')
    document.querySelector('#area2').classList.add('fade2')
    document.querySelector('#area3').classList.add('fade3')

}

function processar () {
    const {peso, altura, idade} = pegarDados();
    const calculoIMC = peso / (altura ** 2);
    const precoAPlano1 = 100 + (idade * 10 * (calculoIMC / 10));
    const precoAPlano2 = (150 + (idade * 15)) * (calculoIMC / 10);
    const precoAPlano3 = (200 - (calculoIMC * 10) + (idade * 20)) * (calculoIMC / 10);
    const {precoBPlano1, precoBPlano2, precoBPlano3} = precosBPlanos(calculoIMC);
    const {melhorOP1, melhorOP2, melhorOP3} = compararPrecos(precoAPlano1, precoAPlano2, precoAPlano3, precoBPlano1, precoBPlano2, precoBPlano3);
    exibirResultado(calculoIMC.toFixed(2), 
    precoAPlano1.toFixed(0), 
    precoAPlano2.toFixed(0), 
    precoAPlano3.toFixed(0), 
    precoBPlano1.toFixed(0), 
    precoBPlano2.toFixed(0), 
    precoBPlano3.toFixed(0),
    melhorOP1.toFixed(0),
    melhorOP2.toFixed(0),
    melhorOP3.toFixed(0)); 
}

function exibirResultado(calculoIMC, precoAPlano1, precoAPlano2, precoAPlano3, precoBPlano1, precoBPlano2, precoBPlano3, melhorOP1, melhorOP2, melhorOP3) {
    document.getElementById('IMC').innerHTML = `IMC ${calculoIMC}`;
    document.getElementById('planoA1').innerHTML = `PLANO A - BASICO R$ ${precoAPlano1}`;
    document.getElementById('planoA2').innerHTML = `PLANO A - STANDARD R$ ${precoAPlano2}`;
    document.getElementById('planoA3').innerHTML = `PLANO A - PREMIUM R$ ${precoAPlano3}`;
    document.getElementById('planoB1').innerHTML = `PLANO B - BASICO R$ ${precoBPlano1}`;
    document.getElementById('planoB2').innerHTML = `PLANO B - STANDARD R$ ${precoBPlano2}`;
    document.getElementById('planoB3').innerHTML = `PLANO B - PREMIUM R$ ${precoBPlano3}`;
    document.getElementById('melhorOP1').innerHTML = `R$ ${melhorOP1}`;
    document.getElementById('melhorOP2').innerHTML = `R$ ${melhorOP2}`;
    document.getElementById('melhorOP3').innerHTML = `R$ ${melhorOP3}`;
}

function precosBPlanos (calculoIMC) {
    var comorbidade = 0;
    if (calculoIMC < 18.5) {
        comorbidade = 10;
    }
    else if (18.5 < calculoIMC, calculoIMC < 24.9) {
        comorbidade = 1;
    } 
    else if(25 < calculoIMC, calculoIMC < 29.9) {
        comorbidade = 6;
    }
    else if(30 < calculoIMC, calculoIMC < 34.9) {
        comorbidade = 10;
    }
    else if(35 < calculoIMC, calculoIMC < 39.9) {
        comorbidade = 20;
    }
    else if (calculoIMC > 40) {
        comorbidade = 30;
    }
    const precoBPlano1 = 100 + (comorbidade * 10 * (calculoIMC / 10));
    const precoBPlano2 = (150 + (comorbidade * 15)) * (calculoIMC / 10);
    const precoBPlano3 = (200 - (calculoIMC * 10) + (comorbidade * 20)) * (calculoIMC / 10);
    console.log(comorbidade);
    return {precoBPlano1, precoBPlano2, precoBPlano3};
}

function compararPrecos(precoAPlano1, precoAPlano2, precoAPlano3, precoBPlano1, precoBPlano2, precoBPlano3) {
    var melhorOP1 = 0
    var melhorOP2 = 0
    var melhorOP3 = 0
    if (precoAPlano1 > precoBPlano1) {
        melhorOP1 = precoBPlano1
    } else {
        melhorOP1 = precoAPlano1
    }

    if (precoAPlano2 > precoBPlano2) {
        melhorOP2 = precoBPlano2
    } else {
        melhorOP2 = precoAPlano2
    }

    if (precoAPlano3 > precoBPlano3) {
        melhorOP3 = precoBPlano3
    } else {
        melhorOP3 = precoAPlano3
    }

    return {melhorOP1, melhorOP2, melhorOP3}

}

function botaoBasico () {
    alert("Você adquiriu o plano Básico. Obrigado pela preferência")
}

function botaoStandard () {
    alert("Você adquiriu o plano Standard. Obrigado pela preferência")
}

function botaoPremium () {
    alert("Você adquiriu o plano Premium. Obrigado pela preferência")
}
  
function pegarDados() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const idade = document.getElementById('idade').value;
    return { peso, altura, idade };
}


