/**
 Задача "Group by". Напишите функцию groupBy(arr, key), которая принимает массив объектов и строку key, соответствующую
 ключу объекта, по которому нужно сгруппировать элементы. Функция должна возвращать новый объект, где каждый ключ -
 уникальное значение, полученное из свойства key, а каждое значение - массив объектов, у которых значение свойства key
 равно ключу. Например, groupBy([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Alice'}], 'name') должна
 вернуть {Alice: [{id: 1, name: 'Alice'}, {id: 3, name: 'Alice'}], Bob: [{id: 2, name: 'Bob'}]}.
 * */
function groupBy(arr, key) {
    // Your code
    return arr.reduce((acc, a) => {
        (acc[a[key]] = acc[a[key]] || []).push(a);
        return acc;
    }, {});
}