﻿ 
function добавитьСтроку(event){
  var текущаяСтрока = определитьСтроку();
  if(N==0){
    document.getElementsByTagName("Group")[0].parentNode.removeChild(document.getElementsByTagName("Group")[0]);
  }
  var номерБазыКопии = document.getElementsByName("номерБазыКопии")[текущаяСтрока-1].value;
  if(event.type=="click"){
    создатьСтроку();
  } else if(event.keyCode==13 && номерБазыКопии==""){
    изменитьТело();
  } else if(event.keyCode==13 && номерБазыКопии!=""){
    копироватьПодсистемуТабл();
  }
  
  /*
  if(текущаяСтрока-1!=N){
	  
	if(document.getElementsByName("номерБазыКопии")[текущаяСтрока-1].value==""){
	  изменитьТело();
	  return;
	} else {
	  копироватьПодсистемуТабл();
	  return;
	}
  }*/
  function создатьСтроку(){
    var родитель = document.getElementById('тело_'+document.getElementsByName("базаТабл")[N].value);
    var трансформаторСтруктуры = document.createElement('Transform');
    var ось = [];
    var перемещение = [];
    ось[0] = document.getElementsByName("осьXтабл")[N].value;
    ось[1] = document.getElementsByName("осьYтабл")[N].value;
    ось[2] = document.getElementsByName("осьZтабл")[N].value;
    перемещение[0] = parseFloat(document.getElementsByName("переносXтабл")[N].value); 
    перемещение[1] = parseFloat(document.getElementsByName("переносYтабл")[N].value); 
    перемещение[2] = parseFloat(document.getElementsByName("переносZтабл")[N].value);   
    if(document.getElementsByName("типКПтабл")[N].value=='0'){
      перемещение[0] += document.getElementsByName("перемещениеТабл")[N].value*ось[0]; 
      перемещение[1] += document.getElementsByName("перемещениеТабл")[N].value*ось[1]; 
      перемещение[2] += document.getElementsByName("перемещениеТабл")[N].value*ось[2];  
    }/* else {
    перемещение[0] = parseFloat(document.getElementsByName("переносXтабл")[N].value); 
    перемещение[1] = parseFloat(document.getElementsByName("переносYтабл")[N].value); 
    перемещение[2] = parseFloat(document.getElementsByName("переносZтабл")[N].value);   
  }*/

    трансформаторСтруктуры.setAttribute('translation', перемещение.join(','));
    трансформаторСтруктуры.setAttribute('rotation', ось.join(" ")+' 0');
    трансформаторСтруктуры.id = "тело_"+(++N);
    трансформаторСтруктуры.setAttribute("DEF","тело_"+N);
    трансформаторСтруктуры.setAttribute("видкп", document.getElementsByName("типКПтабл")[N-1].value);
    трансформаторСтруктуры.setAttribute("максимальное_q", document.getElementsByName("перемещениеТабл")[N-1].value);
    родитель.appendChild(трансформаторСтруктуры);
    var размерОсейССК = document.createElement('Transform');
    размерОсейССК.setAttribute('scale',размерОсей+' '+размерОсей+' '+размерОсей);
    размерОсейССК.setAttribute('name','размерОсей');
    var подключение = document.createElement("Inline");
    подключение.setAttribute("url","../scripts/выборXYZ.x3d");
    размерОсейССК.appendChild(подключение); 
    трансформаторСтруктуры.appendChild(размерОсейССК); 
  
    var таблица = document.getElementById("ТПМС").getElementsByTagName('tbody')[0];
    var новаяСтрока = таблица.getElementsByTagName("tr")[N].cloneNode(true);
    таблица.appendChild(новаяСтрока); 
    таблица.getElementsByTagName("tr")[текущаяСтрока].className = "скрытаяСтрока"; 
    document.getElementsByTagName("Inline")[текущаяСтрока].setAttribute("url","../scripts/XYZ.x3d"); 
    таблица.getElementsByTagName("tr")[N].className = "открытаяСтрока"; 
    новаяСтрока.className = "последняяСтрока";
    новаяСтрока.id = "строка_"+(N+1);
    новаяСтрока.children[0].firstChild.textContent = N+1;
  }
}

