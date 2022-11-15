//ejercicio1
function sumas(a, b) {
  console.log(a + b);
}
sumas(2, 4);

//ejercicio2
function numeroEntero(producto, porcentaje) {
  console.log((producto / 100) * porcentaje);
}
numeroEntero(400, 20);

//ejercicio3
function convertidor(a) {
  let cm = a * 100;
  let mm = cm * 10;
  console.log(`${a} metros es igual a ${cm}cm y ${mm}`);
}
convertidor(3);

//ejercicio4
function operacion(a, b) {
  c = (a * b) / 2;
  console.log("el area del triangulo es: " + c);
}
operacion(3, 4);

// //ejercicio5
function dolarConvert(a) {
  let soles = a * 3.38;
  console.log(soles);
}
dolarConvert(1);

//ejercicio6
function pulgadasConvert(a) {
  let mili = a * 25.4;
  console.log(mili);
}
pulgadasConvert(1);

//ejercicio7
function trescifras(a) {
  if ((a < 999) & (a > 100)) {
    let n = a.toString();
    let s =
      parseInt(n.charAt(0)) + parseInt(n.charAt(1)) + parseInt(n.charAt(2));

    let resultado = Math.pow(s, 2);
    console.log(`la suma de la cifra ${a} es de ${resultado} `);
  }
}
trescifras(222);
//----------------------otra forma mas efectiva-------------//
let numero = "224";
let reduce = Array.from(numero).reduce(
  (acc, next) => Number(acc) + Number(next)
);
let total = reduce * reduce;
console.log(total);

//
//ejercicio8
function dineroTotal(a) {
  let socio1 = (a / 100) * 30;
  let socio2 = (a / 100) * 20;
  let socio3 = (a / 100) * 50;
  console.log(
    `El monto q le toca al socio uno es: ${socio1}, el dinero q le toca al socio dos es: ${socio2} y el monto q le toca al socio tres es: ${socio3}`
  );
}
dineroTotal(3000);

//ejercicio9
function ingresoProduc(a) {
  let IGV = (a / 100) * 19;
  let total = a + IGV;
  console.log(
    `El precio del producto es: ${a} y el valor del IGV es: ${IGV}, la suma de los dos es de : ${total}`
  );
}
ingresoProduc(300);

//ejercicio10
function eventoAnual(a, b, c) {
  const EGeneral = 150;
  const EMayores = 50;
  const EMenores = 80;
  generalTotal = EGeneral * a;
  mayoresTotal = EMayores * b;
  menoresTotal = EMenores * c;
  totalVentas = generalTotal + mayoresTotal + menoresTotal;

  console.log(
    `Las entradas generales vendidas son de: ${generalTotal}soles, las entradas para mayores vendidas son de: ${mayoresTotal}soles, las entradas para menores vendidas son de: ${menoresTotal}soles y entre todos el TOTAl es de: ${totalVentas}soles`
  );
}
eventoAnual(10, 22, 6);
