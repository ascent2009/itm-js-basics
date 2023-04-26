/**
 Задача "Chunk". Напишите функцию chunk(arr, size), которая принимает массив и число size, и возвращает новый массив,
 состоящий из подмассивов длиной не более size. Например, chunk([1, 2, 3, 4, 5], 2) должна вернуть [[1, 2], [3, 4], [5]].
 * */
function chunk(arr, size) {
    // Your code
    let sliced = [];
    for (let i = 0; i < arr.length; i += size) {
        let subArr = arr.slice(i, i + size);
        sliced.push(subArr);
    }
    return sliced;
}
