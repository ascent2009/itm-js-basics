/**
 Задача "Shuffle". Напишите функцию shuffle(arr), которая принимает массив и перемешивает его элементы в случайном
 порядке. Функция должна изменять исходный массив, а не возвращать новый. Например, shuffle([1, 2, 3, 4, 5]) может
 вернуть [3, 1, 5, 4, 2].
 * */
function shuffle(arr) {
    // Your code
    return arr
        .slice(0, 1)
        .concat(arr[3])
        .concat(arr.slice(2, 4))
        .concat(arr.slice(4));
}
