function processar () {
    const {peso, altura, idade} = pegarDados();
    const isValid = verificador(peso, altura, idade);
    if (!isValid) {
        return;
    }
    const {calculoIMC} = calcIMC(peso, altura);
    const {precoAPlano1, precoAPlano2, precoAPlano3} = calculoPlanosA(idade, calculoIMC);
    const {precoBPlano1, precoBPlano2, precoBPlano3} = precosBPlanos(calculoIMC);
    const {melhorOP1, melhorOP2, melhorOP3} = compararPrecos(precoAPlano1, precoAPlano2, precoAPlano3, precoBPlano1, precoBPlano2, precoBPlano3);
    exibirResultado(
    melhorOP1.toFixed(0),
    melhorOP2.toFixed(0),
    melhorOP3.toFixed(0));
    transicao()
    scrollar();
    scrollON();
}

function scrollar() {
    var {coordenadas} = distaciaDoTopo();
    const posicaoY = (coordenadas.y);
    window.scroll({
        top: posicaoY - 126,
        behavior: "smooth"
    })
}

function distaciaDoTopo() {
    const PlanoBasicoBox = document.getElementById('area1');
    var coordenadas = PlanoBasicoBox.getBoundingClientRect();
    return {coordenadas}

}

function verificador(peso, altura, idade){
    if (peso == "", altura == "", idade == "" ) {
        Swal.fire({
            title: "Erro",
            text: "Por favor, preencha todos os campos.",
            icon: "error",
            confirmButtonColor: "#0d6efd"
          });
        return false;

    }
    return true;
}



function irTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function scrollON() {
    document.querySelector('#corpo-pagina').classList.remove('scrolloff');
}
function calcIMC(peso, altura) {
    const calculoIMC = peso / (altura ** 2);
    return {calculoIMC};
}

function calculoPlanosA(idade, calculoIMC) {
    const precoAPlano1 = 100 + (idade * 10 * (calculoIMC / 10));
    const precoAPlano2 = (150 + (idade * 15)) * (calculoIMC / 10);
    const precoAPlano3 = (200 - (calculoIMC * 10) + (idade * 20)) * (calculoIMC / 10);
    return {precoAPlano1, precoAPlano2, precoAPlano3}

}

function exibirResultado(melhorOP1, melhorOP2, melhorOP3) {
    document.getElementById('melhorOP1').innerHTML = `R$ ${melhorOP1}<span class="spanMes">/mês</span>`;
    document.getElementById('melhorOP2').innerHTML = `R$ ${melhorOP2}<span class="spanMes">/mês</span>`;
    document.getElementById('melhorOP3').innerHTML = `R$ ${melhorOP3}<span class="spanMes">/mês</span>`;
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
    Swal.fire({
        title: "Você adquiriu o plano Básico.",
        text: "Obrigado pela preferência!",
        confirmButtonColor: "#0d6efd"
    });
}

function botaoStandard () {
    Swal.fire({
        title: "Você adquiriu o plano Standard.",
        text: "Obrigado pela preferência!",
        confirmButtonColor: "#0d6efd"
    });
}

function botaoPremium () {
    Swal.fire({
        title: "Você adquiriu o plano Premium.",
        text: "Obrigado pela preferência!",
        confirmButtonColor: "#0d6efd"
    });
}

function transicao() {
    document.querySelector('#area1').classList.add('fade1')
    document.querySelector('#area2').classList.add('fade2')
    document.querySelector('#area3').classList.add('fade3')
    document.querySelector('#btn-calc-novamente').classList.add('fade4')

}

function pegarDados() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const idade = document.getElementById('idade').value;
    return { peso, altura, idade };
}


