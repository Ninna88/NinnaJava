var arreglopersonas= [
{
  nombre: "Ninna ",
  edad: 30,
  cedula: 1022346628,
  peliculafavorita: "NOW IS GOOD",
  generopelicula: "Drama"

},
{
  nombre: "Marlon",
  edad: 26,
  cedula:1121903846 ,
  peliculafavorita: "Rocky",
  generopelicula: "Accion"	

},
{
  nombre: "Rodolfo",
  edad: 3,
  cedula: 11232016,
  peliculafavorita:"Aristogatos ",
  generopelicula: "infantil" 
}
]
 console.log(arreglopersonas)
 for (var i = 0; i < arreglopersonas.length; i++) 
 {
   alert ("Hola " +
          arreglopersonas[i].nombre + " de " +
          arreglopersonas[i].edad + " anos ")
   if(arreglopersonas[i].edad >= 18)
   {
     switch (arreglopersonas[i].generopelicula)
     { 
       case 'Drama':
       alert ("Las peliculas recomendadas son " + " Cenicienta por siempre " + " Quedate a mi lado " + " si decido quedarme ")
       break;
       case 'Terror':
       alert("Peliculas recomendadas " + " The human centipede " + " Smiley " + " IT ")
       break;
       case 'Ficcion':
       alert("Peliculas recomendadas "+" Avengers " + " IronMan 3 " + " Venon ")
       break;
       case 'Comedia':
       alert("Peliculas recomendadas " + " Baywatch "+ " Tontos y mas tontos " + " La mascara ")
       break;
         case 'Accion':
        alert ("Peliculas recomendadas " + " SherlockHolmes " + " GuerraMundial Z " + " Rec ")
        break;
       default:
       alert("Sugerimos ingresar a la pagina para mas preferencias ");
     }
     } else if(arreglopersonas[i].edad < 18) 
     {
      switch (arreglopersonas[i].generopelicula)
      {
        case 'Accion infantil':
        alert ("Peliculas recomendadas " + " HarryPotter " + " Valiente " + " GrandesHeroes ")
        break;
        case 'infantil':
        alert("Peliculas recomendadas "+" Bichos " + " Ants " + " Mulan ")
        break;
      }
     }
   }

