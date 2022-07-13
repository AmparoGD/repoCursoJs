/*FUNCIONES*/
function algo(parametros, parametros1) {
    //console.log("pasa algo")
}
algo("hola", "chau")

//funcion declarativa

function sumarNumeros(numeroA, numeroB = 40, booleano = true) {
    var suma = numeroA + numeroB
    //console.log(suma)
}

sumarNumeros(25)

/** funcion retorna return, permite almacenar y usar esos datos  para otras cosas tmb*/

function sumarNumerosA(numeroA, numeroB) {
    return numeroA + numeroB
}
//console.log(sumarNumerosA(10, 15))

var almacenarRetorno = sumarNumerosA(10, 10)

//console.log(almacenarRetorno)

function mayor(edad) {
    if (edad < 18) {
        return true
    }
    else {
        return false //si aca no hay return no lo lamacena
    }
    //si aca pongo el return --> esto me va a devolver 
}
var juan = mayor(20) //aca almacenamos el retorno de la funcion mayor
var pedro = mayor(15)

function saludando(nombre) {
    alert('hola soy alert ' + nombre)
}
// console.log(document.doctype)
// console.log(document.body)
// console.log(document.head)

console.log(document.getElementById('mainTitulo'))

document.getElementById('mainTitulo').textContent = "hola soy pepe "

var edad = 20

if (edad > 18) {
    document.getElementById('header-title').textContent = "bla"
} else {
    document.getElementById('header-title').textContent = "no puede entrar"
}

//document.getElementById('input1').value = 15 aca seteas el valor

function asignarValor() {
    var valorInput = document.getElementById('input1').value
    document.getElementById('divSolo').textContent = valorInput
}

//Tarea dos input al ingresar dos numeros al hacer click haga la suma de los dos inputs






