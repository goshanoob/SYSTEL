var  клонССК, клонГО, выбраннаяФорма, размерОсей=0.1, линейныйРазмер=1,
 N, проект, формулыЗвеньев = [], ведущее;
window.addEventListener('load', запуск);
function запуск(){
  построитьМеню(); создатьПроект();
  document.getElementById('вставитьССК').addEventListener('click', создатьССК);
//  document.getElementById('вставитьССКок').addEventListener('click', создатьССК);
 // document.getElementById('вставитьССКотмена').addEventListener('click', скрытьВсеМеню);
  document.getElementById('переместитьССК').addEventListener('click', показатьПермещениеССК);
  document.getElementById('удалитьССК').addEventListener('click', показатьУдалениеССК);
  document.getElementById('создатьГО').addEventListener('click', создатьГО);
 // document.getElementById('вставитьГОок').addEventListener('click', создатьГО);
 // document.getElementById('вставитьГОотмена').addEventListener('click', скрытьВсеМеню);
  document.getElementById('имяТела').addEventListener('blur', сохранитьИмяТела);
  document.getElementById('удалитьГО').addEventListener('click', показатьУдалениеГО);
  document.getElementById('изменитьГО').addEventListener('click', показатьИзменениеГО);
  document.getElementById('переместитьГО').addEventListener('click', показатьПеремещениеГО);
  document.getElementById("перемещениеССКпоX").addEventListener("input",переместитьССК);
  document.getElementById("перемещениеССКпоY").addEventListener("input",переместитьССК);
  document.getElementById("перемещениеССКпоZ").addEventListener("input",переместитьССК);
  document.getElementById("перемещениеССКвлевоПоX").addEventListener("click",переместитьССК);
  document.getElementById("перемещениеССКвправоПоX").addEventListener("click",переместитьССК);
  document.getElementById("перемещениеССКвверхПоY").addEventListener("click",переместитьССК);
  document.getElementById("перемещениеССКвнизПоY").addEventListener("click",переместитьССК);
  document.getElementById("перемещениеССКвперёдПоZ").addEventListener("click",переместитьССК);
  document.getElementById("перемещениеССКназадПоZ").addEventListener("click",переместитьССК);
  /*document.getElementById("вращениеССКПоX").addEventListener("change",переместитьССК);
  document.getElementById("вращениеССКПоY").addEventListener("change",переместитьССК);
  document.getElementById("вращениеССКПоZ").addEventListener("change",переместитьССК);
  document.getElementById("вращениеССК").addEventListener("input",переместитьССК);
  document.getElementById("вращениеССКвправо").addEventListener("click",переместитьССК);
  document.getElementById("вращениеССКвлево").addEventListener("click",переместитьССК);*/
  document.getElementById("удалитьССКок").addEventListener("click",удалитьССК);
  document.getElementById("удалитьССКотмена").addEventListener("click",скрытьВсеМеню);
  document.getElementById("длинаБокса").addEventListener("input",изменитьБокс);
  document.getElementById("высотаБокса").addEventListener("input",изменитьБокс);
  document.getElementById("ширинаБокса").addEventListener("input",изменитьБокс);
  document.getElementById("ползунокДлиныБокса").addEventListener("input",изменитьБокс);
  document.getElementById("ползунокВысотыБокса").addEventListener("input",изменитьБокс);
  document.getElementById("ползунокШириныБокса").addEventListener("input",изменитьБокс);
  document.getElementById("радиусЦилиндра").addEventListener("input",изменитьЦилиндр);
  document.getElementById("высотаЦилиндра").addEventListener("input",изменитьЦилиндр);
  document.getElementById("ползунокРадиусаЦилиндра").addEventListener("input",изменитьЦилиндр);
  document.getElementById("ползунокВысотыЦилиндра").addEventListener("input",изменитьЦилиндр);
  document.getElementById("сжатиеЦилиндраПоX").addEventListener("input",изменитьЦилиндр);
  document.getElementById("сжатиеЦилиндраПоZ").addEventListener("input",изменитьЦилиндр);
  document.getElementById("радиусКонуса").addEventListener("input",изменитьКонус);
  document.getElementById("высотаКонуса").addEventListener("input",изменитьКонус);
  document.getElementById("сжатиеКонусаПоX").addEventListener("input",изменитьКонус);
  document.getElementById("сжатиеКонусаПоZ").addEventListener("input",изменитьКонус);
  document.getElementById("ползунокРадиусаКонуса").addEventListener("input",изменитьКонус);
  document.getElementById("ползунокВысотыКонуса").addEventListener("input",изменитьКонус);
  document.getElementById("радиусШара").addEventListener("input",изменитьШар);
  document.getElementById("ползунокРадиусаШара").addEventListener("input",изменитьШар);
  document.getElementById("сжатиеШараПоX").addEventListener("input",изменитьШар);
  document.getElementById("сжатиеШараПоY").addEventListener("input",изменитьШар);
  document.getElementById("сжатиеШараПоZ").addEventListener("input",изменитьШар);
  document.getElementById("удалитьГОок").addEventListener("click",удалитьГО);
  document.getElementById("удалитьГОотмена").addEventListener("click",скрытьВсеМеню);
  document.getElementById("перемещениеГОпоX").addEventListener("input",переместитьГО);
  document.getElementById("перемещениеГОпоY").addEventListener("input",переместитьГО);
  document.getElementById("перемещениеГОпоZ").addEventListener("input",переместитьГО);
  document.getElementById("перемещениеГОвлево").addEventListener("click",переместитьГО);
  document.getElementById("перемещениеГОвправо").addEventListener("click",переместитьГО);
  document.getElementById("перемещениеГОвверх").addEventListener("click",переместитьГО);
  document.getElementById("перемещениеГОвниз").addEventListener("click",переместитьГО);
  document.getElementById("перемещениеГОвперёд").addEventListener("click",переместитьГО);
  document.getElementById("перемещениеГОназад").addEventListener("click",переместитьГО);
  document.getElementById("вращениеГОПоX").addEventListener("change",переместитьГО);
  document.getElementById("вращениеГОПоY").addEventListener("change",переместитьГО);
  document.getElementById("вращениеГОПоZ").addEventListener("change",переместитьГО);
  document.getElementById("вращениеГО").addEventListener("input",переместитьГО);
  document.getElementById("вращениеГОвправо").addEventListener("click",переместитьГО);
  document.getElementById("вращениеГОвлево").addEventListener("click",переместитьГО);
  document.getElementById("копироватьУзел").addEventListener("click",копироватьССК);
  document.getElementById("вставитьУзел").addEventListener("click",вставитьССК);
  document.getElementById("копироватьОбъект").addEventListener("click",копироватьГО);
  document.getElementById("вставитьОбъект").addEventListener("click",вставитьГО);

  document.getElementById("сохранитьПроект").addEventListener('change', записатьТаблицы);
  document.getElementById("сохранитьФайл").addEventListener('change', записатьФайлМС);
  document.getElementById("описаниеМСок").addEventListener('click', сохранитьОписаниеМС);
  document.getElementById("описаниеМСотмена").addEventListener('click', скрытьВсеМеню);
  document.getElementById("описаниеКПок").addEventListener('click', сохранитьОписаниеКП);
  document.getElementById("описаниеКПотмена").addEventListener('click', скрытьВсеМеню);
  document.getElementById("линРазмерОтмена").addEventListener('click', скрытьВсеМеню);
  document.getElementById("точностьОк").addEventListener('click', function(){
    записатьСостояние(); скрытьВсеМеню();
  });
  document.getElementById("точностьОтмена").addEventListener('click', скрытьВсеМеню);

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
  document.getElementById("линРазмерОк").addEventListener('click', function(){
    линейныйРазмер = document.getElementById("линейныйРазмер").value;
	размерОсей = линейныйРазмер*0.1;
	var оси = document.getElementsByName("размерОсей");
	document.getElementById("размерОсей").value = размерОсей;
	document.getElementById("длинаОсей").value = размерОсей/**0.2*/;
	for(var i=0; i<=N; i++){
	  оси[i].setAttribute("scale", размерОсей+','+размерОсей+','+размерОсей);
	}
	настроитьПолзунки();
	скрытьВсеМеню();
  });

/*  document.getElementById("строка_1").addEventListener('keydown',изменитьТаблицу);
 // document.getElementById("ТПМС").addEventListener('input',изменитьСтруктуру);
  document.getElementById("таблВверх").addEventListener('click',строкаВверх);
  document.getElementById("таблВниз").addEventListener('click',строкаВниз);
  document.getElementById("добавитьСтрТабл").addEventListener('click',создатьСтроку);
  document.getElementById("удалитьСтрТабл").addEventListener('click',удалитьСтрокуТабл);
  document.getElementById("внешняяМодельОбработчик").addEventListener('click',function(){document.getElementById("внешняяМодель").click()});
  document.getElementById("внешняяМодель").addEventListener('change',вставитьВнешнююМодель);
  document.getElementById("переместитьВнешнююМодель").addEventListener('click',переместитьВнешнююМодель);*/

  
  
  document.getElementById("открытьФайл").addEventListener('change', прочестьФайл); 

}

