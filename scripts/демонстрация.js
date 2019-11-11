function открытьДемо(){
  скрытьВсеМеню();
  снятьПрозрачность();
  document.getElementById("режимРедактирования").className = "скрытоеМеню";
  показатьМеню("режимДемонстрации");
  var меню = document.getElementById("режимДемонстрации");
  меню.innerHTML = "";
  var номер;
  for(var i=1; i<=N; i++){
	if(ведущее){
	  номер = ведущее;
	  i=N;
	} else {
	  номер = i;
	}
    var текст1 = document.createElement("label");
	текст1.innerHTML = 'q'+номер+": ";
	var ползунок = document.createElement("input");
	var выводЗначения = document.createElement("output");
	var тело = document.getElementById("тело_"+номер);
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