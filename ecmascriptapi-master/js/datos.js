
function cargardatos()
{


fetch('https://randomuser.me/api/?results=500')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) 
  { /*separamos los datos con sus vectores y objetos*/

    var paises=[];

    /*cogemos los valores que nos saca la api*/
    var respuestaJson=myJson;
    var resultadosJson=respuestaJson["results"];

  
    /*Contamos la longitud */  
    var elementos=resultadosJson.length;

    /*Cogemos los paises*/
    for (var desde=0;desde<elementos;desde++)
    { var male="male";var female="female";
      var valorgenero=resultadosJson[desde].gender;
      paises.push(resultadosJson[desde].location.country);

    }//for

/*Evitamos los paises repetidos*/
let paises_filtrados=paises.filter((campovector,campovectorlimpio)=>paises.indexOf(campovector)=== campovectorlimpio);
/*Contamos el total de paises*/
var totalpaises=paises_filtrados.length;

/*Pintamos el select genero*/
 var genero='<select name="genero" id="genero" class="form-control" onclick=verdatos(1)>';
 genero+='<option selected="true" disabled="disabled">Seleccione el género</option>';
 genero+='<option value="hombres">Hombres</option>';
 genero+='<option value="mujeres">Mujeres</option>';
 genero+='</select>';
document.getElementById("generocontenedor").innerHTML=genero;

/*Pintamos el select paises filtrado*/
var zonapaises='<select name="paises" id="paises" class="form-control" onclick=verdatos(2)>';
 zonapaises+='<option selected="true" disabled="disabled">Seleccione País</option>';
for (var para=0;para<totalpaises;para++)
{
zonapaises+='<option value="';zonapaises+=paises_filtrados[para];zonapaises+='"';zonapaises+=">";
zonapaises+=paises_filtrados[para];zonapaises+='</option>';

}
zonapaises+="</select>";
document.getElementById("paises_filtrados").innerHTML=zonapaises;

/*Pintamos los botones de la edad*/
var botonesedad='<div align="center">';
botonesedad+='<button type="button" class="btn btn-success" onclick="verdatos(3)">20-29</button>';
botonesedad+='<button type="button" class="btn btn-light" onclick="verdatos(4)">30-39</button>';
botonesedad+='<button type="button" class="btn btn-dark" onclick="verdatos(5)">40+</button>';
botonesedad+="</div>";
document.getElementById("rangoedad").innerHTML=botonesedad;

/*Pintamos el boton todos*/
var botontodos='<button class="btn btn-dark" onclick="verdatos(6)">';
botontodos+='Todos';
botontodos+='</button>';
document.getElementById("botontodos").innerHTML=botontodos




  });

}