function показатьМеню(меню){
  document.getElementById(меню).className="меню открытоеМеню";
}

function скрытьВсеМеню(){
  document.getElementById("сообщенияССК").innerHTML="";
  document.getElementById("сообщенияГО").innerHTML="";
  var меню = document.getElementsByClassName("меню");
  for(var i=0; i<меню.length; i++){
    меню[i].className="меню скрытоеМеню";
  }
}

function скрытьМаркер(){
  document.getElementById('маркер').setAttribute('render', 'false');
}

function показатьВставкуССК(){
  скрытьВсеМеню();
  document.getElementById("координатаВставкиССКX").value = округлить(размерОсей*0.2);
  document.getElementById("координатаВставкиССКY").value = округлить(размерОсей*0.2);
  document.getElementById("координатаВставкиССКZ").value = '0';
  показатьМеню("вставкаССК");

}

function создатьССК(){
  скрытьВсеМеню();
  var родитель;
  if(выбраннаяФорма==undefined){
    родитель = document.getElementById('тело_0');
  } else {
    родитель = определитьТелоГО();
    снятьПрозрачность();
  }
  var трансформаторСтруктуры = document.createElement('transform');
  var группа = document.createElement('Group');
  трансформаторСтруктуры.setAttribute('translation', получитьКоординатыВставкиССК());//размерОсей*0.2+','+размерОсей*0.2+",0";
  трансформаторСтруктуры.setAttribute('rotation', "0 0 1 0");
  трансформаторСтруктуры.id = "тело_"+(++N);
  трансформаторСтруктуры.setAttribute("DEF","тело_"+N);
  родитель.appendChild(трансформаторСтруктуры);
  var размерОсейССК = document.createElement('transform');
  размерОсейССК.setAttribute('scale',размерОсей+' '+размерОсей+' '+размерОсей);
  размерОсейССК.setAttribute('name','размерОсей');
  var подключение = document.createElement("Inline");
  подключение.setAttribute("url","../scripts/XYZ.x3d");
  размерОсейССК.appendChild(подключение);
  трансформаторСтруктуры.appendChild(размерОсейССК);
  трансформаторСтруктуры.appendChild(группа);
  var трансформатор = document.createElement('transform');
  трансформатор.setAttribute("rotation","0 0 1 0");
  трансформатор.setAttribute("scale","1,1,1");
  var форма = document.createElement("Shape");
  var примитив = document.createElement("box");
  var материал = document.createElement("material");
  var отображение = document.createElement("Appearance");
  отображение.appendChild(материал);
  форма.appendChild(примитив);
  форма.appendChild(отображение);
  группа.appendChild(трансформатор);
  трансформатор.appendChild(форма);
  примитив.setAttribute('size', линейныйРазмер*0.2+','+линейныйРазмер*0.2+','+линейныйРазмер*0.2);
  форма.addEventListener('click', выбратьФорму, false);
  выбраннаяФорма = форма;
  раскраситьФорму();
  материал.setAttribute('transparency',"0.7");
  занумероватьТела();
  document.getElementById("имяТела").value = "тело_"+N;
  сохранитьИмяТела();

  записатьСостояние();
}

