/**
 Задача "Zip". Напишите функцию zip(arr1, arr2), которая принимает два массива и возвращает новый массив, состоящий из
 пар элементов из arr1 и arr2, где элементы с одинаковыми индексами объединены в пары. Если длины массивов не
 совпадают, функция должна вернуть массив, длина которого равна длине более короткого из двух массивов. Например,
 zip([1, 2, 3], ['a', 'b', 'c']) должна вернуть [[1, 'a'], [2, 'b'], [3, 'c']].
 * */
function zip(arr1, arr2) {
    // Your code
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr = [arr1[i], arr2[i]];
        result.push(arr);
    }
    if (arr1.length > arr2.length) {
        result.length = arr2.length;
    } else {
        result.length = arr1.length;
    }
    return result;
}
