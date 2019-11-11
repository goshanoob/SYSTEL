function описатьКП(){
  скрытьВсеМеню();
  снятьПрозрачность();
  
  document.getElementById("режимРедактирования").className = "скрытоеМеню";
  document.getElementById("информация").innerHTML = "";
  var описаниеКП = document.getElementById("КП");
  if(document.getElementById("тело_1").getAttribute("минимальное_q")!=undefined){
    вернутьНачальноеПоложение();
  }
  описаниеКП.innerHTML = "";
  for(var i=1;  i<=N; i++){
    var номТела = document.createElement("div");
    var типДв = document.createElement("div");
    var осьДв = document.createElement("div");
    var цветТ = document.createElement("div");
	номТела.className="номТела";
	типДв.className="типДв";
	осьДв.className="осьДв";
	цветТ.className="цветТ";
	номТела.innerHTML = i+'.';
	
	var видыКП = document.createElement("select");
	var видыКП_ПКП = document.createElement("option");
	var видыКП_ВКП = document.createElement("option");
	видыКП.id = "видКП_"+i;
	видыКП_ПКП.innerHTML = "ПКП";
	видыКП_ВКП.innerHTML = "ВКП";
	видыКП.appendChild(видыКП_ПКП);
	видыКП.appendChild(видыКП_ВКП);
	
	var осиКП = document.createElement("select");
	var осиКП_X = document.createElement("option");
	var осиКП_Y = document.createElement("option");
	var осиКП_Z = document.createElement("option");
	осиКП.id = "осьКП_"+i;
    осиКП_X.innerHTML = "X";
	осиКП_Y.innerHTML = "Y";
	осиКП_Z.innerHTML = "Z";
    осиКП.appendChild(осиКП_X);
    осиКП.appendChild(осиКП_Y);
	осиКП.appendChild(осиКП_Z);	
	
	var цвТел = document.createElement("select");
	var цвТел_красный = document.createElement("option");
	var цвТел_синий = document.createElement("option");
	var цвТел_зелёный = document.createElement("option");
	цвТел.id = "цвТела_"+i;
    цвТел_красный.innerHTML = "красный";
	цвТел_синий.innerHTML = "синий";
	цвТел_зелёный.innerHTML = "зелёный";
    цвТел.appendChild(цвТел_красный);
    цвТел.appendChild(цвТел_зелёный);
	цвТел.appendChild(цвТел_синий);	
	
	//var колТел = document.getElementsByTagName("group").length; 
	

	цвТел.addEventListener('change',изменитьЦвет);


   
    типДв.appendChild(видыКП);
    осьДв.appendChild(осиКП);
    цветТ.appendChild(цвТел);
	описаниеКП.appendChild(номТела);
    описаниеКП.appendChild(типДв);
    описаниеКП.appendChild(осьДв);
    описаниеКП.appendChild(цветТ);

  }
  
  читатьОписаниеКП();
  показатьМеню("описаниеКП");
  
  function изменитьЦвет(){ 
	  var материалы = document.getElementById("тело_"+this.id.replace(/\D+/,'')).getElementsByTagName("Group")[0].getElementsByTagName("Material");
	  var кодЦвета;
	  switch(this.value){
	    case 'красный': кодЦвета = "1 0 0"; break;
	    case 'зелёный': кодЦвета = "0 1 0"; break;
	    case 'синий': кодЦвета = "0 0 1"; break;
	  }
	  for(var i=0, количество = материалы.length; i<количество; i++){
	    материалы[i].diffuseColor = кодЦвета;
	  }
	}
	
function вернутьНачальноеПоложение(){
   for(var i=1; i<=N; i++){
	var  тело = document.getElementById("тело_"+i);
	switch(тело.getAttribute("видкп")){
	  case 'ВКП': 
	    var поворот = тело.rotation.split(' ');
	    поворот[3]='0';
	    тело.rotation = поворот.join(' ');
	  break;
	  case 'ПКП': 
	    //var  осьКП = тело.getAttribute("осьКП");
		var перемещение = [];
		//var нулевоеПоложение = parseFloat(document.getElementById("нулевое_q"+i).value);
		  var начальноеПоложение = тело.getAttribute('начальноеПоложение').split(",");
		  
	      перемещение[0] = parseFloat(начальноеПоложение[0])/*+нулевоеПоложение*осьКП.split(',')[0]*/; 
          перемещение[1] = parseFloat(начальноеПоложение[1])/*+нулевоеПоложение*осьКП.split(',')[1]*/; 
		  перемещение[2] = parseFloat(начальноеПоложение[2])/*+нулевоеПоложение*осьКП.split(',')[2]*/; 
	    тело.translation = перемещение.join(',');
	  break;	
	}
  }}
  
  
  
}