function показатьПермещениеССК(){
  скрытьВсеМеню();
  if(выбраннаяФорма==undefined){document.getElementById("сообщенияССК").innerHTML="ССК не выбрана"; return;}
  показатьМеню("перемещениеССК");
  var полеВвода1 = document.getElementById("перемещениеССКпоX");
  var полеВвода2 = document.getElementById("перемещениеССКпоY");
  var полеВвода3 = document.getElementById("перемещениеССКпоZ");
  var координаты = определитьТелоГО().getAttribute("translation").split(",");
  полеВвода1.value = округлить(координаты[0]);
  полеВвода2.value = округлить(координаты[1]);
  полеВвода3.value = округлить(координаты[2]);

}

function переместитьССК(событие,перемещение,ССК){
  if(перемещение==undefined){ перемещение = this.id;}
  if(ССК==undefined){ ССК = определитьТелоГО();}
  var перенос = ССК.getAttribute("translation").split(",");
  var поворот = ССК.getAttribute("rotation").split(" ");
  switch(перемещение){
    case "перемещениеССКпоX": перенос[0]=this.value.replace(/,/g,"."); ССК.setAttribute('translation',перенос.join(",")); break;
	case "перемещениеССКпоY": перенос[1]=this.value.replace(/,/g,"."); ССК.setAttribute('translation',перенос.join(",")); break;
	case "перемещениеССКпоZ": перенос[2]=this.value.replace(/,/g,"."); ССК.setAttribute('translation',перенос.join(",")); break;
	case "вращениеССК": поворот[3]=получитьРадианы(this.value); ССК.rotation=поворот.join(" "); break;
	//case "вращениеССКпоY": поворот[3]=this.value;   [1]="1"; ССК.rotation=поворот.join(" "); break;
	//case "вращениеССКпоZ": поворот[3]=this.value; поворот[2]="1"; ССК.rotation=поворот.join(" "); break;
    case "перемещениеССКвправоПоX": перенос[0]=(parseFloat(перенос[0])+0.1*линейныйРазмер).toFixed(3);
	  ССК.setAttribute('translation',перенос.join(","));
	  document.getElementById("перемещениеССКпоX").value=перенос[0]; break;
	case "перемещениеССКвлевоПоX": перенос[0]=(parseFloat(перенос[0])-0.1*линейныйРазмер).toFixed(3);
	  ССК.setAttribute('translation',перенос.join(","));
	  document.getElementById("перемещениеССКпоX").value=перенос[0]; break;
    case "перемещениеССКвверхПоY": перенос[1]=(parseFloat(перенос[1])+0.1*линейныйРазмер).toFixed(3);
	  ССК.setAttribute('translation',перенос.join(","));
	  document.getElementById("перемещениеССКпоY").value=перенос[1]; break;
    case "перемещениеССКвнизПоY": перенос[1]=(parseFloat(перенос[1])-0.1*линейныйРазмер).toFixed(3);
	  ССК.setAttribute('translation',перенос.join(","));
	  document.getElementById("перемещениеССКпоY").value=перенос[1]; break;
    case "перемещениеССКвперёдПоZ": перенос[2]=(parseFloat(перенос[2])+0.1*линейныйРазмер).toFixed(3);
	  ССК.setAttribute('translation',перенос.join(","));
	  document.getElementById("перемещениеССКпоZ").value=перенос[2]; break;
    case "перемещениеССКназадПоZ": перенос[2]=(parseFloat(перенос[2])-0.1*линейныйРазмер).toFixed(3);
	  ССК.setAttribute('translation',перенос.join(","));
	  document.getElementById("перемещениеССКпоZ").value=перенос[2]; break;
    case "вращениеССКПоX":
	  if(this.checked){поворот[0]="1";} else {поворот[0]="0";}
	  ССК.setAttribute('rotation',поворот.join(" ")); break;
    case "вращениеССКПоY":
	  if(this.checked){поворот[1]="1";} else {поворот[1]="0";}
	  ССК.setAttribute('rotation',поворот.join(" ")); break;
    case "вращениеССКПоZ":
	  if(this.checked){поворот[2]="1";} else {поворот[2]="0";}
	  ССК.setAttribute('rotation',поворот.join(" ")); break;
    case "вращениеССКвправо": поворот[3]=(parseFloat(поворот[3])-0.174533).toFixed(3);
	  ССК.setAttribute('rotation',поворот.join(" "));
	  document.getElementById("вращениеССК").value=получитьГрадусы(поворот[3]); break;
    case "вращениеССКвлево": поворот[3]=(parseFloat(поворот[3])+0.174533).toFixed(3);
	  ССК.setAttribute('rotation',поворот.join(" "));
	  document.getElementById("вращениеССК").value=получитьГрадусы(поворот[3]); break;
  }
  записатьСостояние();
}