function строкаВверх(){
  var строки = document.getElementById("ТПМС").getElementsByTagName("tr");
  var текущаяСтрока = определитьСтроку();
  if(текущаяСтрока==1){
    return;
  }
  строки[текущаяСтрока].className = "скрытаяСтрока";
  строки[текущаяСтрока-1].className = "открытаяСтрока";
  document.getElementsByTagName("Inline")[текущаяСтрока-1].setAttribute('url','../scripts/выборXYZ.x3d'); 
  document.getElementsByTagName("Inline")[текущаяСтрока].setAttribute('url','../scripts/XYZ.x3d');// переделать
}

function строкаВниз(){
  var строки = document.getElementById("ТПМС").getElementsByTagName("tr");
  var текущаяСтрока = определитьСтроку();
 /* if(текущаяСтрока==N-1){
    строки[текущаяСтрока].className = "скрытаяСтрока";
	строки[текущаяСтрока+1].className = "последняяСтрока";
	document.getElementsByTagName("Inline")[текущаяСтрока].setAttribute('url','../scripts/XYZ.x3d');
	
  } else*/ if(текущаяСтрока>=N){
    return;
  } else {
    строки[текущаяСтрока].className = "скрытаяСтрока";
    строки[текущаяСтрока+1].className = "открытаяСтрока";
	document.getElementsByTagName("Inline")[текущаяСтрока].setAttribute('url','../scripts/XYZ.x3d');
	document.getElementsByTagName("Inline")[текущаяСтрока+1].setAttribute('url','../scripts/выборXYZ.x3d');
  }
}

function определитьСтроку(){
   var строки = document.getElementById("ТПМС").getElementsByTagName('tr');
  for(var i=1; i<=N+1; i++){
    if(строки[i].className=="открытаяСтрока" || строки[i].className=="последняяСтрока"){
	  return i;
	}
  }
}

function изменитьТело(){
  var номерСтроки = определитьСтроку();
  var тело = document.getElementById("тело_"+номерСтроки); 
  var ось = [];
  var перемещение = [];
  ось[0] = document.getElementsByName("осьXтабл")[номерСтроки-1].value;
  ось[1] = document.getElementsByName("осьYтабл")[номерСтроки-1].value;
  ось[2] = document.getElementsByName("осьZтабл")[номерСтроки-1].value;
    перемещение[0] = parseFloat(document.getElementsByName("переносXтабл")[номерСтроки-1].value); 
    перемещение[1] = parseFloat(document.getElementsByName("переносYтабл")[номерСтроки-1].value); 
    перемещение[2] = parseFloat(document.getElementsByName("переносZтабл")[номерСтроки-1].value);   
  if(document.getElementsByName("типКПтабл")[номерСтроки-1].value=='0'){
    перемещение[0] += document.getElementsByName("перемещениеТабл")[номерСтроки-1].value*ось[0]; 
    перемещение[1] += document.getElementsByName("перемещениеТабл")[номерСтроки-1].value*ось[1]; 
    перемещение[2] += document.getElementsByName("перемещениеТабл")[номерСтроки-1].value*ось[2];  
  }

  тело.setAttribute('translation', перемещение.join(','));
  тело.setAttribute('rotation', ось.join(" ")+' 0');
}


