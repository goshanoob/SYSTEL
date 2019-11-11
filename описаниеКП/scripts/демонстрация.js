function открытьДемо(){
  скрытьВсеМеню();
  показатьМеню("режимДемонстрации");
  var меню = document.getElementById("режимДемонстрации");
  меню.innerHTML = "";
  var номер;
  for(var i=1; i<=N; i++){
	номер = i;
	var тело = document.getElementById("тело_"+номер);
	switch(тело.getAttribute("видкп")){
	  case "ПКП": 
	    получитьПолзунокПКП();
	  break;
	  case "ВКП": 
	    получитьПолзунокВКП();
	  break;
	  case "ЦКП": 
	    получитьПолзунокПКП(); получитьПолзунокВКП();
	  break;
		
		
	}
	function получитьПолзунокПКП(){
     var текст1 = document.createElement("label");
	 текст1.innerHTML = 'q'+номер+": ";
	 var ползунок = document.createElement("input");
	 var выводЗначения = document.createElement("output");
	
	 ползунок.type="range";
	 ползунок.className="ползунок_демо";
	 var минимальное_p = тело.getAttribute("минимальное_p");
	 var максимальное_p = тело.getAttribute("максимальное_p");
	 if(минимальное_p > максимальное_p){
	  ползунок.min=максимальное_p;
	  ползунок.max=минимальное_p;
    	} else {
	  ползунок.min=минимальное_p;
	  ползунок.max=максимальное_p;
	 } 
	 ползунок.step=Math.abs(parseFloat(((максимальное_p-минимальное_p)/10).toFixed(3)));
	 ползунок.id = "p"+номер;
	 ползунок.value = '0';
     выводЗначения.innerHTML = '0';
     выводЗначения.id = "значение_p"+номер;
	 меню.appendChild(текст1);
	 меню.appendChild(ползунок);
	 меню.appendChild(выводЗначения);
     ползунок.addEventListener('input', изменитьПоложениеТела);
	}
	function получитьПолзунокВКП(){
     var текст1 = document.createElement("label");
	 текст1.innerHTML = 'q'+номер+": ";
	 var ползунок = document.createElement("input");
	 var выводЗначения = document.createElement("output");
	
	 ползунок.type="range";
	 ползунок.className="ползунок_демо";
	 var минимальное_q = тело.getAttribute("минимальное_q");
	 var максимальное_q = тело.getAttribute("максимальное_q");
	 if(минимальное_q > максимальное_q){
	  ползунок.min=максимальное_q;
	  ползунок.max=минимальное_q;
    	} else {
	  ползунок.min=минимальное_q;
	  ползунок.max=максимальное_q;
	 } 
	 ползунок.step=Math.abs(parseFloat(((максимальное_q-минимальное_q)/10).toFixed(3)));
	 ползунок.id = "q"+номер;
	 ползунок.value = '0';
     выводЗначения.innerHTML = '0';
     выводЗначения.id = "значение_q"+номер;
	 меню.appendChild(текст1);
	 меню.appendChild(ползунок);
	 меню.appendChild(выводЗначения);
     ползунок.addEventListener('input', изменитьПоложениеТела);
	}
  }
}