function показатьУдалениеССК(){
  скрытьВсеМеню();
  if(выбраннаяФорма==undefined){
    document.getElementById("сообщенияССК").innerHTML="Не выбрана ССК для удаления";
	return;
  } else if (определитьТелоГО().id=="тело_0"){
    document.getElementById("сообщенияССК").innerHTML="Нельзя удалить АСК";
	return;
  } else {
	показатьМеню("удалениеССК");
  }

}

function удалитьССК(){
  var тело = определитьТелоГО();
  тело.parentNode.removeChild(тело);
  var группы = document.getElementsByTagName("Group");
  N = группы.length-1;
  занумероватьТела();
  скрытьВсеМеню();
  выбраннаяФорма=undefined;
  записатьСостояние();
}

function показатьСозданиеГО(){
  скрытьВсеМеню();
  document.getElementById("координатаВставкиГОX").value = округлить(размерОсей*0.2);
  document.getElementById("координатаВставкиГОY").value = округлить(размерОсей*0.2);
  document.getElementById("координатаВставкиГОZ").value = '0';
  показатьМеню("вставкаГО");
}

function создатьГО(ГО){
  if(typeof(ГО)!='string'){ ГО = document.getElementById("списокГО").value;}
  switch(ГО.toLowerCase()){
    case "бокс": ГО="box"; break;
    case "цилиндр": ГО="cylinder"; break;
    case "конус": ГО="cone"; break;
    case "шар": ГО="sphere"; break;
	default: return;
  }
  var родитель;
  if(выбраннаяФорма==undefined){
    родитель = document.getElementById('тело_'+N).getElementsByTagName("Group")[0]; // Group стойки
  } else {
    родитель = выбраннаяФорма.parentNode.parentNode;
    снятьПрозрачность();
  }
  var размерОсей = document.getElementById("размерОсей").value;
  var трансформатор = document.createElement('transform');

  трансформатор.setAttribute("scale","1,1,1");

  трансформатор.setAttribute("rotation","0 0 1 0");
  трансформатор.setAttribute("translation",получитьКоординатыВставкиГО());
  var форма = document.createElement("Shape");

  выбраннаяФорма = форма;
  var примитив = document.createElement(ГО);

  var отображение = document.createElement("Appearance");
  var материал = document.createElement("material");

  материал.setAttribute('transparency',"0.7");
  отображение.appendChild(материал);
  форма.appendChild(примитив);

  форма.appendChild(отображение);
  
  if(ГО=="sphere"){
    var трансфРазмера = document.createElement("transform");
    примитив.setAttribute('radius','1'); 
	трансфРазмера.setAttribute('scale',линейныйРазмер*0.1+","+линейныйРазмер*0.1+","+линейныйРазмер*0.1);
	трансфРазмера.appendChild(форма);
	трансформатор.appendChild(трансфРазмера);
  } else {
    трансформатор.appendChild(форма);
  }
  родитель.appendChild(трансформатор);
  switch(ГО){
    case "box": примитив.setAttribute('size',линейныйРазмер*0.2+','+линейныйРазмер*0.2+','+линейныйРазмер*0.2); break;
    case "cylinder": примитив.setAttribute('radius',линейныйРазмер*0.1); примитив.setAttribute('height',линейныйРазмер*0.2); break;
    case "cone": примитив.setAttribute('bottomRadius',линейныйРазмер*0.1); примитив.setAttribute('height',линейныйРазмер*0.2); break;
  }
  раскраситьФорму();
  форма.addEventListener('click', выбратьФорму, false);


  записатьСостояние();
}

function показатьИзменениеГО(){
  скрытьВсеМеню();
  if(выбраннаяФорма==undefined){
    document.getElementById("сообщенияГО").innerHTML="Не выбран ГО для изменения";
    return;
  } else {
	var ГО = выбраннаяФорма.childNodes[0].tagName.toLowerCase();
	var сжатие = выбраннаяФорма.parentNode.getAttribute('scale').split(",");
    switch(ГО){
	  case "box": показатьМеню("изменениеБокса");
	    var размеры = выбраннаяФорма.childNodes[0].getAttribute('size').split(",");
		document.getElementById("длинаБокса").value=округлить(размеры[0]);
		document.getElementById("высотаБокса").value=округлить(размеры[1]);
		document.getElementById("ширинаБокса").value=округлить(размеры[2]);
		document.getElementById("ползунокДлиныБокса").value=округлить(размеры[0]);
		document.getElementById("ползунокВысотыБокса").value=округлить(размеры[1]);
		document.getElementById("ползунокШириныБокса").value=округлить(размеры[2]);
	  break;
	  case "cylinder": показатьМеню("изменениеЦилиндра");
	    var радиус = округлить(выбраннаяФорма.childNodes[0].getAttribute('radius'));
	    var высота = округлить(выбраннаяФорма.childNodes[0].getAttribute('height'));
	    document.getElementById("радиусЦилиндра").value=радиус;
        document.getElementById("ползунокРадиусаЦилиндра").value=радиус;
	    document.getElementById("высотаЦилиндра").value=высота;
        document.getElementById("ползунокВысотыЦилиндра").value=высота;
        document.getElementById("сжатиеЦилиндраПоX").value=округлить(сжатие[0]);
        document.getElementById("сжатиеЦилиндраПоZ").value=округлить(сжатие[2]);
	  break;
	  case "cone": показатьМеню("изменениеКонуса");
	    var радиус = округлить(выбраннаяФорма.childNodes[0].getAttribute('bottomradius'));
	    var высота = округлить(выбраннаяФорма.childNodes[0].getAttribute('height'));
	    document.getElementById("радиусКонуса").value=радиус;
        document.getElementById("ползунокРадиусаКонуса").value=радиус;
	    document.getElementById("высотаКонуса").value=высота;
        document.getElementById("ползунокВысотыКонуса").value=высота;
		document.getElementById("сжатиеКонусаПоX").value=округлить(сжатие[0]);
        document.getElementById("сжатиеКонусаПоZ").value=округлить(сжатие[2]);
	  break;
	  case "sphere": показатьМеню("изменениеШара");
	    сжатие = выбраннаяФорма.parentNode.parentNode.getAttribute('scale').split(",");
	   // var радиус = округлить(выбраннаяФорма.childNodes[0].getAttribute('radius'));
	    var радиус = округлить(выбраннаяФорма.parentNode.getAttribute('scale'));
	    document.getElementById("радиусШара").value=радиус;
        document.getElementById("ползунокРадиусаШара").value=радиус;
		document.getElementById("сжатиеШараПоX").value=округлить(сжатие[0]);
		document.getElementById("сжатиеШараПоY").value=округлить(сжатие[1]);
        document.getElementById("сжатиеШараПоZ").value=округлить(сжатие[2]);
	  break;
	}
  }

}

