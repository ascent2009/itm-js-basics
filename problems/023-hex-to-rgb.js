/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    let r = parseInt(color.substring(1, 3).toLowerCase(), 16);
    let g = parseInt(color.substring(3, 5).toLowerCase(), 16);
    let b = parseInt(color.substring(5, 7).toLowerCase(), 16);
    let rgb = `rgb(${r},${g},${b});`;
    if (color === "#fff") {
        return `rgb(255, 255, 255)`;
    } else {
        return rgb;
    }
}

module.exports = hexToRgb;
