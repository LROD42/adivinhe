function sorteia() {
    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {
    let numeros = [];
    let numero = 1;
    
    while (numero <= quantidade) {
        let numeroAleatorio = sorteia();
        let repetiu = false;

        if(numeroAleatorio !== 0) {
            for(let posicao = 0; posicao < numeros.length; posicao++){ 
                if (numeros[posicao] == numeroAleatorio) {
                    repetiu = true;
                    break;
                }
            }
            if (repetiu == false) {
                numeros.push(numeroAleatorio);
                numero++;
            }
        }
    }
    return numeros;
}

let numeros = sorteiaNumeros(3);

const input = document.querySelector("input");

input.focus();



function verifica() {
    let achou = false;
    for(let posicao = 0; posicao < numeros.length; posicao++){
        if(input.value == numeros[posicao]){
            alert("Parabens, você acertou!");
            achou = true;
            break;
        }         
    }

    if(achou == false) {
        alert("Você Errou!");
    }

    input.value = "";
    
    input.focus();

}

const button = document.querySelector("button");
button.onclick = verifica;