function изменитьБокс(){
  switch(this.id){
    case "длинаБокса": document.getElementById("ползунокДлиныБокса").value = this.value; break;
    case "высотаБокса": document.getElementById("ползунокВысотыБокса").value = this.value; break;
    case "ширинаБокса": document.getElementById("ползунокШириныБокса").value = this.value; break;
    case "ползунокДлиныБокса": document.getElementById("длинаБокса").value = this.value; break;
    case "ползунокВысотыБокса": document.getElementById("высотаБокса").value = this.value; break;
    case "ползунокШириныБокса": document.getElementById("ширинаБокса").value = this.value; break;
  }
  var размеры = [];
  размеры[0] = document.getElementById("длинаБокса").value;
  размеры[1] = document.getElementById("высотаБокса").value;
  размеры[2] = document.getElementById("ширинаБокса").value;
  выбраннаяФорма.childNodes[0].size = размеры.join(',');
  записатьСостояние();
}

function изменитьЦилиндр(){
  var примитив = выбраннаяФорма.childNodes[0];
  var сжатие = выбраннаяФорма.parentNode.scale.split(',');
  switch(this.id){
    case "радиусЦилиндра": document.getElementById("ползунокРадиусаЦилиндра").value = this.value; примитив.radius = this.value; break;
    case "высотаЦилиндра": document.getElementById("ползунокВысотыЦилиндра").value = this.value; примитив.height = this.value; break;
    case "ползунокРадиусаЦилиндра": document.getElementById("радиусЦилиндра").value = this.value; примитив.radius = this.value; break;
    case "ползунокВысотыЦилиндра": document.getElementById("высотаЦилиндра").value = this.value; примитив.height = this.value; break;
    case "сжатиеЦилиндраПоX":  сжатие[0] = this.value; выбраннаяФорма.parentNode.scale = сжатие.join(','); break;
    case "сжатиеЦилиндраПоZ": сжатие[2] = this.value; выбраннаяФорма.parentNode.scale = сжатие.join(','); break;
  }
  записатьСостояние();
}

function изменитьКонус(){
  var примитив = выбраннаяФорма.childNodes[0];
  var сжатие = выбраннаяФорма.parentNode.scale.split(',');
  switch(this.id){
    case "радиусКонуса": document.getElementById("ползунокРадиусаКонуса").value = this.value; примитив.bottomradius = this.value; break;
    case "высотаКонуса": document.getElementById("ползунокВысотыКонуса").value = this.value; примитив.height = this.value; break;
    case "ползунокРадиусаКонуса": document.getElementById("радиусКонуса").value = this.value; примитив.bottomradius = this.value; break;
    case "ползунокВысотыКонуса": document.getElementById("высотаКонуса").value = this.value; примитив.height = this.value; break;
	case "сжатиеКонусаПоX":  сжатие[0] = this.value; выбраннаяФорма.parentNode.scale = сжатие.join(','); break;
    case "сжатиеКонусаПоZ": сжатие[2] = this.value; выбраннаяФорма.parentNode.scale = сжатие.join(','); break;
  }
  записатьСостояние();
}

function изменитьШар(){
  var сжатие = выбраннаяФорма.parentNode.parentNode.getAttribute('scale').split(',');
  switch(this.id){
    case "радиусШара": document.getElementById("ползунокРадиусаШара").value = this.value; выбраннаяФорма.parentNode.setAttribute('scale',this.value+','+this.value+','+this.value);/*выбраннаяФорма.childNodes[0].setAttribute('radius', this.value);*/ break;
    case "ползунокРадиусаШара": document.getElementById("радиусШара").value = this.value; выбраннаяФорма.parentNode.setAttribute('scale',this.value+','+this.value+','+this.value);/*выбраннаяФорма.childNodes[0].setAttribute('radius', this.value);*/ break;
	case "сжатиеШараПоX":  сжатие[0] = this.value; выбраннаяФорма.parentNode.parentNode.setAttribute('scale', сжатие.join(',')); break;
	case "сжатиеШараПоY":  сжатие[1] = this.value; выбраннаяФорма.parentNode.parentNode.setAttribute('scale', сжатие.join(',')); break;
    case "сжатиеШараПоZ": сжатие[2] = this.value; выбраннаяФорма.parentNode.parentNode.setAttribute('scale', сжатие.join(',')); break;
  }

  записатьСостояние();
}

