function описатьКП(){
  скрытьВсеМеню();
  var описаниеКП = document.getElementById("КП");
  if(document.getElementById("тело_1").getAttribute("минимальное_q")!=undefined){
    вернутьНачальноеПоложение();
  }
  описаниеКП.innerHTML = "";
  for(var i=1;  i<=N; i++){
    var имяТела = document.createElement("label");
	имяТела.innerHTML=document.getElementById("тело_"+i).getAttribute('имятела');
	имяТела.className = "подписьТела";
	var текст1 = document.createElement("div");
	текст1.className = "блок";
	текст1.innerHTML = "Тип КП";
	var текст2 = document.createElement("div");
	текст2.className = "блок";
	текст2.innerHTML = "q<sub>x</sub>";	
	var текст3 = document.createElement("div");
	текст3.className = "блок";
	текст3.innerHTML = "q<sub>y</sub>";	
	var текст4 = document.createElement("div");
	текст4.className = "блок";
	текст4.innerHTML = "q<sub>z</sub>";	
	var блок1 = document.createElement("div");
	блок1.className = "блок";
    var блок2 = document.createElement("div");
	блок2.className = "блок";
	var блок3 = document.createElement("div");
	блок3.className = "блок";
	var блок4 = document.createElement("div");
	блок4.className = "блок";
	
	var блокЦвета =  document.createElement("div");
  
   
   function изменитьЦвет(){ 
	  var номерТела = this.id.replace(/\D+/,'');
	  var материалы = document.getElementById("тело_"+номерТела).getElementsByTagName("Group")[0].getElementsByTagName("Material");
	  var цвет = материалы[0].diffuseColor.split(" ");
	  var названиеЦвета = this.id.replace(/Цвет_\d+/,"");
	  var номерЦвета;
	  switch(названиеЦвета){
	    case 'красный': номерЦвета = 0; break;
	    case 'зелёный': номерЦвета = 1; break;
	    case 'синий': номерЦвета = 2; break;
	  }
      цвет[номерЦвета] = this.value;
	  for(var i=0, количество = материалы.length; i<количество; i++){
	    материалы[i].diffuseColor = цвет.join(' ');
	  }
	}	
   
	var видыКП = document.createElement("select");
	видыКП.id = "видКП_"+i;
	var вид1 = document.createElement("option");
	var вид2 = document.createElement("option");
	var вид3 = document.createElement("option");
	var вид4 = document.createElement("option");
	вид1.innerHTML = "ВКП";
	вид2.innerHTML = "ПКП";
	вид3.innerHTML = "ЦКП";
	вид4.innerHTML = "ШКП";
	видыКП.appendChild(вид1);
	видыКП.appendChild(вид2);
	видыКП.appendChild(вид3);
	//видыКП.appendChild(вид4);
	блок1.appendChild(видыКП);
	
	var осьX = document.createElement("input");	
	var осьY = document.createElement("input");	
	var осьZ = document.createElement("input");	
	осьX.id = "осьX_"+i;
	осьY.id = "осьY_"+i;
	осьZ.id = "осьZ_"+i;
	осьX.type = "number";
	осьY.type = "number";
	осьZ.type = "number";
	осьX.value = "0";
	осьY.value = "0";
	осьZ.value = "0";	
    блок2.appendChild(осьX);
    блок3.appendChild(осьY);
    блок4.appendChild(осьZ);
	
    описаниеКП.appendChild(имяТела);
    //описаниеКП.appendChild(блокЦвета);

	
	описаниеКП.appendChild(текст1);
    описаниеКП.appendChild(текст2);
    описаниеКП.appendChild(текст3);
    описаниеКП.appendChild(текст4);
    описаниеКП.appendChild(блок1);
    описаниеКП.appendChild(блок2);
    описаниеКП.appendChild(блок3);
    описаниеКП.appendChild(блок4);
  }
  читатьОписаниеКП();
  показатьМеню("описаниеКП");
  
function вернутьНачальноеПоложение(){
   for(var i=1; i<=N; i++){
	var  тело = document.getElementById("тело_"+i);
	switch(тело.getAttribute("видкп")){
	  case 'ВКП': 
	    var поворот = тело.getAttribute("rotation").split(' ');
	    поворот[3]='0';
	    тело.setAttribute("rotation", поворот.join(' '));
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
	var qx = parseFloat(document.getElementById("осьX_"+i).value);
	var qy = parseFloat(document.getElementById("осьY_"+i).value);
	var qz = parseFloat(document.getElementById("осьZ_"+i).value);
    if((qx*qx+qy*qy+qz*qz).toFixed(3)!=1){
	  посчитатьНК();
	}
	function посчитатьНК(){
	  if (qx==0&&qy!=0&&qz!=0){
	    qx=Math.sqrt(1-qy*qy-qz*qz);	
      } else if (qx!=0&&qy==0&&qz!=0){
	    qy=Math.sqrt(1-qx*qx-qz*qz);
      } else if (qx!=0&&qy!=0&&qz==0){
	    qz=Math.sqrt(1-qy*qy-qx*qx);
      } else {
	    записатьНК = false;
	  }
	}
    if(записатьНК && (qx*qx+qy*qy+qz*qz).toFixed(3)==1){
      тело.setAttribute("осьКП", qx+","+qy+","+qz);
	} else {
	  document.getElementById("ошибкаВСтрокеКП").innerHTML = i;
	  показатьМеню("предупрежедниеНК");
	  return;
	}
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

	function добавитьПоступательное(){
	  тело.setAttribute('начальноеПоложение',тело.getAttribute("translation"));
	  var текст1 = document.createElement("div");
	  var текст2 = document.createElement("div");
	  var текст3 = document.createElement("div");
	  текст1.className = "блокТреть";
	  текст2.className = "блокТреть";
	  текст3.className = "блокТреть";
	  текст1.innerHTML = "p=0";	
	  текст2.innerHTML = "p<sub>min</sub>";	
	  текст3.innerHTML = "p<sub>max</sub>";
	  
	  var кнопка1 = document.createElement("input");
	  var кнопка2 = document.createElement("input");
	  var кнопка3 = document.createElement("input");
      кнопка1.type="button"; кнопка2.type="button"; кнопка3.type="button";
	  кнопка1.value="OK"; кнопка2.value="OK"; кнопка3.value="OK";
	  кнопка1.name="ненажималась"; кнопка2.name="ненажималась"; кнопка3.name="ненажималась";
      кнопка1.id="нул_p"+i;
      кнопка2.id="мин_p"+i;
      кнопка3.id="макс_p"+i;
      кнопка1.addEventListener('click',изменитьПоложениеТела);
      кнопка2.addEventListener('click',изменитьПоложениеТела);
      кнопка3.addEventListener('click',изменитьПоложениеТела);
	  
	  текст1.appendChild(кнопка1);
	  описаниеПоложений.appendChild(текст1);
	  текст2.appendChild(кнопка2);
	  описаниеПоложений.appendChild(текст2);
	  текст3.appendChild(кнопка3);
	  описаниеПоложений.appendChild(текст3);
	  
      var полеВвода1 = document.createElement("input");
      var полеВвода2 = document.createElement("input");
      var полеВвода3 = document.createElement("input");
	  полеВвода1.type="number"; полеВвода2.type="number"; полеВвода3.type="number";
	  полеВвода1.value=''; полеВвода2.value='0'; полеВвода3.value='0';
	  полеВвода1.step="0.01"; полеВвода2.step="0.01"; полеВвода3.step="0.01";
      полеВвода1.id="нулевое_p"+i;
      полеВвода2.id="минимальное_p"+i;
      полеВвода3.id="максимальное_p"+i;
	  
	  var блокВвода1 = document.createElement("div");
	  var блокВвода2 = document.createElement("div");
	  var блокВвода3 = document.createElement("div");
	  блокВвода1.className = "блокТреть";
	  блокВвода2.className = "блокТреть";
	  блокВвода3.className = "блокТреть";

	  блокВвода1.appendChild(полеВвода1);
	  описаниеПоложений.appendChild(блокВвода1);
	  блокВвода2.appendChild(полеВвода2);
	  описаниеПоложений.appendChild(блокВвода2);
	  блокВвода3.appendChild(полеВвода3);
	  описаниеПоложений.appendChild(блокВвода3);
    }
  
    function добавитьВращательное(){
	  var текст1 = document.createElement("div");
	  var текст2 = document.createElement("div");
	  текст1.className = "блокПоловина";
	  текст2.className = "блокПоловина";
	  текст1.innerHTML = "q<sub>min</sub>";	
	  текст2.innerHTML = "q<sub>max</sub>";
	  
	  var кнопка1 = document.createElement("input");
	  var кнопка2 = document.createElement("input");
      кнопка1.type="button"; кнопка2.type="button"; 
	  кнопка1.value="OK"; кнопка2.value="OK"; 
	  кнопка1.name="ненажималась"; кнопка2.name="ненажималась"; 
      кнопка1.id="мин_q"+i;
      кнопка2.id="макс_q"+i;
      кнопка1.addEventListener('click',изменитьПоложениеТела);
      кнопка2.addEventListener('click',изменитьПоложениеТела);
	  
	  текст1.appendChild(кнопка1);
	  описаниеПоложений.appendChild(текст1);
	  текст2.appendChild(кнопка2);
	  описаниеПоложений.appendChild(текст2);
	  
      var полеВвода1 = document.createElement("input");
      var полеВвода2 = document.createElement("input");
	  полеВвода1.type="number"; полеВвода2.type="number"; 
	  полеВвода1.value='0'; полеВвода2.value='0';
	  полеВвода1.step="5"; полеВвода2.step="5";
      полеВвода1.id="минимальное_q"+i;
      полеВвода2.id="максимальное_q"+i;
	  
	  var блокВвода1 = document.createElement("div");
	  var блокВвода2 = document.createElement("div");
	  блокВвода1.className = "блокПоловина";
	  блокВвода2.className = "блокПоловина";

	  блокВвода1.appendChild(полеВвода1);
	  описаниеПоложений.appendChild(блокВвода1);
	  блокВвода2.appendChild(полеВвода2);
	  описаниеПоложений.appendChild(блокВвода2);
  
    }
	////
	switch(тело.getAttribute("видкп")){
	  case 'ПКП': 
	    добавитьПоступательное(); 
	  break;
	  case 'ВКП': 
	    добавитьВращательное();
	  break;
	  case 'ЦКП': 
	    добавитьПоступательное(); 
	    добавитьВращательное(); 
	  break;
	  case 'ШКП': 
	  break;
	}
	    
  }
  читатьПоложения();
  проверитьВводПоложений();
}



function изменитьПоложениеТела(){
  var номерТела = this.id.replace(/\D+/,'');
  var тело = document.getElementById("тело_"+номерТела);
  var осьКП = тело.getAttribute("осьКП");
  var видКП = тело.getAttribute("видкп");
  var расстояние;
  switch(this.id.replace(/\d+/,"")){
	case "мин_q": 
	  расстояние = parseFloat(document.getElementById("минимальное_q"+номерТела).value); 
	  тело.setAttribute("минимальное_q", расстояние);
	  /*if(видКП==="ЦКП"){
	     вращать();
	  }*/
	break;
	case "макс_q": 
	  расстояние = parseFloat(document.getElementById("максимальное_q"+номерТела).value); 
	  тело.setAttribute("максимальное_q", расстояние);
	 /* if(видКП==="ЦКП"){
	     вращать();
	  }*/
	break;
	case "нул_p": 
	  расстояние = parseFloat(document.getElementById("нулевое_p"+номерТела).value); 
	  тело.setAttribute("нулевое_p", расстояние);
	  /*if(видКП==="ЦКП"){
	     двигатьПоступательно();
	  }*/
	break;
	case "мин_p": 
	  расстояние = parseFloat(document.getElementById("минимальное_p"+номерТела).value); 
	  тело.setAttribute("минимальное_p", расстояние);
	  /*if(видКП==="ЦКП"){
	     двигатьПоступательно();
	  }*/
	break;
	case "макс_p": 
	  расстояние = parseFloat(document.getElementById("максимальное_p"+номерТела).value); 
	  тело.setAttribute("максимальное_p", расстояние);
	  /*if(видКП==="ЦКП"){
	     двигатьПоступательно();
	  }*/
	break;
	default: расстояние = parseFloat(this.value);
  }
    
  function двигатьПоступательно(){
    var k=0;
	  if(!/нул_p/.test(this.id)){
	    k=parseFloat(тело.getAttribute("нулевое_p"));
	  }
	  var начальноеПоложение = тело.getAttribute('начальноеПоложение').split(",");
	  var перемещение = [];
	  перемещение[0] = parseFloat(начальноеПоложение[0])+(k+расстояние)*осьКП.split(',')[0]; 
      перемещение[1] = parseFloat(начальноеПоложение[1])+(k+расстояние)*осьКП.split(',')[1]; 
	  перемещение[2] = parseFloat(начальноеПоложение[2])+(k+расстояние)*осьКП.split(',')[2]; 
	  тело.setAttribute("translation",перемещение.join(','));
  }
  
  function вращать(){
    тело.setAttribute("rotation",осьКП.replace(/,/g," ")+" "+получитьРадианы(расстояние));
  }
  switch(тело.getAttribute("видкп")){
	case 'ВКП': 
	  вращать();
	break;
	case 'ПКП': 
	  двигатьПоступательно();
	break;	
	case 'ЦКП': 
	  if (/q/.test(this.id)){
		  вращать();
		} else {
		  двигатьПоступательно();
		}
	break;	
	
  }
  try{
	switch(тело.getAttribute("видкп")){  
	  case "ПКП":document.getElementById("значение_p"+номерТела).innerHTML = this.value;break;
	  case "ВКП":document.getElementById("значение_q"+номерТела).innerHTML = this.value;break;
	  case "ЦКП":
	    if (/q/.test(this.id)){
		  document.getElementById("значение_q"+номерТела).innerHTML = this.value;
		} else {
		  document.getElementById("значение_p"+номерТела).innerHTML = this.value;
		}
	  break;
      
	}
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
    var видКП = document.getElementById("тело_"+i).getAttribute("видкп");
	if(видКП==undefined){return;}
    var осьКП = document.getElementById("тело_"+i).getAttribute("оськп").split(",");
	document.getElementById("видКП_"+i).value = видКП;
	  document.getElementById("осьX_"+i).value = осьКП[0];
	  document.getElementById("осьY_"+i).value = осьКП[1];
	  document.getElementById("осьZ_"+i).value = осьКП[2];
  }
}

function читатьПоложения(){
  for(var i=1; i<=N; i++){
	var тело = document.getElementById("тело_"+i);
	switch(тело.getAttribute("видКП")){
	  case "ПКП": читатьПоступательную(); break;
	  case "ВКП": читатьВращательную(); break;
	  case "ЦКП": break;
	}
	if(тело.getAttribute("минимальное_q")==undefined){return;}
	
	function читатьВращательную(){
	  document.getElementById('минимальное_q'+i).value = тело.getAttribute("минимальное_q");
	  document.getElementById('максимальное_q'+i).value = тело.getAttribute("максимальное_q");
      document.getElementById('мин_q'+i).name = "нажималась";
	  document.getElementById('макс_q'+i).name = "нажималась";
	}
	
	function читатьПоступательную(){
	  document.getElementById('минимальное_q'+i).value = тело.getAttribute("минимальное_q");
	  document.getElementById('максимальное_q'+i).value = тело.getAttribute("максимальное_q");
      document.getElementById('мин_q'+i).name = "нажималась";
	  document.getElementById('макс_q'+i).name = "нажималась";
	}
	
	if(тело.getAttribute("видкп")=='ПКП' && тело.getAttribute("нулевое_q")!=undefined){
	  document.getElementById('нулевое_q'+i).value = тело.getAttribute("нулевое_q");
	  document.getElementById('нул_q'+i).name = "нажималась";
	}
  }
}