function сохранитьОписаниеКП(){
  var записатьНК = true;
  for(var i=1;  i<=N; i++){
    var тело = document.getElementById("тело_"+i);
	тело.setAttribute("видКП",document.getElementById("видКП_"+i).value);
	var НК;
    switch(document.getElementById("осьКП_"+i).value){
	  case "X": НК="1,0,0"; break;
	  case "Y": НК="0,1,0"; break;
	  case "Z": НК="0,0,1"; break;
	}
	тело.setAttribute("осьКП", НК);
	
  }
  описатьКрайниеЗначения();
}

function описатьКрайниеЗначения(){ 
  скрытьВсеМеню();
  var описаниеПоложений = document.getElementById("описаниеПоложений");
  показатьМеню("положения");
  описаниеПоложений.innerHTML = "";
  
  for(var i=1;  i<=N; i++){
	var тело = document.getElementById("тело_"+i);
	
	var имяТела = document.createElement("label");
	имяТела.innerHTML=тело.getAttribute('имятела');
	имяТела.className = "подписьТелаПоложения";
	описаниеПоложений.appendChild(имяТела);

	var текст1 = document.createElement("div");
	текст1.innerHTML = "q<sub>min</sub>";	
	var текст2 = document.createElement("div");
	текст2.innerHTML = "q<sub>max</sub>";		  
	  
    кнопка1 = document.createElement("input");
    кнопка1.type="button";
    кнопка1.id="мин_q"+i;
	кнопка1.value="OK";
	кнопка1.name="ненажималась";
    кнопка1.addEventListener('click',изменитьПоложениеТела/*function(){
      var номерТела = this.id.replace(/\D+/,'');
	  document.getElementById("тело_"+номерТела).setAttribute("минимальное_q", document.getElementById("минимальное_q"+номерТела).value);
	  изменитьПоложениеТела(номерТела);
	  //вернутьНачальноеПоложение(номерТела);
    }*/);
    кнопка2 = document.createElement("input");
    кнопка2.type="button";
    кнопка2.id="макс_q"+i;
    кнопка2.value="OK";
    кнопка2.name="ненажималась";
    кнопка2.addEventListener('click',изменитьПоложениеТела/*function(){
      var номерТела = this.id.replace(/\D+/,'');
	  document.getElementById("тело_"+номерТела).setAttribute("максимальное_q", document.getElementById("максимальное_q"+номерТела).value);
      изменитьПоложениеТела(номерТела);
	  //вернутьНачальноеПоложение(номерТела);
	}*/);
	
    полеВвода1 = document.createElement("input");
    полеВвода1.type="number";
    полеВвода1.id="минимальное_q"+i;
	полеВвода1.value='0';
	//полеВвода1.addEventListener('input', переместитьТело);
    полеВвода2 = document.createElement("input");
    полеВвода2.type="number";
    полеВвода2.id="максимальное_q"+i;
	полеВвода2.value='0';
	//полеВвода2.addEventListener('input', переместитьТело);
	var блок1 = document.createElement("div");
	блок1.appendChild(полеВвода1);
	var блок2 = document.createElement("div");
	блок2.appendChild(полеВвода2);
    var текст3,блок3;
    switch(тело.getAttribute("видкп")){
	  case 'ПКП': полеВвода1.step="0.01"; полеВвода2.step="0.01"; блок1.className = "блокТреть"; блок2.className = "блокТреть"; текст1.className = "блокТреть"; текст2.className = "блокТреть"; добавитьПоступательное(); break;
	  case 'ВКП': полеВвода1.step="5"; полеВвода2.step="5"; блок1.className = "блокПоловина"; блок2.className = "блокПоловина"; текст1.className = "блокПоловина"; текст2.className = "блокПоловина"; break;
	}

    function добавитьПоступательное(){
	  тело.setAttribute('начальноеПоложение',тело.translation);
	  текст3 = document.createElement("div");
	  текст3.className = "блокТреть";
	  текст3.innerHTML = "q=0";	
      кнопка3 = document.createElement("input");
      кнопка3.type="button";
      кнопка3.id="нул_q"+i;
	  кнопка3.value="OK";
	  кнопка3.name="ненажималась";
      кнопка3.addEventListener('click',изменитьПоложениеТела/*function(){
        var номерТела = this.id.replace(/\D+/,'');
	    document.getElementById("тело_"+номерТела).setAttribute("нулевое_q", parseFloat(document.getElementById("нулевое_q"+номерТела).value));
	    изменитьПоложениеТела(номерТела);
	 }*/);
	  полеВвода3 = document.createElement("input");
      
      полеВвода3.id="нулевое_q"+i;

      var осьКП = тело.getAttribute("оськп");

	  полеВвода3.type="number";
      полеВвода3.step="0.01";
	  
	 // полеВвода3.addEventListener('input', переместитьТело);
	  блок3 = document.createElement("div");
	  блок3.className = "блокТреть";
	  блок3.appendChild(полеВвода3);
	  
	  текст3.appendChild(кнопка3);
	}
	
	if(тело.getAttribute("видкп")=='ПКП'){
	  описаниеПоложений.appendChild(текст3);
	}	
	описаниеПоложений.appendChild(текст1);
	текст1.appendChild(кнопка1);
	описаниеПоложений.appendChild(текст2);
	текст2.appendChild(кнопка2);
	if(тело.getAttribute("видкп")=='ПКП'){
	  описаниеПоложений.appendChild(блок3);
	}	
	описаниеПоложений.appendChild(блок1);
	описаниеПоложений.appendChild(блок2);
    
  }
  читатьПоложения();
  проверитьВводПоложений();
}