function показатьУдалениеГО(){
  скрытьВсеМеню();
  if(выбраннаяФорма==undefined){
    document.getElementById("сообщенияГО").innerHTML="Не выбран ГО для удаления";
	return;
  } else if (выбраннаяФорма.children[0].tagName.toLowerCase()=="sphere" & выбраннаяФорма.parentNode.parentNode.parentNode.children.length==1){
    document.getElementById("сообщенияГО").innerHTML="Нельзя удалить последний ГО в ССК";
  } else if (выбраннаяФорма.children[0].tagName.toLowerCase()!="sphere" & выбраннаяФорма.parentNode.parentNode.children.length==1){
    document.getElementById("сообщенияГО").innerHTML="Нельзя удалить последний ГО в ССК";
	return;
  } else {
    показатьМеню("удалениеГО");
  }

}

function удалитьГО(){
  var ГО;
  if(выбраннаяФорма.children[0].tagName.toLowerCase()=="sphere"){
    ГО = выбраннаяФорма.parentNode.parentNode;
  } else {
    ГО = выбраннаяФорма.parentNode;
  }
  ГО.parentNode.removeChild(ГО);
  скрытьВсеМеню();
  выбраннаяФорма=undefined;
  записатьСостояние();
}

function показатьПеремещениеГО(){
  скрытьВсеМеню();
  if(выбраннаяФорма==undefined){document.getElementById("сообщенияГО").innerHTML="ГО не выбран"; return;}
  показатьМеню("перемещениеГО");
  var координаты;
  var вращение;
  if(выбраннаяФорма.children[0].tagName.toLowerCase()=="sphere"){
    координаты = выбраннаяФорма.parentNode.parentNode.getAttribute("translation").split(",");
    вращение = выбраннаяФорма.parentNode.parentNode.getAttribute("rotation").split(" ");
  } else {
    координаты = выбраннаяФорма.parentNode.getAttribute("translation").split(",");
    вращение = выбраннаяФорма.parentNode.getAttribute("rotation").split(" ");
  }

  document.getElementById("перемещениеГОпоX").value = округлить(координаты[0]);
  document.getElementById("перемещениеГОпоY").value = округлить(координаты[1]);
  document.getElementById("перемещениеГОпоZ").value = округлить(координаты[2]);
  document.getElementById("вращениеГО").value = получитьГрадусы(вращение[3]);
  var отметка1 = document.getElementById("вращениеГОПоX");
  var отметка2 = document.getElementById("вращениеГОПоY");
  var отметка3 = document.getElementById("вращениеГОПоZ");
  if(вращение[0]=="1"){отметка1.checked=true;}else{отметка1.checked=false;}
  if(вращение[1]=="1"){отметка2.checked=true;}else{отметка2.checked=false;}
  if(вращение[2]=="1"){отметка3.checked=true;}else{отметка3.checked=false;}

}

function переместитьГО(перемещение){
  if(typeof(перемещение)!='string'){ перемещение = this.id;}
  var ГО;
  if(выбраннаяФорма.children[0].tagName.toLowerCase()=="sphere"){
    ГО = выбраннаяФорма.parentNode.parentNode;
  } else {
    ГО = выбраннаяФорма.parentNode;
  }
  var перенос = ГО.getAttribute("translation").split(",");
  var поворот = ГО.getAttribute("rotation").split(" ");
  switch(перемещение){
    case "перемещениеГОпоX": перенос[0]=this.value.replace(/,/g,"."); ГО.setAttribute("translation",перенос.join(",")); break;
    case "перемещениеГОвлево":
	  перенос[0]=(parseFloat(перенос[0])-0.1*линейныйРазмер).toFixed(3);
      ГО.setAttribute("translation",перенос.join(","));
	  document.getElementById("перемещениеГОпоX").value=перенос[0];
	break;
    case "перемещениеГОвправо":
	  перенос[0]=(parseFloat(перенос[0])+0.1*линейныйРазмер).toFixed(3);
      ГО.setAttribute("translation",перенос.join(","));
	  document.getElementById("перемещениеГОпоX").value=перенос[0];
	break;
    case "перемещениеГОпоY": перенос[1]=this.value.replace(/,/g,"."); ГО.setAttribute("translation",перенос.join(",")); break;
    case "перемещениеГОвниз":
	  перенос[1]=(parseFloat(перенос[1])-0.1*линейныйРазмер).toFixed(3);
      ГО.setAttribute("translation",перенос.join(","));
	  document.getElementById("перемещениеГОпоY").value=перенос[1];
	break;
    case "перемещениеГОвверх":
	  перенос[1]=(parseFloat(перенос[1])+0.1*линейныйРазмер).toFixed(3);
      ГО.setAttribute("translation",перенос.join(","));
	  document.getElementById("перемещениеГОпоY").value=перенос[1];
	break;
    case "перемещениеГОпоZ": перенос[2]=this.value.replace(/,/g,"."); ГО.setAttribute("translation",перенос.join(",")); break;
    case "перемещениеГОназад":
	  перенос[2]=(parseFloat(перенос[2])-0.1*линейныйРазмер).toFixed(3);
      ГО.setAttribute("translation",перенос.join(","));
	  document.getElementById("перемещениеГОпоZ").value=перенос[2];
	break;
    case "перемещениеГОвперёд":
	  перенос[2]=(parseFloat(перенос[2])+0.1*линейныйРазмер).toFixed(3);
      ГО.setAttribute("translation",перенос.join(","));
	  document.getElementById("перемещениеГОпоZ").value=перенос[2];
	break;
	case "вращениеГОПоX":
	  if(this.checked){поворот[0]="1";} else {поворот[0]="0";}
	  ГО.setAttribute("rotation",поворот.join(" ")); break;
    case "вращениеГОПоY":
	  if(this.checked){поворот[1]="1";} else {поворот[1]="0";}
	  ГО.setAttribute("rotation",поворот.join(" ")); break;
    case "вращениеГОПоZ":
	  if(this.checked){поворот[2]="1";} else {поворот[2]="0";}
	  ГО.setAttribute("rotation",поворот.join(" ")); break;
    case "вращениеГОвправо": поворот[3]=(parseFloat(поворот[3])-0.174533).toFixed(3);
	  ГО.setAttribute("rotation",поворот.join(" "));
	  document.getElementById("вращениеГО").value=получитьГрадусы(поворот[3]); break;
    case "вращениеГОвлево": поворот[3]=(parseFloat(поворот[3])+0.174533).toFixed(3);
	  ГО.setAttribute("rotation",поворот.join(" "));
	  document.getElementById("вращениеГО").value=получитьГрадусы(поворот[3]); break;
	case "вращениеГО": поворот[3]=получитьРадианы(this.value); ГО.setAttribute("rotation",поворот.join(" ")); break;
  }
  записатьСостояние();
}