function копироватьПодсистемуТабл(){
  
  var текущаяСтрока = определитьСтроку();
  var база = document.getElementsByName("номерБазыКопии")[текущаяСтрока-1].value;
  document.getElementsByTagName("Inline")[текущаяСтрока].setAttribute('url','../scripts/XYZ.x3d');
  var копия = document.getElementById("тело_"+текущаяСтрока).cloneNode(true);
  
  
  var ось = [];
  var перемещение = [];
  ось[0] = document.getElementsByName("осьXтабл")[текущаяСтрока-1].value;
  ось[1] = document.getElementsByName("осьYтабл")[текущаяСтрока-1].value;
  ось[2] = document.getElementsByName("осьZтабл")[текущаяСтрока-1].value;
  перемещение[0] = parseFloat(document.getElementsByName("переносXтабл")[текущаяСтрока-1].value); 
  перемещение[1] = parseFloat(document.getElementsByName("переносYтабл")[текущаяСтрока-1].value); 
  перемещение[2] = parseFloat(document.getElementsByName("переносZтабл")[текущаяСтрока-1].value);   
  if(document.getElementsByName("типКПтабл")[текущаяСтрока-1].value=='0'){
    перемещение[0] += document.getElementsByName("перемещениеТабл")[текущаяСтрока-1].value*ось[0]; 
    перемещение[1] += document.getElementsByName("перемещениеТабл")[текущаяСтрока-1].value*ось[1]; 
    перемещение[2] += document.getElementsByName("перемещениеТабл")[текущаяСтрока-1].value*ось[2];  
  }
  
  копия.setAttribute('translation',перемещение.join(','));
  document.getElementById("тело_"+база).appendChild(копия);
  
  перестроитьТаблицу();
}

