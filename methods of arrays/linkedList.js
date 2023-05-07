/*
 Задача "Create List".
 Напишите функцию createList(array), которая принимает массив элементов и возвращает связный список,
 где каждый элемент массива является значением узла списка, а связи между узлами создаются последовательно.

 Пример:
 const array = [1, 2, 3, 4, 5];

 Вернёт:
 {
   value: 1,
   next: {
     value: 2,
     next: {
       value: 3,
       next: {
         value: 4,
         next: {
           value: 5,
           next: null
         }
       }
     }
   }
 }

 Если массив пустой, то функция должна вернуть null.
 Если массив содержит только один элемент, то функция должна вернуть связный список из одного узла.
 */
const arr = [1, 2, 3, 4, 5];

function createList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], next: list };
    }
    return list;
}
