const PALABRA_ELEGIDA = ['m', 'u', 'n', 'd', 'o']
console.log(`la palabra elegida es ${PALABRA_ELEGIDA}`)
//let ganaste = alert(`Exitos! la palabra elegida es ${PALABRA_ELEGIDA}`)

function validacion () {    
    let pregunta = prompt("Ingrese una letra").toLowerCase();     
   
    if(PALABRA_ELEGIDA.includes(pregunta)){
        alert("Correcto!")        
        console.log(`la letra "${pregunta}" SI esta en la palabra`)   
    }else{
        alert("intente nuevamente")
        console.log(`la letra "${pregunta}" NO esta en la palabra`)
    }
    validacion() //no se como detener la ejecucion cdo la palabra se complete. WHILE?  
       
}
//validacion()

const M = "m"
const U = "u"
const N = "n"
const D = "d"
const O = "o"

function validacion2() {
    let pregunta = prompt("Ingrese una letra").toLowerCase();  
    if(pregunta == M || pregunta == U || pregunta == N || pregunta == D || pregunta == O){
        alert("Correcto!")
    }else{
        alert("Intente nuevamente")
    }
    validacion2()
}
//validacion2()

/* switch solo se usa si cumple true 
no se puede usar >= < */
 var dia = 1

 switch(dia){
    case 1: //esto es === 
        console.log("es lunes")
        break
    case 2:
        console.log("es martes")
        break
    case 3:
        console.log("es miercoles")
        break
    default:
        console.log("nada")
        break
 }

// Tarea cajero, no me deje retirar si  mi saldo es 0
// caso 2 que no permita enviar mas de 100000 pesos ni enviar 0 pesos


var saldo = 5000

var opcion = prompt("ingrese una opcion a realizar: 1-retirar 2-ingresar 3-Saldo 4-enviar")

switch(opcion){
    case "1":
        if(saldo==0){
            alert("no tiene saldo para extraer dinero")
        }else{
            var retirar = parseFloat(prompt("¿canto desea retirar?"))
            if(retirar<=saldo){           
            alert("puede retirar dinero")
            saldo = saldo - retirar
            alert(`su saldo es de ${saldo}`)
            }else{
                alert(`su saldo es de ${saldo}, no puede retirar esa suma`)
            }
        }
        break
    case "2":
        // console.log("ingresar dinero")
        // alert("puede ingresar dinero")   
        var bolsillo = parseFloat(prompt("ingrese dinero"))
        saldo = saldo + bolsillo
        alert(`su saldo es de ${saldo}`)
        break
    case "3":
        console.log("Consultar Saldo")
        alert("Su saldo es:" + saldo)

        break
    case "4":
        var enviarDinero = prompt("Cuanto dinero quiere enviar?")
        const MAX_DINERO = 100000
        if(enviarDinero >= MAX_DINERO){
            alert("NO puede enviar esa suma de dinero")
        }else{
            console.log("enviar dinero")
            alert("puede enviar dinero a: ")
        }
        break
    default:
        console.log("no ha elegido ninguna opcion")
        break

}


//  alert("Su saldo actual es: " + saldo)