function перестроитьТаблицу(){
  var трасформаторы = document.getElementsByTagName("Transform");
  N = -1;
  var количество = трасформаторы.length;
  for(var i=0; i<количество; i++){
    if(/тело_/.test(трасформаторы[i].id)){
	  N++;
	  трасформаторы[i].id="тело_"+N;
	}
  }
 
  
  var таблица = document.getElementById("ТПМС").getElementsByTagName('tbody')[0];
  таблица.innerHTML="";
  for(var i=0; i<=N+1; i++){
   if(i!=N+1 /*|| N==0*/){
	var строка = document.createElement("tr");
	таблица.appendChild(строка);
	строка.id = "строка"+i;
    
	if(i!=0){
	  строка.className = "скрытаяСтрока";
	}
	if(i==N){
	  строка.className = "открытаяСтрока";
	}
	var тело = document.getElementById("тело_"+i);
	for(var j=0; j<=5; j++){
	  var ячейка = document.createElement("td");
	  строка.appendChild(ячейка);
	  if (i==0){
	    switch(j){
		  case 0: ячейка.innerHTML = "Номер"; break;  
		  case 1: ячейка.innerHTML = "СНБТ"; break;  
		  case 2: ячейка.innerHTML = "КП"; break;  
		  case 3: ячейка.innerHTML = "tx, ty, tz"; break;  
		  case 4: ячейка.innerHTML = "qx, qy, qz"; break;  
		  case 5: ячейка.innerHTML = "q"; break;  
	    }  
	  } else {
		var полеВвода1 = document.createElement('input');
		
		var ось = [];
        var перемещение = [];
        ось[0] = тело.getAttribute("rotation").split(" ")[0];
        ось[1] = тело.getAttribute("rotation").split(" ")[1];
        ось[2] = тело.getAttribute("rotation").split(" ")[2];
        перемещение[0] = parseFloat(тело.getAttribute("translation").split(",")[0]); 
        перемещение[1] = parseFloat(тело.getAttribute("translation").split(",")[1]); 
        перемещение[2] = parseFloat(тело.getAttribute("translation").split(",")[2]);   
        if(тело.getAttribute("видкп")=='0'){
          перемещение[0] -= тело.getAttribute("максимальное_q")*ось[0]; 
          перемещение[1] -= тело.getAttribute("максимальное_q")*ось[1]; 
          перемещение[2] -= тело.getAttribute("максимальное_q")*ось[2];  
        }
		
		
		
		switch(j){
		  case 0: 
		    ячейка.innerHTML = i; 
			ячейка.appendChild(полеВвода1);
			полеВвода1.name="номерБазыКопии";
			полеВвода1.value="";
			полеВвода1.type="number";
			полеВвода1.min="0";
		  break;  
		  case 1: 
		    ячейка.appendChild(полеВвода1);
			полеВвода1.name="базаТабл"; 
			полеВвода1.value=тело.parentNode.id.replace("тело_","");
			полеВвода1.type="number";
			полеВвода1.min="0";
		  break;  
		  case 2: 
		    ячейка.appendChild(полеВвода1);
			полеВвода1.name="типКПтабл"; 
			полеВвода1.value=тело.getAttribute("видкп");
			полеВвода1.type="number";
			полеВвода1.min="0"; 
		  break;  
		  case 3: 
		    ячейка.appendChild(полеВвода1);
			полеВвода1.name="переносXтабл"; 
			полеВвода1.value=перемещение[0].toFixed(3);
			полеВвода1.type="number";
			полеВвода1.step="0.1";
            var полеВвода2 = document.createElement("input");	
            ячейка.appendChild(полеВвода2);	
            полеВвода2.name="переносYтабл"; 
			полеВвода2.value=перемещение[1].toFixed(3);
			полеВвода2.type="number";
			полеВвода2.step="0.1";
            var полеВвода3 = document.createElement("input");	
            ячейка.appendChild(полеВвода3);	
            полеВвода3.name="переносZтабл"; 
			полеВвода3.value=перемещение[2].toFixed(3);
			полеВвода3.type="number";
			полеВвода3.step="0.1";			
			
		  break;  
		  case 4: 
		    ячейка.appendChild(полеВвода1);
			полеВвода1.name="осьXтабл";
			полеВвода1.value=тело.getAttribute("rotation").split(" ")[0];
			полеВвода1.type="number";
            var полеВвода2 = document.createElement("input");	
            ячейка.appendChild(полеВвода2);	
            полеВвода2.name="осьYтабл"; 
			полеВвода2.value=тело.getAttribute("rotation").split(" ")[1];
			полеВвода2.type="number";
            var полеВвода3 = document.createElement("input");	
            ячейка.appendChild(полеВвода3);	
            полеВвода3.name="осьZтабл"; 
			полеВвода3.value=тело.getAttribute("rotation").split(" ")[2];
			полеВвода3.type="number";
		  
		  break;  
		  case 5: 
		    ячейка.appendChild(полеВвода1);
			полеВвода1.name="перемещениеТабл"; 
			полеВвода1.value=тело.getAttribute("максимальное_q");
			полеВвода1.type="number";
			полеВвода1.step="0.1";
		  break;  
	    }
	  }
		
	}
	
  }else{
    var последняяСтрока = document.getElementById("строка"+N).cloneNode(true);
    таблица.appendChild(последняяСтрока);
    последняяСтрока.className = "последняяСтрока";
    последняяСтрока.id = "строка"+i;
	последняяСтрока.children[0].firstChild.textContent = N+1;
	
  }
  document.getElementById("ТПМС").addEventListener('keydown',добавитьСтроку);
  }
}


