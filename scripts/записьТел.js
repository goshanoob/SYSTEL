function записатьТела(){  
  if(проект==undefined){alert('Сохраните проект'); return;}
  var разметка=[];
  var всяМодель = document.getElementById("тело_0").cloneNode(true);
  var начало = '<?xml version="1.0" encoding="UTF-8"?>\n<X3D version="3.2">\n <Scene><Background  skyColor="1 1 1"></Background>\n ';
  var конец = '\n </Scene>\n</X3D>';
  var группы = document.getElementsByTagName("Group");
  var числоГрупп = группы.length;
  for(var i=0; i<числоГрупп; i++){
    разметка.push(начало+ группы[i].innerHTML.replace(/bottomradius/g,"bottomRadius").replace(/diffusecolor/g,"diffuseColor")
                                              .replace(/transparency="0\.7"/g,'transparency="0"').replace(/rectangle2d/ig,'rectangle2D')
											  .replace(/diffuseColor="1,0,0"/ig,'diffuseColor="0,1,0"').replace(/linesegments/ig,'lineSegments')
											  .replace(/polyline2d/ig,'polyline2D')+конец);
  }
  
  //var структура = document.getElementsByTagName("transform")[1].outerHTML.replace(/<Shape[\s\S]*?<\/Shape>/gi,"").
//  replace(/<\/transform>/gi,"\n</transform>"); 
  var подключения = document.getElementsByTagName("inline");
  var числоПодключений=подключения.length;
  var оси=document.getElementsByName("размерОсей");
  for(i=0; i<числоПодключений; i++){
    подключения[0].parentNode.removeChild(подключения[0]);
  }
  for(i=0; i<числоГрупп; i++){
    //оси[0].parentNode.removeChild(оси[0]);
    var трансформатор = document.getElementById("тело_"+i);
    var тело = document.createElement("Inline");
    тело.setAttribute('url',"тело_"+i+".x3d");
	трансформатор.replaceChild(тело, трансформатор.getElementsByTagName("Group")[0]);
  }
  var структура = начало+ document.getElementById("тело_0").outerHTML.replace(/bottomradius/g,"bottomRadius").replace(/def/g,"DEF")+'\n';
  /*for(i=1; i<=N; i++){
	структура += ' <EXPORT localDEF="тело_'+i+'" AS="тело'+i+'"/>\n';
  }*/
  структура += конец;
	
 
  
  var ФС = require('fs');
  ФС.writeFile(проект+'/структураМС.x3d', структура, результатЗаписи);
  
  for(i=0; i<числоГрупп; i++){
     //var ФС = require('fs');
     ФС.writeFile(проект+'/тело_'+i+'.x3d', разметка[i], результатЗаписи); 
  }
  document.getElementById("тело_0").parentNode.replaceChild(всяМодель,document.getElementById("тело_0"));
}