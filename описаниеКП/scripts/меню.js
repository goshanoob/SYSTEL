function построитьМеню(){
  var интерфейс = require('nw.gui');
  // Создать пустое меню
  var менюФайл = new интерфейс.Menu();
  // Добавить в него пункты 
  менюФайл.append(new интерфейс.MenuItem({ label: 'Новая модель',  click: создатьПроект }));
  менюФайл.append(new интерфейс.MenuItem({ label: 'Открыть модель',  click: загрузитьПроект }));
  менюФайл.append(new интерфейс.MenuItem({ label: 'Сохранить описание',  click: сохранитьКПвФайл }));
  менюФайл.append(new интерфейс.MenuItem({ label: 'Выйти',  click: закрытьПрограмму }))

  // Создать верхнее меню
  var полосаМеню = new интерфейс.Menu({ type: 'menubar', title: 'Управление' });
  полосаМеню.append(new интерфейс.MenuItem({ label: 'Файл', submenu: менюФайл}));
  
  var  менюНастройки = new интерфейс.Menu();
  менюНастройки.append(new интерфейс.MenuItem({ label: 'Восстановить сцену', click: восстановитьАСК }));
  менюНастройки.append(new интерфейс.MenuItem({ label: 'Положение камеры', click: масштабировать }));
  менюНастройки.append(new интерфейс.MenuItem({ label: 'Размеры осей ССК',  click: настроитьОси }));
  полосаМеню.append(new интерфейс.MenuItem({ label: 'Настройки', submenu: менюНастройки}));  
    
  var  менюРежимы = new интерфейс.Menu();
  менюРежимы.append(new интерфейс.MenuItem({ label: 'Описание КП', click: описатьКП }));
  менюРежимы.append(new интерфейс.MenuItem({ label: 'Демонстрация',  click: открытьДемо }));
  полосаМеню.append(new интерфейс.MenuItem({ label: 'Режимы', submenu: менюРежимы}));

  
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