function удалитьСтрокуТабл(){
  var текущаяСтрока = определитьСтроку();
  document.getElementById("тело_"+текущаяСтрока).parentNode.removeChild(document.getElementById("тело_"+текущаяСтрока));
  перестроитьТаблицу();
	
}

  
function вставитьВнешнююМодель(){
  var файл = document.getElementById("внешняяМодель");
  var ФС = require('fs');
  ФС.readFile(файл.value, 'utf8', обработатьМодель);
  
  function обработатьМодель(ошибка, данные) {
  if(ошибка) {
    console.log(ошибка);
  } else {
    файл.value="";
    var модельВставка = document.getElementById("модельВставка");
    if (модельВставка!=undefined) { 
      модельВставка.parentNode.removeChild(модельВставка);
    }

    var div = document.createElement('div');
    document.getElementById("модельДляКопирования").appendChild(div);
	div.innerHTML = данные;
    div.id="модельВставка"; 
    var кореньКопии = document.getElementsByTagName("x3d")[1].getElementsByTagName("Transform")[0];
	var телаКопии = кореньКопии.children;
	var копия;
	if(кореньКопии.id=="тело_0"){
	  
	  var общийТрансформатор = document.createElement("Transform");
	  общийТрансформатор.setAttribute("translation","-1,0.3,0");
	  общийТрансформатор.id="копииТел";
	  document.getElementById("тело_0").appendChild(общийТрансформатор);
	  for(var i=0; i<телаКопии.length; i++){
		if(телаКопии[i].tagName.toLowerCase()=="group"){continue;}
		
	    копия = телаКопии[i].cloneNode(true);
	    общийТрансформатор.appendChild(копия);
	  }
	  
	} else {
	  var ГО = document.getElementsByTagName("x3d")[1].getElementsByTagName("Transform");
	  var группа = document.createElement("Group");
	  var трансформаторГруппы = document.createElement("Transform");
	  трансформаторГруппы.id = "копииГО";
	  трансформаторГруппы.setAttribute("translation","-1,0.3,0");
	  for(var i=0; i<ГО.length; i++){
	    копия = ГО[i].cloneNode(true);
	    группа.appendChild(копия);
	  }
	  трансформаторГруппы.appendChild(группа);
	  document.getElementById("тело_0").appendChild(трансформаторГруппы);
	}
	/*var номерБазыКопии = document.getElementsByName("номерБазыКопии")[N] ;
	if(номерБазыКопии==undefined){
	  номерБазыКопии=document.getElementsByName("номерБазыКопии")[0].value;
	} else {
	  номерБазыКопии = document.getElementsByName("номерБазыКопии")[N].value;
	}*/
	
	//копия.setAttribute("translation","-1,0,0");
	//копия.id="телоКопия";
	
	/*занумероватьТела();
	перестроитьТаблицу();*/
  }
}

}

function переместитьВнешнююМодель(){
  var номерБазыКопии = document.getElementsByName("номерБазыКопии")[N] ;
  var k=0;
  if(номерБазыКопии!=undefined){
	  k=N;
  } 
  номерБазыКопии = document.getElementsByName("номерБазыКопии")[k].value;
  
  var ССК = document.getElementById("тело_"+номерБазыКопии);
  var копия;
  if( document.getElementsByTagName("x3d")[1].getElementsByTagName("Transform")[0].id=="тело_0"){
	var копииТел = document.getElementById("копииТел").children;
	
	for(var i=0; i<копииТел.length; i++){
	  if(копииТел[i].getAttribute('name')=="размерОсей"){continue;}
	  ССК.appendChild(копииТел[i]);
	}
	
	document.getElementById("копииТел").remove();
  } else {
    ССК.appendChild(document.getElementById("копииГО").getElementsByTagName("Group")[0]);
	//document.getElementById("копииГО").parentNode.removeChild(document.getElementById("копииГО"));
	document.getElementById("копииГО").remove();
  }

 /* var копия = document.getElementById("телоКопия").cloneNode(true);
  document.getElementById("телоКопия").parentNode.removeChild(document.getElementById("телоКопия"));
  document.getElementById("тело_"+номерБазыКопии).appendChild(копия);
  var  перемещение = [];
  перемещение[0] = document.getElementsByName("переносXтабл")[k].value; 
  перемещение[1] = document.getElementsByName("переносYтабл")[k].value; 
  перемещение[2] = document.getElementsByName("переносZтабл")[k].value;
  копия.setAttribute("translation",перемещение.join(','));*/
 // копия.id="тело";
	
  document.getElementById("модельВставка").remove();
  //занумероватьТела();
  перестроитьТаблицу();
  создатьФС();
	
}