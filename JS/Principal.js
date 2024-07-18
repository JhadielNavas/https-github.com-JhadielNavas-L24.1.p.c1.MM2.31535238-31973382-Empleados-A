import CL_Personal from "./CL_Personal.js";
import CL_Empresa from "./CL_Empresa.js";

let emplea1 = new CL_Personal("Juan", "obrero", 100);
let emplea2 = new CL_Personal("Ana", "obrero", 50);
let emplea3 = new CL_Personal("Lin", "administrativo", 200);
let emplea4 = new CL_Personal("Mary", "obrero", 50);
let emplea5 = new CL_Personal("Carlos", "administrativo", 150);

let empresa = new CL_Empresa();
empresa.procesarPersonal(emplea1);
empresa.procesarPersonal(emplea2);
empresa.procesarPersonal(emplea3);
empresa.procesarPersonal(emplea4);
empresa.procesarPersonal(emplea5);

let salida = document.getElementById("salida");

salida.innerHTML = "RESULTADO";
salida.innerHTML += "<br> Uno de los que gana menos: " +empresa.mostrarNombreMP();
salida.innerHTML += "<br> Monto promedio pagado a el personal administrativo: $" +empresa.calcularMontoPA();

