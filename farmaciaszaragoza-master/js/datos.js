
function cargardatos()
{

/*Pintamos el boton 24 horas*/
var boton24h='<div align="center">';
boton24h='<button class="btn btn-dark" onclick="verdatos(1)">';
boton24h+='24 horas';
boton24h+='</button>';
boton24h+="</div>";
document.getElementById("24horascontenedor").innerHTML=boton24h;

/*Pintamos el sector*/
var botonsector='<div align="center">';
botonsector+='<button class="btn btn-danger" onclick="verdatos(2)">';
botonsector+='Sector';
botonsector+='</button>';
botonsector+="</div>";
document.getElementById("sector").innerHTML=botonsector;


/*Pintamos boton todas*/
var botontodas='<div align="center">';
botontodas+='<button class="btn btn-success" onclick="verdatos(3)">';
botontodas+='Todas Farmacias';
botontodas+='</button>';
botontodas+="</div>";
document.getElementById("todas").innerHTML=botontodas;

}


function verdatos($valordato)
{
/*declaramos el objeto que vamos a rellenar 
con vectores
*/
var objetoresultados=new Object();
/*Cogemos las apis con las que queremos 
trastear dependiendo de los valores
*/
   if ($valordato==1)
  {var url_api='https://www.zaragoza.es/sede/servicio/farmacia.json';
  }

  if ($valordato==2)
  {var url_api='https://www.zaragoza.es/sede/servicio/farmacia.json?tipo=horarioAmpliado&rows=200';
  }


   if ($valordato==3)
  { var url_api='https://www.zaragoza.es/sede/servicio/farmacia.json?tipo=horario';
  }

 fetch(url_api)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) 
  { /*separamos los datos con sus vectores y objetos*/

   /*cogemos mysjon.resutl*/
   var resultadojson=myJson.result;
   /*Cogemos la longitud de los elementos*/
   var elementos=resultadojson.length;

   /*Declaramos los vectores que vamos a rellenar con pust*/
   var vectorid=[];var vectorcalle=[]; var vectorhorario=[];
   var vectortelefonos=[];var vectortitle=[]; var vectorguardia=[];

   if ($valordato==1)
   {
      for (var desde=0;desde<elementos;desde++)
       {
        /*rellenamos cada vector por push por separado*/
      vectorid.push(resultadojson[desde].id);
    	vectorcalle.push(resultadojson[desde].calle);
    	vectorhorario.push(resultadojson[desde].horario);
    	vectortelefonos.push(resultadojson[desde].telefonos);
    	vectortitle.push(resultadojson[desde].title);
    	vectorguardia.push(resultadojson[desde].guardia);

       }

      /*en el obejto en cada campo ponemos su array de valores*/
       objetoresultados.id=vectorid;
       objetoresultados.calle=vectorcalle;
       objetoresultados.horario=vectorhorario;
       objetoresultados.telefonos=vectortelefonos;
       objetoresultados.title=vectortitle;
       objetoresultados.guardia=vectorguardia;



   /*Contamos el total de elementos para recorrer*/
   var total_elementosobjeto=objetoresultados.calle.length;
   /*Pintamos la maquetación*/
   var maquetarobjeto='<div class="container-fluid" style="margin-top:5%">';
   maquetarobjeto+="<b>Total Farmacias:</b>";
   maquetarobjeto+=total_elementosobjeto;
   /*Columna izquierda*/
   maquetarobjeto+='<div class="row">';

   /*bucle for*/
   /*Mostramos el contenido del objeto*/
   
    for (var desdeobjeto=0;desdeobjeto<total_elementosobjeto;desdeobjeto++)
    {  var contador=desdeobjeto+1;
      maquetarobjeto+='<div class="col-md-4">';
       maquetarobjeto+=contador;
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.id[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.calle[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.horario[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.telefonos[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.title[desdeobjeto];
       maquetarobjeto+="<br/>";

       maquetarobjeto+="<br/>";
       maquetarobjeto+="<br/>";
       maquetarobjeto+='</div>';

    } 


   /*fin bucle for*/


  
    maquetarobjeto+='</div>';
   }//dato 1

   if ($valordato==2)
   {

   	   for (var desde=0;desde<elementos;desde++)
       {
        /*rellenamos los vectores*/
       	vectorid.push(resultadojson[desde].id);
    	vectorcalle.push(resultadojson[desde].calle);
    	vectorhorario.push(resultadojson[desde].horario);
    	vectortelefonos.push(resultadojson[desde].telefonos);
    	vectortitle.push(resultadojson[desde].title);

      /*rellenamos cada campo del objeto con su vector*/
       objetoresultados.id=vectorid;
       objetoresultados.calle=vectorcalle;
       objetoresultados.horario=vectorhorario;
       objetoresultados.telefonos=vectortelefonos;
       objetoresultados.title=vectortitle;

       }

  /*Contamos los elementos del vector*/
   var total_elementosobjeto=objetoresultados.calle.length;
   var maquetarobjeto='<div class="container-fluid" style="margin-top:5%">';
   maquetarobjeto+="<b>Total Farmacias:</b>";
   maquetarobjeto+=total_elementosobjeto;

   /*Columna izquierda*/
   maquetarobjeto+='<div class="row">';
   /*bucle for*/
   /*Pintamos contenido*/
   
    for (var desdeobjeto=0;desdeobjeto<total_elementosobjeto;desdeobjeto++)
    {  
       maquetarobjeto+='<div class="col-md-4">';
       var contador=desdeobjeto+1;
       maquetarobjeto+=contador;
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.id[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.calle[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.horario[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.telefonos[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.title[desdeobjeto];
       maquetarobjeto+="<br/>";

       maquetarobjeto+="<br/>";
       maquetarobjeto+="<br/>";

       maquetarobjeto+='</div>';
       /*fin bucle for*/

    } 

    maquetarobjeto+='</div>';
    maquetarobjeto+='</div>';
       
   }

   if ($valordato==3)
   {  for (var desde=0;desde<elementos;desde++)
       {/*rellenamos los vectores*/
       	vectorid.push(resultadojson[desde].id);
    	vectorcalle.push(resultadojson[desde].calle);
    	vectortelefonos.push(resultadojson[desde].telefonos);
    	vectortitle.push(resultadojson[desde].title);
       }
    /*rellenamos cada campo del objeto
    con su correspondiente vector*/
     objetoresultados.id=vectorid;
     objetoresultados.calle=vectorcalle;
     objetoresultados.telefonos=vectortelefonos;
     objetoresultados.title=vectortitle;

  /*Contamos el total de elementos*/
   var total_elementosobjeto=objetoresultados.calle.length;
   var maquetarobjeto='<div class="container-fluid" style="margin-top:5%">';
   maquetarobjeto+="<b>Total Farmacias:</b>";
   maquetarobjeto+=total_elementosobjeto;
    maquetarobjeto+='<div class="row">';
   /*bucle for*/
   /*Mostramos contenid*/

   
   for (var desdeobjeto=0;desdeobjeto<total_elementosobjeto;desdeobjeto++)
    {   maquetarobjeto+='<div class="col-md-4">';
       var contador=desdeobjeto+1;
       maquetarobjeto+=contador;
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.id[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.calle[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.telefonos[desdeobjeto];
       maquetarobjeto+="<br/>";
       maquetarobjeto+=objetoresultados.title[desdeobjeto];
       maquetarobjeto+="<br/>";

       maquetarobjeto+="<br/>";
       maquetarobjeto+="<br/>";
        maquetarobjeto+='</div>';

    } 


   maquetarobjeto+='</div>';
   /*fin bucle for*/


  
    maquetarobjeto+='</div>';

 
   }
     
 document.getElementById("api").innerHTML=maquetarobjeto;

  });



}