function verdatos($valordato)
{


 fetch('https://randomuser.me/api/?results=500')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) 
  { /*separamos los datos con sus vectores y objetos*/

     /*Mujeres*/
     var mujerespais=[];var mujeresedad=[];
     var mujeresimagen=[];var mujeresemail=[];
     var mujerescalle=[];var mujeresciudad=[];
     var mujerestelefono=[];var mujeresnombre=[];
     var datosgeneromujeres=new Object();

     /*Hombres*/
     var hombrespais=[];var hombresedad=[];
     var hombresimagen=[];var hombresemail=[];
     var hombrescalle=[];var hombresciudad=[];
     var hombrestelefono=[];var hombresnombre=[];
     var datosgenerohombres=new Object();

     /*Todos*/
     var todospais=[];var todosedad=[];
     var todosimagen=[];var todosemail=[];
     var todoscalle=[];var todosciudad=[];
     var todostelefono=[];var todosnombre=[];
     var datostodos=new Object();

     /*edad 20*/
     var edad20pais=[];var edad20edad=[];
     var edad20imagen=[];var edad20email=[];
     var edad20calle=[];var edad20ciudad=[];
     var edad20telefono=[];var edad20nombre=[];
     var edad20datos=new Object();


     /*edad 30*/
     var edad30pais=[];var edad30edad=[];
     var edad30imagen=[];var edad30email=[];
     var edad30calle=[];var edad30ciudad=[];
     var edad30telefono=[];var edad30nombre=[];
     var edad30datos=new Object();


     /*edad 40*/
     var edad40pais=[];var edad40edad=[];
     var edad40imagen=[];var edad40email=[];
     var edad40calle=[];var edad40ciudad=[];
     var edad40telefono=[];var edad40nombre=[];
     var edad40datos=new Object();


      /*valorespaises*/
     var valorespaises_pais=[];var valorespaises_edad=[];
     var valorespaises_imagen=[];var valorespaises_email=[];
     var valorespaises_calle=[];var valorespaises_ciudad=[];
     var valorespaises_telefono=[];var valorespaises_nombre=[];
     var valorespaises_datos=new Object();



    /*cogemos los valores que nos saca la api*/
     var respuestaJson=myJson;
    var resultadosJson=respuestaJson["results"];
 

    /*Contamos la longitud */  
    var elementos=resultadosJson.length;
    

    for (var desde=0;desde<elementos;desde++)
    { 
      /*comparar cadenas male y female*/
      var male="male";var female="female";
      var valorgenero=resultadosJson[desde].gender;
      var compararhombres=male.localeCompare(valorgenero);
      var compararmujeres=female.localeCompare(valorgenero);


      if (compararhombres==0)
      {   
       /*Llenamos los vectores para juntarlos luego en el
       objeto
       */
       hombrespais.push(resultadosJson[desde].location.country);
       hombresedad.push(resultadosJson[desde].dob.age);
       hombresimagen.push(resultadosJson[desde].picture.large);
       hombresemail.push(resultadosJson[desde].email);
       hombrescalle.push(resultadosJson[desde].location.street.name);
       hombresciudad.push(resultadosJson[desde].location.city);
       hombrestelefono.push(resultadosJson[desde].phone);



       /*juntamos nombre y apellido para el hombre*/
       var nombrehombre=resultadosJson[desde].name.first;
       var apellidohombre=resultadosJson[desde].name.last;
       var hombrenombrecompleto=nombrehombre;
       hombrenombrecompleto+=" ";
       hombrenombrecompleto+=apellidohombre;
       hombresnombre.push(hombrenombrecompleto);

      }

      if (compararmujeres==0)
      { 
       /*Llenamos los vectores para juntarlos luego en el
       objeto
       */
       mujerespais.push(resultadosJson[desde].location.country);
       mujeresedad.push(resultadosJson[desde].dob.age);
       mujeresimagen.push(resultadosJson[desde].picture.large);
       mujeresemail.push(resultadosJson[desde].email);
       mujerescalle.push(resultadosJson[desde].location.street.name);
       mujeresciudad.push(resultadosJson[desde].location.city);
       mujerestelefono.push(resultadosJson[desde].phone);

       /*juntamos nombre y apellido para la mujer*/
       var nombremujer=resultadosJson[desde].name.first;
       var apellidomujer=resultadosJson[desde].name.last;
       var mujernombrecompleto=nombremujer;
       mujernombrecompleto+=" ";
       mujernombrecompleto+=apellidomujer;
       mujeresnombre.push(mujernombrecompleto);
      } 
    
      if ($valordato==2)
      {
        /*Cogemos el valor del select*/
        var paispasado=document.getElementById("paises").value;
     

      var compararpaises=paispasado.localeCompare(resultadosJson[desde].location.country);

         if (compararpaises==0)
         { 
           console.log(resultadosJson[desde].location.country);

          valorespaises_pais.push(resultadosJson[desde].location.country);
          valorespaises_edad.push(resultadosJson[desde].dob.age);
          valorespaises_imagen.push(resultadosJson[desde].picture.large);
          valorespaises_email.push(resultadosJson[desde].email);
          valorespaises_calle.push(resultadosJson[desde].location.street.name);
          valorespaises_ciudad.push(resultadosJson[desde].location.city);
          valorespaises_telefono.push(resultadosJson[desde].phone);

           /*juntamos nombre y apellido para la mujer*/
           var nombrepais=resultadosJson[desde].name.first;
           var apellidopais=resultadosJson[desde].name.last;
           var nombrecompletopais=nombrepais;
           nombrecompletopais+=" ";
           nombrecompletopais+=apellidopais;

           valorespaises_nombre.push(nombrecompletopais);
         }
     
      }


      if ($valordato==3)
      {
        
       if (resultadosJson[desde].dob.age>=20 && resultadosJson[desde].dob.age<=29)
       {

       /*Llenamos los vectores para juntarlos luego en el
       objeto
       */

       edad20pais.push(resultadosJson[desde].location.country);
       edad20edad.push(resultadosJson[desde].dob.age);
       edad20imagen.push(resultadosJson[desde].picture.large);
       edad20email.push(resultadosJson[desde].email);
       edad20calle.push(resultadosJson[desde].location.street.name);
       edad20ciudad.push(resultadosJson[desde].location.city);
       edad20telefono.push(resultadosJson[desde].phone);
    

       /*juntamos nombre y apellido*/
       var nombre_edad20=resultadosJson[desde].name.first;
       var apellido_edad20=resultadosJson[desde].name.last;
       var nombrecompleto_edad20=nombre_edad20;
       nombrecompleto_edad20+=" ";
       nombrecompleto_edad20+=apellido_edad20;
       edad20nombre.push(nombrecompleto_edad20);
       }

      


      }

      if ($valordato==4)
      {
         if (resultadosJson[desde].dob.age>=30 && resultadosJson[desde].dob.age<=39)
        {
          /*Llenamos los vectores para juntarlos luego en el
          objeto
          */
      
         edad30pais.push(resultadosJson[desde].location.country);
         edad30edad.push(resultadosJson[desde].dob.age);
         edad30imagen.push(resultadosJson[desde].picture.large);
         edad30email.push(resultadosJson[desde].email);
         edad30calle.push(resultadosJson[desde].location.street.name);
         edad30ciudad.push(resultadosJson[desde].location.city);
         edad30telefono.push(resultadosJson[desde].phone);


         /*juntamos nombre y apellido*/
         var nombre_edad30=resultadosJson[desde].name.first;
         var apellido_edad30=resultadosJson[desde].name.last;
         var nombrecompleto_edad30=nombre_edad30;
         nombrecompleto_edad30+=" ";
         nombrecompleto_edad30+=apellido_edad30;
         edad30nombre.push(nombrecompleto_edad30);

        }
      }

      if ($valordato==5)
      {
        
        if (resultadosJson[desde].dob.age>=40)
        {

         /*Llenamos los vectores para juntarlos luego en el
        objeto
        */
      
         edad40pais.push(resultadosJson[desde].location.country);
         edad40edad.push(resultadosJson[desde].dob.age);
         edad40imagen.push(resultadosJson[desde].picture.large);
         edad40email.push(resultadosJson[desde].email);
         edad40calle.push(resultadosJson[desde].location.street.name);
         edad40ciudad.push(resultadosJson[desde].location.city);
         edad40telefono.push(resultadosJson[desde].phone);


          /*juntamos nombre y apellido*/
         var nombre_edad40=resultadosJson[desde].name.first;
         var apellido_edad40=resultadosJson[desde].name.last;
         var nombrecompleto_edad40=nombre_edad40;
         nombrecompleto_edad40+=" ";
         nombrecompleto_edad40+=apellido_edad40;
         edad40nombre.push(nombrecompleto_edad40);
       }

      }


       if ($valordato==6)
      { 
       /*Llenamos los vectores para juntarlos luego en el
       objeto
       */
       todospais.push(resultadosJson[desde].location.country);
       todosedad.push(resultadosJson[desde].dob.age);
       todosimagen.push(resultadosJson[desde].picture.large);
       todosemail.push(resultadosJson[desde].email);
       todoscalle.push(resultadosJson[desde].location.street.name);
       todosciudad.push(resultadosJson[desde].location.city);
       todostelefono.push(resultadosJson[desde].phone);


       /*juntamos nombre y apellido*/
       var nombre_todos=resultadosJson[desde].name.first;
       var apellido_todos=resultadosJson[desde].name.last;
       var nombrecompleto_todos=nombre_todos;
       nombrecompleto_todos+=" ";
       nombrecompleto_todos+=apellido_todos;
       todosnombre.push(nombrecompleto_todos);

   
     }
    
    }


   /*Rellenamos el objeto mujeres para recorrerlo*/
    datosgeneromujeres.pais=mujerespais;
    datosgeneromujeres.edad=mujeresedad;
    datosgeneromujeres.imagen=mujeresimagen;
    datosgeneromujeres.email=mujeresemail;
    datosgeneromujeres.calle=mujerescalle;
    datosgeneromujeres.ciudad=mujeresciudad;
    datosgeneromujeres.telefono=mujerestelefono;
    datosgeneromujeres.nombre=mujeresnombre

    /*Rellenamos el objeto hombres para recorrerlo*/
    datosgenerohombres.pais=hombrespais;
    datosgenerohombres.edad=hombresedad;
    datosgenerohombres.imagen=hombresimagen;
    datosgenerohombres.email=hombresemail;
    datosgenerohombres.calle=hombrescalle;
    datosgenerohombres.ciudad=hombresciudad;
    datosgenerohombres.telefono=hombrestelefono;
    datosgenerohombres.nombre=hombresnombre;


    /*Rellenamos el objeto datostodos para recorrerlo*/
    datostodos.pais=todospais;
    datostodos.edad=todosedad;
    datostodos.imagen=todosimagen;
    datostodos.email=todosemail;
    datostodos.calle=todoscalle;
    datostodos.ciudad=todosciudad;
    datostodos.telefono=todostelefono;
    datostodos.nombre=todosnombre;

    /*Rellenamos el objeto edad 20 para recorrerlo*/

    edad20datos.pais=edad20pais;
    edad20datos.edad=edad20edad;
    edad20datos.imagen=edad20imagen;
    edad20datos.email=edad20email;
    edad20datos.calle=edad20calle;
    edad20datos.ciudad=edad20ciudad;
    edad20datos.telefono=edad20telefono;
    edad20datos.nombre=edad20nombre


    /*Rellenamos el objeto edad 30 para recorrerlo*/

    edad30datos.pais=edad30pais;
    edad30datos.edad=edad30edad;
    edad30datos.imagen=edad30imagen;
    edad30datos.email=edad30email;
    edad30datos.calle=edad30calle;
    edad30datos.ciudad=edad30ciudad;
    edad30datos.telefono=edad30telefono;
    edad30datos.nombre=edad30nombre;

    /*Rellenamos el objeto edad 40 para recorrerlo*/
    edad40datos.pais=edad40pais;
    edad40datos.edad=edad40edad;
    edad40datos.imagen=edad40imagen;
    edad40datos.email=edad40email;
    edad40datos.calle=edad40calle;
    edad40datos.ciudad=edad40ciudad;
    edad40datos.telefono=edad40telefono;
    edad40datos.nombre=edad40nombre;

   /*Rellenamos el objeto valorespaises para recorrerlo*/
    valorespaises_datos.pais=valorespaises_pais;
    valorespaises_datos.edad=valorespaises_edad;
    valorespaises_datos.imagen=valorespaises_imagen;
    valorespaises_datos.email=valorespaises_email;
    valorespaises_datos.calle=valorespaises_calle;
    valorespaises_datos.ciudad=valorespaises_ciudad;
    valorespaises_datos.telefono=valorespaises_telefono;
    valorespaises_datos.nombre=valorespaises_nombre;


  if ($valordato==1)
  {
   /*detectar si es hombre o mujer*/
    var generopasado=document.getElementById("genero").value;   
    var hombres_cadena="hombres";var mujeres_cadena="mujeres";
    var comparacion_hombres=hombres_cadena.localeCompare(generopasado);
    var comparacion_mujeres=mujeres_cadena.localeCompare(generopasado);
    
    /*llamamos a la funcion y pasamo el objeto con los valores filtrados*/
     if (comparacion_mujeres==0)
     {imprimirvalores(datosgeneromujeres);}

     else
     { if (comparacion_hombres==0){
       imprimirvalores(datosgenerohombres);}
       else{document.getElementById("api").innerHTML="";}
     }

    
   }

   
 /*llamamos a la funcion y pasamo el objeto con los valores filtrados*/
  if ($valordato==2)
  {imprimirvalores(valorespaises_datos);}
  
 /*llamamos a la funcion y pasamo el objeto con los valores filtrados*/
  if ($valordato==3)
  { imprimirvalores(edad20datos);}

 /*llamamos a la funcion y pasamo el objeto con los valores filtrados*/
  if ($valordato==4)
  {imprimirvalores(edad30datos);}

 /*llamamos a la funcion y pasamo el objeto con los valores filtrados*/
  if ($valordato==5)
  {imprimirvalores(edad40datos);}
 /*llamamos a la funcion y pasamo el objeto con los valores filtrados*/
  if ($valordato==6)
  { imprimirvalores(datostodos);}
   

  });



}

