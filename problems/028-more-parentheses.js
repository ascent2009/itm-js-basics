/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    let result = 0;
    const reg = /\(\)\<\>\{\}\[\])/g;
    for (let i = 0; i < value.length && result >= 0; i++) {
        result += value[i] === reg ? 1 : -1;
    }

    return result === 0;
}

module.exports = parentheses;
