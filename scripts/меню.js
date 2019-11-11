function построитьМеню(){
  var интерфейс = require('nw.gui');
  // Создать пустое меню
  var менюФайл = new интерфейс.Menu();
  // Добавить в него пункты 
  менюФайл.append(new интерфейс.MenuItem({ label: 'Новая модель',  click: создатьПроект }));
  менюФайл.append(new интерфейс.MenuItem({ label: 'Открыть модель',  click: загрузитьПроект }));
  менюФайл.append(new интерфейс.MenuItem({ label: 'Соханить таблицы',  click: сохранитьПроект }));
  менюФайл.append(new интерфейс.MenuItem({ label: 'Соханить модель как',  click: сохранитьФайлМС }));
  менюФайл.append(new интерфейс.MenuItem({ label: 'Выйти',  click: закрытьПрограмму }))

  // Создать верхнее меню
  var полосаМеню = new интерфейс.Menu({ type: 'menubar', title: 'Управление' });
  полосаМеню.append(new интерфейс.MenuItem({ label: 'Файл', submenu: менюФайл}));
  
  var  менюНастройки = new интерфейс.Menu();
  менюНастройки.append(new интерфейс.MenuItem({ label: 'Единицы измерения'}));
  менюНастройки.append(new интерфейс.MenuItem({ label: 'Восстановить сцену', click: восстановитьАСК }));
  менюНастройки.append(new интерфейс.MenuItem({ label: 'Макс. линейный размер', click: установитьЛинРазмер }));
  менюНастройки.append(new интерфейс.MenuItem({ label: 'Точность округления', click: установитьТочность }));
  менюНастройки.append(new интерфейс.MenuItem({ label: 'Положение камеры', click: масштабировать }));
  менюНастройки.append(new интерфейс.MenuItem({ label: 'Размеры осей ССК',  click: настроитьОси }));
  полосаМеню.append(new интерфейс.MenuItem({ label: 'Настройки', submenu: менюНастройки}));  
  
  var  менюРедактирование = new интерфейс.Menu();
  менюРедактирование.append(new интерфейс.MenuItem({ label: 'Описать модель',  click: описатьМодель }));
  менюРедактирование.append(new интерфейс.MenuItem({ label: 'Описать КП',  click: описатьКП }));
  менюРедактирование.append(new интерфейс.MenuItem({ label: 'Редактировать МС',  click: создатьФС }));
  полосаМеню.append(new интерфейс.MenuItem({ label: 'Редактирование', submenu: менюРедактирование}));
  
  var  менюРежимы = new интерфейс.Menu();
  менюРежимы.append(new интерфейс.MenuItem({ label: 'Моделирование', click: открытьРедактор }));
  менюРежимы.append(new интерфейс.MenuItem({ label: 'Демонстрация',  click: открытьДемо }));
  полосаМеню.append(new интерфейс.MenuItem({ label: 'Режимы', submenu: менюРежимы}));
  
  var  менюПримеры = new интерфейс.Menu();
  менюПримеры.append(new интерфейс.MenuItem({ label: 'ПСТТОВ' }));
  менюПримеры.append(new интерфейс.MenuItem({ label: 'ПСТТОД' }));
  менюПримеры.append(new интерфейс.MenuItem({ label: 'ПСТТВ' }));
  менюПримеры.append(new интерфейс.MenuItem({ label: 'ПСТТ' }));
  менюПримеры.append(new интерфейс.MenuItem({ label: 'СТТОВ' }));
  менюПримеры.append(new интерфейс.MenuItem({ label: 'СТТОД' }));
  менюПримеры.append(new интерфейс.MenuItem({ label: 'СТТВ' }));
  менюПримеры.append(new интерфейс.MenuItem({ label: 'СТТ' }));
  полосаМеню.append(new интерфейс.MenuItem({ label: 'Примеры', submenu: менюПримеры}));
    
  var  менюСправка = new интерфейс.Menu();
  менюСправка.append(new интерфейс.MenuItem({ label: 'Инструкция пользователя',  click: function(){   
     window.open('справка.html');} }));
  менюСправка.append(new интерфейс.MenuItem({ label: 'Методическое руководство' }));
  менюСправка.append(new интерфейс.MenuItem({ label: 'Аббревиатуры' }));
  менюСправка.append(new интерфейс.MenuItem({ label: 'Определения терминов ПО',  click: function(){   
     window.open('Определения терминов ПО.html', '_blank');} }));
  менюСправка.append(new интерфейс.MenuItem({ label: 'Определения терминов механики систем тел' }));
  менюСправка.append(new интерфейс.MenuItem({ label: 'Определения терминов теории управления' }));
  менюСправка.append(new интерфейс.MenuItem({ label: 'Определения терминов РТК' }));
  
  полосаМеню.append(new интерфейс.MenuItem({ label: 'Справка', submenu: менюСправка}));

  //Получить текущее окно и подключить к нему верхнее меню
  интерфейс.Window.get().menu = полосаМеню;

  function закрытьПрограмму(){
    интерфейс.App.quit();
  }
}

function создатьПроект(){
  var ФС = require('fs');
  ФС.readFile('./Проекты/Новый проект/MC.x3d', 'utf8', результатЧтения);
  //N = 0;
  проект=undefined;
  document.getElementById("сохранитьПроект").value="";
  document.getElementById("открытьФайл").value="";
  скрытьВсеМеню();
  document.getElementById("режимРедактирования").className = "открытоеМеню";
  setTimeout(function(){
     выбраннаяФорма=document.getElementById("тело_0").getElementsByTagName("Shape")[0];
     выбраннаяФорма.addEventListener('click',выбратьФорму,false);
   }, 2000);
}


function описатьМодель(){
  скрытьВсеМеню();
  показатьМеню("описаниеМодели");
  
}

function открытьРедактор(){
  скрытьВсеМеню();
  document.getElementById("режимРедактирования").className = "открытоеМеню";
}

function масштабировать(){
  скрытьВсеМеню();
  показатьМеню("настройкиКамеры");
  
}

function восстановитьАСК(){
  document.getElementsByTagName("Viewpoint")[0].setAttribute('orientation',"0 0 0 0");
}

function настроитьОси(){
  скрытьВсеМеню();
  показатьМеню("настройкиОсей");
}

function установитьЛинРазмер(){
  скрытьВсеМеню();
  показатьМеню("максЛинРазмер");
}

function установитьТочность(){
  скрытьВсеМеню();
  показатьМеню("точностьОкругления");
  
}

function настроитьПолзунки(){
  var ползунки = document.getElementsByClassName("ползунокГО");
  for(var i=0, количество = ползунки.length; i<количество; i++){
	ползунки[i].max = линейныйРазмер;
	ползунки[i].step = линейныйРазмер/10;
  }
}
