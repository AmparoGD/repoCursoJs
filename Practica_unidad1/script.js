/*1. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un
programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido
del usuario.
2. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa
para calcular e informar el perímetro y el área del círculo. Se considerará para este
ejercicio que el valor de PI será 3.1416.
3. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e
informar la suma y el promedio.
4. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
ingrese el valor de la hora y la cantidad de horas trabajadas en el mes.
Realice un programa para calcular e informar el sueldo mensual del empleado.
5. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de
antigüedad en la empresa.
Realice un programa para calcular e informar el sueldo mensual del empleado,
teniendo en
cuenta que se le asigna un bono mensual igual al 15% del sueldo por año de
antigüedad.
6. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le
solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los
años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro
vendido.
Realice un programa para calcular e informar el sueldo mensual del empleado,
teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido,
un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual
al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, calcular e
informar el valor promedio de la hora del empleado*/

function Ejercicio1(){
let nombre_usuario = prompt("Ingrese nombre completo")
alert(`Bienvenido ${nombre_usuario}`)
}
//Ejercicio1()

function Ejercicio2(){
    let radio = Number(prompt("ingrese el valor del radio del circulo"))
    const PI = 3.1416
    let perimetro = (PI * radio)*2 
    alert(`el perimetro es ${perimetro}`)
}
//Ejercicio2()

function Ejercicio3(){
    let numero1 = Number(prompt("1-Ingrese un numero"))
    let numero2 = Number(prompt("2-Ingrese un numero"))
    let numero3 = Number(prompt("3-Ingrese un numero"))
    let numero4 = Number(prompt("4-Ingrese un numero"))
    let cantidadDeNumeros = 4
    const SUMA = numero1 + numero2 + numero3 + numero4
    const PROMEDIO = (numero1 + numero2 + numero3 + numero4) / cantidadDeNumeros
    alert(`la SUMA de los numeros es ${SUMA} y le PROMEDIO es ${PROMEDIO}`)
}
//Ejercicio3()

function Ejercicio4(){
    let valorHora = Number(prompt("Por favor ingrese cuanto cobra su hora de trabajo"))
    let cargaHoraria = parseInt(prompt("ingrese cuantas horas trabaja por dia"))
    const DIAS_SEMANA = 7 * 4
    let resultado = (valorHora * cargaHoraria) * DIAS_SEMANA
    alert(`Su sueldo es de ${resultado}`)
}
//Ejercicio4()

function Ejercicio5(){
    let valorHora = Number(prompt("Por favor ingrese cuanto cobra su hora de trabajo"))
    let cargaHoraria = parseInt(prompt("ingrese cuantas horas trabaja por dia"))
    let antiguedad = Number(prompt("Hace cuanto que trabaja en esta empresa?"))
    const DIAS_SEMANA = 7 * 4
    let resultado = (valorHora * cargaHoraria) * DIAS_SEMANA
    const BONO_MENSUAL = (resultado * 15  / 100) * antiguedad 
    let total = resultado + BONO_MENSUAL
    alert(`Su sueldo es de ${resultado},
     su bono mensual es de  ${BONO_MENSUAL}
     y su sueldo total es ${total}`)
}
//Ejercicio5()

function Ejercicio6(){
    let valorHora = Number(prompt("Por favor ingrese cuanto cobra su hora de trabajo"))
    let cargaHoraria = parseInt(prompt("ingrese cuantas horas trabaja por dia"))
    let antiguedad = Number(prompt("Hace cuanto que trabaja en esta empresa?"))
    let 
    const DIAS_SEMANA = 7 * 4
    let resultado = (valorHora * cargaHoraria) * DIAS_SEMANA
    const BONO_MENSUAL = (resultado * 15  / 100) * antiguedad 
    let total = resultado + BONO_MENSUAL
    alert(`Su sueldo es de ${resultado},
     su bono mensual es de  ${BONO_MENSUAL}
     y su sueldo total es ${total}`)
}
Ejercicio6()