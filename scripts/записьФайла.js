function сохранитьПроект(){
  if(проект==undefined){
    document.getElementById("сохранитьПроект").click();
  } else {
    записатьТаблицы();
  }
}

function сохранитьФайлМС(){
  document.getElementById("сохранитьФайл").click();
}

function записатьФайлМС() {
  require('fs').writeFile(this.value, обработатьРазметку(document.getElementById("модель").innerHTML), результатЗаписи);
  document.getElementById("сохранитьФайл").value="";
}

/*
function сохранитьПример(){ 
  document.getElementById("сохранитьПример").click();
}

function записатьФайлПроекта() {
  if(проект==undefined){
    проект = this.value;
  }
  var ФС = require('fs');
  var модель = document.getElementById("модель");
  ФС.writeFile(проект+"\\МС.x3d", обработатьРазметку(модель.innerHTML), результатЗаписи);
  document.getElementById("сохранитьПроект").value="";
}
  

  
  */
function обработатьРазметку(разметка){
  return разметка.replace(/<canvas[\s\S]*<\/span><\/div><\/x3d>/,"</x3d>").replace("skycolor","skyColor")
    .replace(/bottomradius/g,"bottomRadius").replace(/diffusecolor/g,"diffuseColor")
	.replace(/transparency="0\.7"/g,'transparency="0"').replace(/diffuseColor="1,0,0"/gi,'diffuseColor="0,1,0"');
}

function результатЗаписи(ошибка) {
  if(ошибка) {
    console.log(ошибка);
  } else {
   console.log("The file was saved!");
  }
}