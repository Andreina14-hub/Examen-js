//funcion que calcula el plus del salario
function calcularPlus() {
    let sueldo = document.getElementById("sueldo").value;
    let antiguedad = document.getElementById("antiguedad").value;
    //condiciones para los diferentes casos
    if (sueldo < 500 && antiguedad >= 10) {
        plus = sueldo * 0.2;
        alert("El plus es de " + plus + " euros.");
    } else if (sueldo < 500 && antiguedad < 10) {
        plus = sueldo * 0.05;
        alert("El plus es de " + plus + " euros.");
    } else {
        alert("No hay plus.");
    }
}