var   размерОсей=0.1, линейныйРазмер=1,
 N, проект;
window.addEventListener('load', запуск);
function запуск(){
  построитьМеню(); создатьПроект();

  document.getElementById("сохранитьФайл").addEventListener('change', записатьФайлСтруктуры);
  document.getElementById("описаниеКПок").addEventListener('click', сохранитьОписаниеКП);
//  document.getElementById("описаниеКПотмена").addEventListener('click', скрытьВсеМеню);
 // document.getElementById("линРазмерОтмена").addEventListener('click', скрытьВсеМеню);

  document.getElementById("положениеКамеры").addEventListener('input', function(){
    document.getElementsByTagName("Viewpoint")[0].setAttribute("position","0 0 "+this.value);
  });

  document.getElementById("размерОсей").addEventListener('input', function(){
    var оси = document.getElementsByName("размерОсей");
	размерОсей = parseFloat(this.value);
	document.getElementById("длинаОсей").value = размерОсей/**0.2*/;
	for(var i=0; i<=N; i++){
	  оси[i].setAttribute("scale", размерОсей+','+размерОсей+','+размерОсей);
	}
  });
  document.getElementById("длинаОсей").addEventListener('input', function(){
    var оси = document.getElementsByName("размерОсей");
	размерОсей = parseFloat(this.value)/*/0.2*/;
	document.getElementById("размерОсей").value = размерОсей;
	for(var i=0; i<=N; i++){
	  оси[i].setAttribute("scale", размерОсей+','+размерОсей+','+размерОсей);
	}
  });



  
  document.getElementById("открытьФайл").addEventListener('change', прочестьФайл); 

}




function занумероватьТела(){

  var трасформаторы = document.getElementsByTagName("transform");
  N = -1;
  var количество = трасформаторы.length;
  for(var i=0; i<количество; i++){
    if(/тело_/.test(трасформаторы[i].id)){
	  N++;
	  трасформаторы[i].id="тело_"+N;
	}
  }


}

function показатьМеню(меню){
  document.getElementById(меню).className="меню открытоеМеню";
}
function скрытьВсеМеню(){
  var меню = document.getElementsByClassName("меню");
  for(var i=0; i<меню.length; i++){
    меню[i].className="меню скрытоеМеню";
  }
}

function получитьРадианы(градусы){
  return (градусы*Math.PI/180).toFixed(3);
}

function получитьГрадусы(радианы){
  return (радианы*180/Math.PI).toFixed(2);
}

