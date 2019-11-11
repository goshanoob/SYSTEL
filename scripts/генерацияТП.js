function записатьТаблицы(){ 
  var ТПМС = '<html><table>', ТПМТ = '<html><body><table>', ТППД = '<html>\n<table>\n<tr>', КП, КПТ, min, max, КГО, ВУПГО, ПГО;
  for(var i=0; i<=N; i++){
    var тело = document.getElementById("тело_"+i);
	if(i!=0){
	  var осьКП = тело.getAttribute("осьКП"); 
	  switch(тело.getAttribute("видКП")){
	    case "ПКП": 
		  КП = "0"; 
		  var начальноеПоложение = тело.getAttribute('начальноеПоложение').split(",");
		  var нулевоеПоложение = parseFloat(тело.getAttribute("нулевое_q"));
		  var начКоордината;
		  switch(осьКП){
		    case "1,0,0": 
			  начальноеПоложение[0] = parseFloat(начальноеПоложение[0]) + нулевоеПоложение;
			  начКоордината = начальноеПоложение[0];
			  break;
		    case "0,1,0": 
			  начальноеПоложение[1] = parseFloat(начальноеПоложение[1]) + нулевоеПоложение;
			  начКоордината = начальноеПоложение[1];
            break;
		    case "0,0,1": 
			  начальноеПоложение[2] = parseFloat(начальноеПоложение[2]) + нулевоеПоложение;
			  начКоордината = начальноеПоложение[2];
			break;
	     }
		  КПТ = начальноеПоложение.join(',');
		  min = начКоордината + parseFloat(тело.getAttribute("минимальное_q"));
		  max = начКоордината + parseFloat(тело.getAttribute("максимальное_q"));
		  break;
	    case "ВКП": КП = "1"; КПТ = тело.getAttribute("translation"); min = тело.getAttribute("минимальное_q"); max = тело.getAttribute("максимальное_q"); break;
	    default: КП = "?"; break;
	  }
      ТПМС+='<tr><td>'+тело.parentNode.id.replace(/тело_/i,"")+'</td><td>'+КП+'</td><td>'+КПТ+'</td><td>'+осьКП+'</td><td>'+min+'</td><td>'+max+'</td></tr>\n'
	}
    ТППД+="<td>0</td>";
	var трансГО = тело.getElementsByTagName("Group")[0].children;
	var колГО = трансГО.length;
	for(var j=0; j<колГО; j++){
	  var форма = трансГО[j].getElementsByTagName("Shape")[0];
	  var ГО = форма.children[0];
	  ВУПГО = трансГО[j].getAttribute("rotation").split(" ");
	  ВУПГО[3]=получитьГрадусы(ВУПГО[3]);
	  switch(ГО.tagName.toLowerCase()){
	    case "box": КГО = "0"; ПГО = ГО.getAttribute("size"); break;
	    case "cylinder": КГО = "1"; ПГО = ГО.getAttribute("radius")+", "+ГО.getAttribute("height"); break;
	    case "cone": КГО = "2"; ПГО = ГО.getAttribute("bottomRadius")+", "+ГО.getAttribute("height"); break;
	    case "sphere": КГО = "3"; ПГО = трансГО[j].children[0].getAttribute("scale").split(",")[0]; break;
	    default: КГО = "?"; ПГО = "?"; break;
	  }
	  ТПМТ+='<tr><td>'+тело.id.replace(/тело_/i,"")+'</td><td>'+КГО+'</td><td>'+трансГО[j].getAttribute("translation")+'</td><td>'+ВУПГО.join(",")+'</td><td>'+трансГО[j].getAttribute("scale").split(',')+'</td><td>'+форма.getElementsByTagName("Material")[0].getAttribute("diffuseColor").replace(/\s/g,",")+'</td><td>'+ПГО+'</td></tr>\n';
	}
  }
  ТППД+="</tr>\n</table>\n</html>";
  ТПМС+="</table></html>";
  ТПМТ+="</table></body></html>";
  if(проект==undefined){
    проект = this.value;
  }
  var ФС = require('fs');
  ФС.writeFile(проект+"\\ТПМС.html", ТПМС, результатЗаписи);
  ФС.writeFile(проект+"\\ТПМТ.html", ТПМТ, результатЗаписи);
  ФС.writeFile(проект+"\\ТППД.html", ТППД, результатЗаписи);
  document.getElementById("сохранитьПроект").value="";
}