function imprimirvalores($objeto)
{
var total_elementosobjeto=$objeto.pais;

var maquetarobjeto='<div class="container-fluid" style="margin-top:5%">';

  if (total_elementosobjeto.length!=0){maquetarobjeto+=" Total ";
   maquetarobjeto+=total_elementosobjeto.length;}
maquetarobjeto+='<div class="row" align="center">';
for (var desdeobjeto=0;desdeobjeto<total_elementosobjeto.length;desdeobjeto++)
{   

         maquetarobjeto+='<div class="col-md-4" style="padding-left:5%;margin-bottom:2%">';
         maquetarobjeto+='<div class="card" style="width: 18rem;">';


         maquetarobjeto+='<div class="cajetin1" align="center">';
         maquetarobjeto+="Person:"; maquetarobjeto+=desdeobjeto;
         maquetarobjeto+='</div>';
        

         maquetarobjeto+='<div class="card-body">';


            maquetarobjeto+='<p class="card-text">';
            maquetarobjeto+='<img src="';
            maquetarobjeto+=$objeto.imagen[desdeobjeto];
            maquetarobjeto+='">';
            maquetarobjeto+='</p>';

            maquetarobjeto+='<p class="card-text">';
            maquetarobjeto+="<b>Nombre:</b>";
            maquetarobjeto+=$objeto.nombre[desdeobjeto];
            maquetarobjeto+='</p>';

            maquetarobjeto+='<p class="card-text">';
            maquetarobjeto+="<b>Pais:</b>";
            maquetarobjeto+=$objeto.pais[desdeobjeto];
            maquetarobjeto+='</p>';


            maquetarobjeto+='<p class="card-text">';
            maquetarobjeto+="<b>Ciudad:</b>";
            maquetarobjeto+=$objeto.ciudad[desdeobjeto];
            maquetarobjeto+='</p>';


            maquetarobjeto+='<p class="card-text">';
            maquetarobjeto+="<b>Calle:</b>";
            maquetarobjeto+=$objeto.calle[desdeobjeto];
            maquetarobjeto+='</p>';

            maquetarobjeto+='<p class="card-text">';
            maquetarobjeto+="<b>Email:</b>";
            maquetarobjeto+=$objeto.email[desdeobjeto];
            maquetarobjeto+='</p>';


            maquetarobjeto+='<p class="card-text">';
            maquetarobjeto+="<b>Edad:</b>";
            maquetarobjeto+=$objeto.edad[desdeobjeto];
            maquetarobjeto+='</p>';



         maquetarobjeto+="</div>";
         maquetarobjeto+="</div>";
         maquetarobjeto+="</div>";
    
} 
maquetarobjeto+="</div>";
maquetarobjeto+="</div>";

 document.getElementById("api").innerHTML=maquetarobjeto;


}