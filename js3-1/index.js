// Отслеживание изменения ориентации экрана:
// Напишите код, который отслеживает изменение ориентации экрана устройства 
// (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-странице.

// Предупреждение о несохраненных данных:
// Создайте веб-форму с текстовым полем. 
// Реализуйте функционал, при котором при попытке закрыть вкладку браузера 
// появляется диалоговое окно с предупреждением о возможности потери введенных, 
// но несохраненных данных. 

const orientationEl = document.querySelector('.orientation');
const inputTextEl = document.querySelector('.inputText');

window.addEventListener("orientationchange", function () {
  if (window.orientation === 90) {
    orientationEl.textContent = 'Ландшафтная ориентация';
  }
  else {
    orientationEl.textContent = 'Портретная ориентация';
  }
}, false);


window.onbeforeunload = function(evt) {
  evt = evt || window.event;
  evt.returnValue = "Вы же ничего не сохранили!";
}

