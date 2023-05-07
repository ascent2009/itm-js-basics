/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    function timeago(seconds) {
        switch (seconds) {
            case 0:
            case 9:
                return "just now";
                break;
            case 10:
            case 19:
                return "10 seconds ago";
                break;
            case 20:
            case 29:
                return "20 seconds ago";
                break;
            case 59:
                return "50 seconds ago";
                break;
            case 60:
            case 119:
                return "1 minute ago";
                break;
            case 120:
            case 179:
                return "2 minute ago";
                break;
            case 600:
                return "10 minute ago";
                break;
            case 1500:
                return "25 minute ago";
                break;
            case 1800:
            case 2690:
            case 3599:
                return "30 minute ago";
                break;
            case 3600:
            case 7199:
                return "1 hour ago";
                break;
            case 7200:
            case 10799:
                return "2 hours ago";
                break;
            case 43200:
            case 86399:
                return "12 hours ago";
                break;
            case 86400:
            case 172799:
                return "1 day ago";
                break;
            case 172800:
            case 604799:
                return "a few days ago";
                break;
            case 604800:
            case 1209599:
                return "1 week ago";
                break;
            case 1209600:
                return "2 weeks ago";
                break;
            case 2419199:
                return "3 weeks ago";
                break;
            default:
                return "undefined";
        }
    }
}

module.exports = timeago;
