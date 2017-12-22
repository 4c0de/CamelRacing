
(function(){
   //variables
   var jugar=document.querySelector('#Jugar');
   var info=document.querySelector('#info');
   var jugador1=document.querySelector('#jugador1');
   var jugador2=document.querySelector('#jugador2');
   var jugador3=document.querySelector('#jugador3');
   var tituloSalida=document.querySelector('#salida h1');
   var victoria1=document.querySelector('#valla1 span');
   var victoria2=document.querySelector('#valla2 span');
   var victoria3=document.querySelector('#valla3 span');
   var ganadas1=0;
   var ganadas2=0;
   var ganadas3=0;
   var ancho=window.innerWidth;
   var velocidad1=20;
   var velocidad2=20;
   var velocidad3=20;
   var contador=1;
   var tiempo;
   var fin=false;
   var infoTexto=false;
   var musica = document.querySelector("#sonido");

   //movimiento jugadores
   function moverJugador1(){
      musica.play();
      var anchoElemento1=jugador1.style.width.replace((/[px]/gi),'');
       //var =parseInt(getStyle(jugador1,"left"))-anchoElemento;
      var movIzq1=jugador1.style.left.replace((/[px]/gi),'');
     	if ((movIzq1)<ancho-200){
       		jugador1.style.backgroundImage = "url('img/corredor1.gif')";
     		 	jugador1.style.left=velocidad1+"px";
       	 	velocidad1+=20;
      }else{
            tituloSalida.innerHTML=("FIN DE JUEGO");
            fin=true;
            musica.pause();
            jugar.innerHTML="RESET";
            ganadas1++;
            victoria1.innerHTML="Victorias:"+ganadas1;
            jugar.disabled=false;
            //termina juego. elimina evento keyup.
            document.removeEventListener ("keyup", controTeclas);
      }  
       	
   }
   function moverJugador2(){
      musica.play();
   	  var anchoElemento2=jugador2.style.width.replace((/[px]/gi),'');
       //var =parseInt(getStyle(jugador1,"left"))-anchoElemento;
      var movIzq2=jugador2.style.left.replace((/[px]/gi),'');
      if ((movIzq2)<ancho-200){
          jugador2.style.backgroundImage = "url('img/corredor1.gif')";
          jugador2.style.left=velocidad2+"px";
          velocidad2+=20;
      }else{
            tituloSalida.innerHTML=("FIN DE JUEGO");
            fin=true;
            musica.pause();
            jugar.innerHTML="RESET";
            ganadas2++;
            victoria2.innerHTML="Victorias:"+ganadas2;
            jugar.disabled=false;
            //termina juego. elimina evento keyup.
            document.removeEventListener ("keyup", controTeclas);
      } 
   }

   function moverJugador3(){
      var anchoElemento3=jugador3.style.width.replace((/[px]/gi),'');
      musica.play();
      //var =parseInt(getStyle(jugador1,"left"))-anchoElemento;
      var movIzq3=jugador3.style.left.replace((/[px]/gi),'');
      if ((movIzq3)<ancho-200){
          jugador3.style.backgroundImage = "url('img/corredor1.gif')";
          jugador3.style.left=velocidad3+"px";
          velocidad3+=20;
          console.log(velocidad3);
      }else{
            tituloSalida.innerHTML=("FIN DE JUEGO");
            fin=true;
            musica.pause();
            jugar.innerHTML="RESET";
            jugar.disabled=false;
            ganadas3++;
            victoria3.innerHTML="Victorias:"+ganadas3;
            //termina juego. elimina evento keyup.
            document.removeEventListener ("keyup", controTeclas);
      } 
   }
   //fin movimiento jugadores

  //empezar partida. Habilita movimiento jugadores
  jugar.addEventListener("click", function(){
         fin=false;
         contador=1;
         jugador1.style.left=0+"px";
         jugador3.style.left=0+"px";
         jugador2.style.left=0+"px";
         velocidad3=20;
         velocidad2=20;
         velocidad1=20;
         //cartel 1,2,3 ya setinterval
         tiempo=setInterval(salida,1000);
        //desactivar boton jugar
        jugar.disabled=true;

  });
  info.addEventListener("click", function(){
         if (infoTexto==false){
           tituloSalida.innerHTML="Jugador-1 tecla Q<BR/>  Jugador-2 tecla M<BR/> Jugador-3 tecla CTRL";
           infoTexto=true;
         }else{
           tituloSalida.innerHTML=""; 
           infoTexto=false;
         }  

  });
  //bandera salida y habilitar movimiento jugadores
  function salida(){
      if (contador<=3){
         tituloSalida.innerHTML=contador++;
      }else{
         clearInterval(tiempo);
         tituloSalida.innerHTML="YA!!!!";
         //evento para mover jugadores
         document.addEventListener("keyup", controTeclas);
      }   
  }
  function controTeclas(){
        //ocultar cartel salida
        tituloSalida.innerHTML="";
        if (fin==false){
            var tecla=event.keyCode;
            //Tecla q jugador 1
            if (tecla==81){
               moverJugador1();
              //Tecla m moverJugador2
            }else if (tecla==77){
               moverJugador2();
               //Tecla flecha abajo jugador 3  
            }else if (tecla==17){
               moverJugador3();
               //Tecla intro numerica jugador 4   
            }
        }else{
          tituloSalida.innerHTML=("FIN DE JUEGO");
        }  
  }
})();