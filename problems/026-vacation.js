/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    let getMonth = date.slice(3, 5);
    let getDay = date.slice(0, 2);
    let getYear = date.slice(6);
    let dateFormatted = `${getMonth}.${getDay}.${getYear}`;
    let dateTimestamp = new Date(dateFormatted).getTime() + 1209600000;
    let dateNeeded = new Date(dateTimestamp);
    let options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    };
    return dateNeeded.toLocaleString("ru-RU", options);
}

module.exports = vacation;
