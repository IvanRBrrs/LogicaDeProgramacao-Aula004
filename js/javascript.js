
function calcular (){
    
    let valor1 = document.getElementById('valor_1').value;
    let valor2 = document.getElementById('valor_2').value; 
    let resultado = document.getElementById('resultado');
    if (valor1 > valor2){
        resultado.innerHTML = (`${valor1} é maior que ${valor2}`)
    } else if(valor2 > valor1){
        resultado.innerHTML = (`${valor2} é maior que ${valor1}`)
    } else if(valor2 == valor1){
        resultado.innerHTML = (`${valor2} é igual a ${valor1}`)
    }
}

function testar (){
    
    let numero1 = document.getElementById('numero_1').value;
    
    let resultado = document.getElementById('resultado:');
    if (numero1 > 0){
        resultado.innerHTML = (`${numero1} é positivo`)
    } else if(numero1 < 0 ){
        resultado.innerHTML = (`${numero1} é negativo`)
    } else if(numero1 == 0 ){
        resultado.innerHTML = (`${numero1} é zero`)
    }
}

function texto (){
    
    let letra1 = document.getElementById('letra').value;
    
    let resultado = document.getElementById('Resultado:');
    if (letra1 == 'M' ){
        resultado.innerHTML = (`${letra1} sexo é masculino`)
    } else if(letra1 == 'F' ){
        resultado.innerHTML = (`${letra1} sexo é feminino`)
    } else if(letra1 == 'A' || 'B' || 'C' || 'D' ||'E' || 'G' || 'H' || 'I' || 'J' || 'K' || 'L' || 'N' || 'O' || 'P' || 'Q' || 'R' || 'S' || 'T' || 'U' || 'V' || 'W' || 'X' || 'Y' || 'Z' )
    {   resultado.innerHTML = (`${letra1} sexo É inválido`)
    }

}


function nota (){
    
    let number = document.getElementById('nota').value;
    
    let resultado = document.getElementById('Igual');
    if (number >= 7 ){
        resultado.innerHTML = (`${number}.0 Passou.`)
    } else if(number < 7 ){
        resultado.innerHTML = (`${number}.0 Reprovado`)
    } 
}





















    // let select1 = parseInt(document.getElementById('numero1').value);
    // let select2 = parseInt(document.getElementById('numero2').value);

//     if(select1 === 0 && select2 === 0 || select1 == 1 && select2 == 1 || select1 == 2 && select2 == 2){
//         switch(select1 || select2){
//             case 0:
//                 resultado.innerHTML = (`A temperatura em Kelvin é ${temperaturaC}`)
//             break;
//             case 1:
//                 resultado.innerHTML = (`A temperatura em Fahrenheit é ${temperaturaC}`)
//             break;
//             case 2:
//                 resultado.innerHTML = (`A temperatura em Celsius é ${temperaturaC}`)
//             break;   
//         }    
//     } else if(select1 === 0 && select2 === 1){
//         let formulaKF = temperaturaC - 459.67;
//         resultado.innerHTML = (`${temperaturaC} Kelvin em Fahrenheit é ${formulaKF}Fahrenheit`)
//     } else if(select1 === 0 && select2 === 2){
//         let formulaKC = temperaturaC - 273.15;
//         resultado.innerHTML = (`${temperaturaC} Kelvin em Celsius é ${formulaKC}ºC`)
//     } else if(select1 === 2 && select2 === 0){
//         let formulaCK = parseInt(temperaturaC) + 273;
//         resultado.innerHTML = (`${temperaturaC}º Celsius em Kelvin é ${formulaCK}`)
//     } else if(select1 === 2 && select2 === 1){
//         let formulaCF = (parseInt(temperaturaC) * 1.8) + 32;
//         resultado.innerHTML = (`${temperaturaC}º Celsius em Kelvin é ${formulaCF}`)
//     } else if(select1 === 1 && select2 === 0){
//         let formulaFK = parseInt(temperaturaC) + 255.92;
//         resultado.innerHTML = (`${temperaturaC}º Celsius em Kelvin é ${formulaFK}`)
//     } else if(select1 === 1 && select2 === 2){
//         let formulaFC = parseInt(temperaturaC) - 17.22;
//         resultado.innerHTML = (`${temperaturaC} Fahrenheit em Celsius é ${formulaFC}ºC`)
//     }
// };














    