function определитьТелоГО(){ // определяет тело, которому принадлежит ГО
  if(выбраннаяФорма!=undefined){
    var тело;
    if (выбраннаяФорма.children[0].tagName.toLowerCase() == "sphere"){
	  тело = выбраннаяФорма.parentNode.parentNode.parentNode.parentNode;
	} else {
	  тело = выбраннаяФорма.parentNode.parentNode.parentNode;
	}
    return тело;
  }
}

function записатьСостояние(){
  var текст;
  if(выбраннаяФорма==undefined){
    текст = "Ни один ГО не выбран";
  } else {
    var точность = document.getElementById("количествоЗнаков").value;
    var перемещение = определитьТелоГО().getAttribute('translation').split(",");
    var перемещениеГО,вращениеГО;
	if (выбраннаяФорма.children[0].tagName.toLowerCase() == "sphere"){
	  перемещениеГО = выбраннаяФорма.parentNode.parentNode.getAttribute('translation').split(",");
	  вращениеГО = выбраннаяФорма.parentNode.parentNode.getAttribute("rotation").split(" ")[3];
	} else {
	  перемещениеГО = выбраннаяФорма.parentNode.getAttribute('translation').split(",");
	  вращениеГО = выбраннаяФорма.parentNode.getAttribute("rotation").split(" ")[3];
	}
    текст = " Тело: "+определитьТелоГО().getAttribute('имятела')+
      '; координаты полюса в ССКБ: '+округлить(перемещение[0],точность)+", "+округлить(перемещение[1],точность)+", "+округлить(перемещение[2],точность)/*+", поворот: "+округлить(получитьГрадусы(определитьТелоГО().getAttribute("rotation").split(" ")[3]),точность)*/+"; ГО: ";
    switch(выбраннаяФорма.childNodes[0].tagName.toLowerCase()){
      case 'box': var размеры = выбраннаяФорма.childNodes[0].size.split(",");
        текст+='бокс ' + округлить(размеры[0],точность)+" x "+ округлить(размеры[1],точность)+" x "+ округлить(размеры[2],точность); break;
      case 'cylinder': текст+='цилиндр;' + " r="+округлить(выбраннаяФорма.childNodes[0].radius,точность) +" h="+округлить(выбраннаяФорма.childNodes[0].height,точность); break;
      case 'cone': текст+='конус;' + " r="+округлить(выбраннаяФорма.childNodes[0].bottomradius,точность) +" h="+округлить(выбраннаяФорма.childNodes[0].height,точность); break;
      case 'sphere': текст+='сфера;' + " r="+округлить(выбраннаяФорма.parentNode.getAttribute('scale').split(',')[0],точность); break;

    }
	текст += ", перемещение: "+округлить(перемещениеГО[0],точность)+','+округлить(перемещениеГО[1],точность)+', '+округлить(перемещениеГО[2],точность)+", поворот: "+округлить(получитьГрадусы(вращениеГО),точность);
	/*if(document.getElementById('маркер').getAttribute('render')=="true"){
	  var коордвССК = получитьКоординатыВставкиССК().split(',');
	  текст += "; Вставка в коорд. ССК: "+округлить(коордвССК[0],точность)+", "+округлить(коордвССК[1],точность)+", "+округлить(коордвССК[2],точность)+", вставка в коорд. ГО: "+получитьКоординатыВставкивГО();
	}*/
	/*var тело = определитьТелоГО();
	document.getElementById("номер_табл").value = тело.id.replace(/\D+/,'');
	document.getElementById("типКП_табл").value = тело.getAttribute('видкп');
	document.getElementById("перенос_табл").value = тело.getAttribute('translation');
	document.getElementById("поворот_табл").value = тело.getAttribute('оськп');
	document.getElementById("цвет_табл").value = выбраннаяФорма.getElementsByTagName('material')[0].getAttribute('diffusecolor');
	document.getElementById("анимация_табл").value = тело.getAttribute("нулевое_q")+", "+тело.getAttribute('минимальное_q')+", "+тело.getAttribute('максимальное_q');
 */
 }
  document.getElementById("информация").innerHTML = текст;
}

function выбратьФорму(event){
 скрытьВсеМеню();
 снятьПрозрачность();

 выбраннаяФорма = event.target;
 выбраннаяФорма.getElementsByTagName("material")[0].setAttribute('transparency',"0.7");
 document.getElementById("имяТела").value = определитьТелоГО().getAttribute('имятела');

  записатьСостояние();
}

function создатьФС(){
  var всеФормы = document.getElementsByTagName("shape");
  for(var i=0; i<всеФормы.length; i++){
    всеФормы[i].addEventListener('click', выбратьФорму, false);
  }
}

