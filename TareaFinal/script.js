document.getElementById('botonCalcular').addEventListener("click", miFuncion)

function miFuncion() {
    let cantidad = document.getElementById('cantidadEntrada').value
    let cantidadValue = parseInt(cantidad)
    let valorSelect = document.getElementById('inputState').value;

    let valorEstudiante = 200 * 80 / 100
    let valorTrainee = 200 * 50 / 100
    let valorJunior = 200 * 15 / 100
    const VALOR_ENTRADA = 200
    let moneda = '$'

    let totalEstudiante = moneda + (VALOR_ENTRADA - valorEstudiante) * cantidadValue
    let totalTrainee = moneda + (VALOR_ENTRADA - valorTrainee) * cantidadValue
    let totalJunior = moneda + (VALOR_ENTRADA - valorJunior) * cantidadValue

    switch (valorSelect) {
        case "estudiante":
            document.getElementById('totalCompra').textContent = totalEstudiante
            console.log(`soy estudiante y mi total a pagar es: ${totalEstudiante}`)
            break
        case "trainee":
            document.getElementById('totalCompra').textContent = totalTrainee
            console.log(`soy trainee y mi total a pagar es: ${totalTrainee}`)

            break
        case "junior":
            document.getElementById('totalCompra').textContent = totalJunior
            console.log(`soy junior y mi total a pagar es: ${totalJunior}`)

            break
        default:
            break
    }

}

document.getElementById('sun').addEventListener('click', cambiarColor)
document.getElementById('moon').addEventListener('click', cambiarColorNoche)

function cambiarColor() {
    document.getElementById('body').style.backgroundColor = "white"
    document.getElementById('body').style.filter = "invert(0)"
}
function cambiarColorNoche() {
    document.getElementById('body').style.backgroundColor = "black"
    document.getElementById('body').style.filter = "invert(1)"
}


















