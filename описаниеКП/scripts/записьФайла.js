function сохранитьКПвФайл(){
  if(проект==undefined){
    document.getElementById("сохранитьФайл").click();
  } else {
    записатьФайлСтруктуры();
  }
}


function записатьФайлСтруктуры() {
  if(проект==undefined){
    проект = this.value;
  }
  var ФС = require('fs');
  var модель = document.getElementById("модель");
  ФС.writeFile(проект+"\\структураМС.x3d", обработатьРазметку(модель.innerHTML), результатЗаписи);
  document.getElementById("сохранитьПроект").value="";
}
 
  
  
function обработатьРазметку(разметка){
  return разметка.replace(/<canvas[\s\S]*<\/span><\/div><\/x3d>/,"</x3d>").replace("skycolor","skyColor");
}

function результатЗаписи(ошибка) {
  if(ошибка) {
    console.log(ошибка);
  } else {
   console.log("Файл записан!");
  }
}