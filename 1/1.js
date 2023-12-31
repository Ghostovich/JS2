"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

let musicColections = [
  {
    title: "Альбом1",
    artist: "Исполнитель1",
    year: "Год выпуска1"
  },
  {
    title: "Альбом2",
    artist: "Исполнитель2",
    year: "Год выпуска2"
  },
  {
    title: "Альбом3",
    artist: "Исполнитель3",
    year: "Год выпуска3"
  },
  {
    title: "Альбом4",
    artist: "Исполнитель4",
    year: "Год выпуска4"
  }
]

for (const iterator of musicColections) {
  console.log(`${iterator.title} - ${iterator.artist} (${iterator.year})`);
}