function изменитьПоложениеТела(){
  var номерТела = this.id.replace(/\D+/,'');
  var тело = document.getElementById("тело_"+номерТела);
  var осьКП = тело.getAttribute("осьКП");
  var расстояние;
  switch(this.id.replace(/\d+/,"")){
	case "мин_q": 
	  расстояние = parseFloat(document.getElementById("минимальное_q"+номерТела).value); 
	  тело.setAttribute("минимальное_q", расстояние);
	break;
	case "макс_q": 
	  расстояние = parseFloat(document.getElementById("максимальное_q"+номерТела).value); 
	  тело.setAttribute("максимальное_q", расстояние);
	break;
	case "нул_q": 
	  расстояние = parseFloat(document.getElementById("нулевое_q"+номерТела).value); 
	  тело.setAttribute("нулевое_q", расстояние);
	break;
	default: расстояние = parseFloat(this.value);
  }
    
  switch(тело.getAttribute("видкп")){
	case 'ВКП': 
	  тело.rotation = осьКП.replace(/,/g," ")+" "+получитьРадианы(расстояние);
	break;
	case 'ПКП': 
	  var k=0;
	  if(!/нул_q/.test(this.id)){
	    k=parseFloat(тело.getAttribute("нулевое_q"));
	  }
	  var начальноеПоложение = тело.getAttribute('начальноеПоложение').split(",");
	  var перемещение = [];
	  перемещение[0] = parseFloat(начальноеПоложение[0])+(k+расстояние)*осьКП.split(',')[0]; 
      перемещение[1] = parseFloat(начальноеПоложение[1])+(k+расстояние)*осьКП.split(',')[1]; 
	  перемещение[2] = parseFloat(начальноеПоложение[2])+(k+расстояние)*осьКП.split(',')[2]; 
	  тело.translation = перемещение.join(',');
	break;	
  }
  try{
    document.getElementById("значение_q"+номерТела).innerHTML = this.value;
  } catch(e){ 
    this.name = "нажималась"; 
	проверитьВводПоложений();
	
  }
}
function проверитьВводПоложений(){
	  var предупреждение = document.getElementById("предупреждениеПоложений"); 
	  if(document.getElementsByName("ненажималась").length==0){
	    предупреждение.className="скрытоеМеню";
	  } else {
	    предупреждение.className="открытоеМеню";
	  }
	}

function читатьОписаниеКП(){
  for(var i=1;  i<=N; i++){
	var цвТела =  document.getElementById("цвТела_"+i);
	var материалы = document.getElementById("тело_"+i).getElementsByTagName("Group")[0].getElementsByTagName("Material")[0];
	switch(материалы.getAttribute("diffuseColor")){
		case "1 0 0": цвТела.value="красный"; break;
		case "0 1 0": цвТела.value="зелёный"; break;
		case "0 0 1": цвТела.value="синий"; break;
	}
    var видКП = document.getElementById("тело_"+i).getAttribute("видкп");
	if(видКП!=undefined){
      var осьКП = document.getElementById("тело_"+i).getAttribute("оськп");
	  document.getElementById("видКП_"+i).value = видКП;
	  var ось;
	  switch(осьКП){
		case "1,0,0": ось="X"; break;
		case "0,1,0": ось="Y"; break;
		case "0,0,1": ось="Z"; break;
	  }
	  document.getElementById("осьКП_"+i).value = ось;
	}
  }
}

function читатьПоложения(){
  for(var i=1; i<=N; i++){
	var тело = document.getElementById("тело_"+i);
	if(тело.getAttribute("минимальное_q")==undefined){return;}
	document.getElementById('минимальное_q'+i).value = тело.getAttribute("минимальное_q");
	document.getElementById('максимальное_q'+i).value = тело.getAttribute("максимальное_q");
    document.getElementById('мин_q'+i).name = "нажималась";
	document.getElementById('макс_q'+i).name = "нажималась";
	
	if(тело.getAttribute("видкп")=='ПКП' && тело.getAttribute("нулевое_q")!=undefined){
	  document.getElementById('нулевое_q'+i).value = тело.getAttribute("нулевое_q");
	  document.getElementById('нул_q'+i).name = "нажималась";
	}
  }
}