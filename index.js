function calcular(peso,altura){
var peso = document.getElementById('peso').value;
var altura = document.getElementById('altura'). value;
var imc = peso/ (altura*altura);

document.getElementById('resultado').innerHTML = imc.toFixed(2);

if(imc <17){
    document.getElementById('muitoAbaixo').classList.add('destaque');
} 

else if (imc <=18.49){
    document.getElementById('abaixo').classList.add('destaque');
} 

else if (imc <= 24.99){
    document.getElementById('normal').classList.add('destaque');
} 

else if (imc <= 29.99){
    document.getElementById('acima').classList.add('destaque');
} 

else if (imc <= 34.99){
    document.getElementById('obes1').classList.add('destaque');
} 

else if (imc <= 39.99){
    document.getElementById('obes2').classList.add('destaque');
} 

else if (imc > 40){
    document.getElementById('obes3').classList.add('destaque');
}

else{
    document.getElementById('resultado').innerHTML = 'Digite um valor válido';
}
}