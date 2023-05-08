/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    let checkArrs = false;
    if (!object) {
        return;
    } else {
        let keysArr = Object.keys(object);
        for (let i = 0; i < path.length; i++) {
            for (let j = 0; j < keysArr.length; j++) {
                if (path[i] === keysArr[j]) return true;
                else return false;
            }
        }
        return checkArrs;
    }
}

module.exports = has;
