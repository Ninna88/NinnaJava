var arreglocarros= [
{
  marca: "BMW",
  referencia: "M3",
  modelo: 2015,
  numchasis: 2345

},
{
  marca: "AUDI",
  referencia: "A3",
  modelo: 2019,
  numchasis: 4567	

},
{
  marca: "CHEVROLET",
  referencia: "CAMARO",
  modelo: 2017,
  numchasis: 56787
},
] 
 for (var i = 0; i < arreglocarros.length; i++) 
 {
 	if (arreglocarros[i].modelo < 2019)
 	alert(" su carro es el "+ arreglocarros[i].marca +" "+ arreglocarros[i].modelo+ " la tecnomecanica cuesta 100.000 " )
 else 
 	alert (" su carro es el " + arreglocarros[i].marca+" "+ arreglocarros[i].modelo+ " su tecnomecanica cuesta 300.000 ")
 
}

	// alert(arreglocarros[i].marca+ " " +arreglocarros[i].modelo)






// var persona ={
//    nombre: "Ninna ",
//    apellido: "Rossemund",
//    cedula: "1015402298",
//    edad: 22

// }
 
//  if(persona.edad >= 18)
//  {
//  	alert(persona.nombre+" "+" es mayor de edad y tiene "+persona.edad )
//  }
//  else
//  {
//  	alert(persona.nombre+" "+" es menor de edad ")
//  }


// alert("Hola "+nombre+" "+ apellido)
// console.log ("hola se subio el archivo correctamente")
