//Conjetura de Collatz:
//La conjetura dice que siempre alcanzaremos el 1 (y por tanto el ciclo 4, 2, 1) para cualquier número con el que comencemos...
//Enunciado, si el numero es par, se divide entre 2; si es impar, se multiplica por 3 y se suma 1
function collatz(){
    let num = parseInt(prompt('Dame un numero'));
    let count = 0;
    let steps = []
    while (num !== 1){
        if(num % 2 == 0){ //es par
            num = num/2;
            count++;
            steps.push(num);
        } 
        else{ //es impar
            num = 3*num + 1;
            count++;
            steps.push(num);
        } 
    }
    console.log(`La conjetura tuvo ${count} pasos, y fueron estos: ${steps}`)
}

function cuotas(){
    let tarifa = parseFloat(prompt('Inserte el total a pagar'));
    if (tarifa < 2000){
        console.log('Los pagos menores a $2000 se abonan en un solo pago!');
        return; // Lo use como un break
    }
    let cuotas = parseInt(prompt('Indique la cantidad de cuotas 3 (5%), 6 (8%), 12 (11%)'));
    let interes;
    if (cuotas === 3){
        interes = 5;
    }else if(cuotas === 6){
        interes = 8;
    }else{
        interes = 11;
    }
    if(cuotas !== 3 && cuotas !== 6 && cuotas !== 12){
        let cuotasInvalido = true;
        while(cuotasInvalido){
            cuotas = parseInt(prompt('Por el momento solo disponemos de 3, 6 o 12 cuotas. Por favor, indique un valor valido'));
            if(cuotas == 3 || cuotas == 6 || cuotas == 12){
                cuotasInvalido = false;
            }
        }
    }
    let total = tarifa + tarifa*interes/100;
    let totalCuotas = total / cuotas;
    console.log(`Tarifa base: $${tarifa}. Cuotas: ${cuotas} con ${interes}% de interes`);
    console.log(`Su total es de $${total} en ${cuotas} de $${totalCuotas}`);
}

function aprobado(){
    let notas = [];
    let sumaNotas = 0

    for(let i = 0; i < 5; i++){
        let nota = parseInt(prompt("Decime tus notas")); //Pide una nota
        while(isNaN(nota) || nota>10){ //Si la nota es mayor a 10 o no es un número, no es válido y pide de nuevo
            nota = parseInt(prompt("No es una nota válida, decime tu nota")); //Hasta que no sea un número seguir pidiendo
        }
        notas.push(nota); //Agrega la nota al array
        sumaNotas += nota; // Suma todas las notas para el promedio
    }
    let asistencias = parseInt(prompt("Ahora decime tus asistencias"));

    let promedio = sumaNotas/notas.length; //El promedio es la suma de las notas (sumaNotas) dividido la cantidad de éstas (notas.length)

    if(promedio >= 7 && asistencias > 20){ //Si promedias 7 o más y tenes mas de 20 asistencias aprobas
        console.log("Estás aprobado!");
    }else{
        console.log("No aprobaste :(");
    }
}