//ejercicio1
function porcentaje(hombres, mujeres) {
  let total = hombres + mujeres;
  let porcentajeH = (hombres * 100) / total;
  let porcentajeM = 100 - porcentajeH;
  console.log(
    `El porcentaje de hombres son de: ${porcentajeH} y el de mujeres son de: ${porcentajeM}`
  );
}
porcentaje(30, 70);

//ejercicio2
function eventoAnual(a) {
  let AvDelMar = (a / 100) * 35;
  let AvAvancay = (a / 100) * 25;
  let Av28July = (a / 100) * 10;
  let AvAviacion = (a / 100) * 15;
  let sumaAv = AvDelMar + AvAvancay + Av28July + AvAviacion;
  let AvTacna = a - sumaAv;
  console.log(
    `El total del monto q le toca a la Av del Mar es de: ${AvDelMar}, el total del monto q le corresponde a la Av Avancay es de: ${AvAvancay}, El total del monto q le toca a la Av 28 de Julio es de: ${Av28July}, El total del monto q le toca a la Av Aviacion es de: ${AvAviacion}, El total del monto q le toca a la Av Tacna es de: ${AvTacna}`
  );
}
eventoAnual(1000);

//ejercicio3
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
eventoAnual(10, 20, 5);