function раскраситьФорму(){

  var материал = выбраннаяФорма.getElementsByTagName("material")[0];
  if(определитьТелоГО().id=="тело_0"){
    материал.setAttribute('diffuseColor',"0.7 0.7 0.7");
	return;
  }
  var цветБазы = определитьТелоГО().parentNode.getElementsByTagName('Group')[0].getElementsByTagName('material')[0];
  if(цветБазы==undefined){
    материал.setAttribute('diffuseColor',"0 0 1");
	return;
  }
  цветБазы = цветБазы.getAttribute('diffusecolor').split(' ');

  if(цветБазы[2]=='1'){
    материал.setAttribute('diffuseColor',"0 1 0");
  } else if(цветБазы[1]=='1') {
    материал.setAttribute('diffuseColor',"1 0 0");
  } else {
    материал.setAttribute('diffuseColor',"0 0 1");
  }
}

function снятьПрозрачность(){
  if(выбраннаяФорма!=undefined){
    выбраннаяФорма.getElementsByTagName("material")[0].setAttribute('transparency',"0");
  }
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


/*
  var группы = document.getElementsByTagName("Group");
  N = группы.length-1;
  for(var i=0; i<=N; i++){
    группы[i].parentNode.id = "тело_"+i;
	группы[i].parentNode.setAttribute("DEF","тело_"+i);
  }

  */
}

function копироватьССК(){
  скрытьВсеМеню();
  клонССК = определитьТелоГО().cloneNode(true);
  document.getElementById("копия").innerHTML = "Скопирована подсистема тела "+ /\d+/.exec(определитьТелоГО().id);

}

function вставитьССК(){
  if(клонССК==undefined){return;}
  определитьТелоГО().appendChild(клонССК);
  клонССК.setAttribute('translation',получитьКоординатыВставкиССК());
  снятьПрозрачность();
  создатьФС();
  занумероватьТела();
  document.getElementById("копия").innerHTML = "";
  выбраннаяФорма = клонССК.getElementsByTagName("Group")[0].getElementsByTagName("Shape")[0];
  выбраннаяФорма.getElementsByTagName("material")[0].setAttribute('transparency',"0.7");
  записатьСостояние();
  клонССК = undefined;
}

function копироватьГО(){
  скрытьВсеМеню();
  клонГО = выбраннаяФорма.parentNode.cloneNode(true);
  document.getElementById("копияГО").innerHTML = "Скопирован ГО "+ выбраннаяФорма.childNodes[0].tagName.toLowerCase();

}

function вставитьГО(){
  if(клонГО==undefined){return;}
  определитьТелоГО().getElementsByTagName("group")[0].appendChild(клонГО);
  клонГО.setAttribute('translation',получитьКоординатыВставкиГО());
  снятьПрозрачность();
  создатьФС();
  document.getElementById("копияГО").innerHTML = "";
  выбраннаяФорма = клонГО.getElementsByTagName("Shape")[0];
  выбраннаяФорма.getElementsByTagName("material")[0].setAttribute('transparency',"0.7");
  записатьСостояние();
  клонГО = undefined;
}

function округлить(число, погрешность){
  if(погрешность==undefined){погрешность=3;}
  return parseFloat(число).toFixed(погрешность);
}


function сохранитьОписаниеМС(){
  var тело_0 = document.getElementById("тело_0");
  тело_0.setAttribute("названиеМС",document.getElementById("названиеМС").value);
  тело_0.setAttribute("описаниеМС",document.getElementById("описаниеМС").value);
  скрытьВсеМеню();
}

function получитьРадианы(градусы){
  return (градусы*Math.PI/180).toFixed(3);
}

function получитьГрадусы(радианы){
  return (радианы*180/Math.PI).toFixed(2);
}

function получитьКоординатыВставкиССК(){
  return document.getElementById("координатаВставкиССКX").value +","+
    document.getElementById("координатаВставкиССКY").value +","+
    document.getElementById("координатаВставкиССКZ").value;
/*
  var маркер = document.getElementById("маркер");
  if(выбраннаяФорма==undefined || маркер.getAttribute('render')=='false'){
    return размерОсей*0.2+','+размерОсей*0.2+",0";
  }
  var коордМаркера = маркер.getAttribute('translation').split(',');
  var тело = определитьТелоГО();
  var координатаX = 0;
  var координатаY = 0;
  var координатаZ = 0;

  while(тело.id!='тело_0'){
	var координаты = тело.getAttribute('translation').split(',');
	координатаX += parseFloat(координаты[0]);
	координатаY += parseFloat(координаты[1]);
	координатаZ += parseFloat(координаты[2]);
    тело = тело.parentNode;
  }
  return округлить((коордМаркера[0]-координатаX))+','+округлить((коордМаркера[1]-координатаY))+','+округлить((коордМаркера[2]-координатаZ));

  */
}

function получитьКоординатыВставкиГО(){
  return document.getElementById("координатаВставкиГОX").value +","+
    document.getElementById("координатаВставкиГОY").value +","+
    document.getElementById("координатаВставкиГОZ").value;
/*
  var точность = document.getElementById("количествоЗнаков").value;
 var коордвССК = получитьКоординатыВставкиССК().split(',');
 var коордГО = выбраннаяФорма.parentNode.getAttribute('translation').split(',');
 var координатыВставкивГО = [];
 for(var i=0; i<3; i++){
   координатыВставкивГО[i] = округлить(коордвССК[i] - коордГО[i], точность) ;
 }
 return координатыВставкивГО.join(',');

 */
}
function сохранитьИмяТела(){
  определитьТелоГО().setAttribute('имяТела', document.getElementById("имяТела").value);
  записатьСостояние();
}