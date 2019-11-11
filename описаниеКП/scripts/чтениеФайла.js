function загрузитьПроект(){
 // файл.addEventListener('change', прочестьФайл); // выполняется несколько раз
  document.getElementById("открытьФайл").click();
}

  function прочестьФайл(){
	var файл = document.getElementById("открытьФайл");
    проект = файл.value.replace(/[^\\]+$/g,'');
	var ФС = require('fs');
	ФС.readFile(файл.value, 'utf8', результатЧтения);
	файл.value="";
  }

function результатЧтения(ошибка, данные) {
  if(ошибка) {
    console.log(ошибка);
  } else {
    удалитьРазметку();
    var div = document.createElement('div');
    document.getElementById("экран").appendChild(div);
	div.innerHTML = данные;
    div.id="модель"; 
	document.getElementsByTagName("x3d")[0].setAttribute('width',div.offsetWidth-15+'px');
	document.getElementsByTagName("x3d")[0].setAttribute('height',document.getElementById("экран").offsetHeight-15+'px');
	var x3dom = document.createElement('script');
	x3dom.src = '../scripts/x3dom-full.js';
	document.head.insertBefore(x3dom,document.head.children[document.head.children.length-1]);
	N = document.getElementsByTagName("Group").length-1;

	try{
	размерОсей = document.getElementsByName("размерОсей")[0].getAttribute('scale').split(',')[0];
	document.getElementById("размерОсей").value = размерОсей;
	}catch(e){}
	
	
	выбраннаяФорма=undefined;
	
	
	if(document.getElementsByTagName("group").length===0){
	  var подключения = document.getElementsByTagName("Inline");
	  var кол = подключения.length;
	  N=кол-1;
	  for(var i=0; i<кол; i++){
	    подключения[i].setAttribute("url",проект+"тело_"+i+".x3d");
		
	  }
	}
	
	// setTimeout(описатьКП, 1000);
	описатьКП();
}
    
  }


function удалитьРазметку(){
  // удаляем ранее загруженную X3D-разметку, если она есть
  if (document.getElementById("модель")!=undefined) { 
    document.getElementById("модель").parentNode.removeChild(document.getElementById("модель"));
  }
  if (document.getElementById("x3dom_logdiv")!=undefined) { 
    document.getElementById("x3dom_logdiv").parentNode.removeChild(document.getElementById("x3dom_logdiv"));
  }
   // отключаем библиотеку x3dom
   var head = document.head;
  if( head.children[head.children.length-2].src='../scripts/x3dom-full.js'){
	head.removeChild(head.children[head.children.length-2]);
  }
}